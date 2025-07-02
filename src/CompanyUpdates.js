import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Adjust this path to your Firebase config
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./CompanyUpdates.css";

const CompanyUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const updatesPerPage = 6;

  useEffect(() => {
    const fetchUpdates = async () => {
      const q = query(collection(db, "updates"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUpdates(data);
    };
    fetchUpdates();
  }, []);

  // Search & Sort Logic
  const filteredUpdates = updates
    .filter(
      (update) =>
        update.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = a.date?.toDate?.() || new Date(a.date);
      const dateB = b.date?.toDate?.() || new Date(b.date);
      return sortOrder === "latest"
        ? dateB - dateA
        : dateA - dateB;
    });

  // Pagination Logic
  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(filteredUpdates.length / updatesPerPage);

  return (
    <div className="company-updates-page">
      <div className="updates-list-container">
        <h2 className="updates-heading">Company Updates</h2>

        <div className="controls">
          <div className="pagination-info">
            Displaying {filteredUpdates.length === 0 ? 0 : indexOfFirstUpdate + 1}–
            {Math.min(indexOfLastUpdate, filteredUpdates.length)} of {filteredUpdates.length}
          </div>

          <input
            type="text"
            placeholder="Search updates..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-dropdown"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div className="updates-grid-wrapper">
          <div className="updates-grid">
            {currentUpdates.map((update) => (
              <div key={update.id} className="update-card">
                <h3>{update.title || "Untitled Update"}</h3>
                <p>{update.description || "No description available."}</p>
                <span className="update-date">
                  {update.date?.toDate?.().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) || "No date"}
                </span>
                {update.pdfUrl && (
                  <button
                    className="press-release-button"
                    onClick={() =>
                      window.open(update.pdfUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    Press Release
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdates;
