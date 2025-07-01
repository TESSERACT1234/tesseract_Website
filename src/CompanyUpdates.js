import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./CompanyUpdates.css";

const CompanyUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const updatesPerPage = 6;

  useEffect(() => {
    const fetchUpdates = async () => {
      const q = query(collection(db, "updates"), orderBy("date", sortOrder));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUpdates(data);
    };
    fetchUpdates();
  }, [sortOrder]);

  // Filter by search
  const filteredUpdates = updates.filter((update) =>
    `${update.title} ${update.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(filteredUpdates.length / updatesPerPage);

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    setCurrentPage(1);
  };

  return (
    <div className="company-updates-page">
      <section className="updates-list-container">

        {/* Heading */}
        <h2 className="updates-heading">Company Press Releases</h2>

        {/* Top Controls */}
        

        {/* Cards */}
        <div className="updates-grid">
          {currentUpdates.length > 0 ? (
            currentUpdates.map((update) => (
              <div key={update.id} className="update-card">
                <div className="update-card-body">
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
                    <div className="card-action">
                      <button
                        onClick={() => window.open(update.pdfUrl, "_blank")}
                        className="press-release-button"
                      >
                        View Press Release
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No updates found for "{searchTerm}"</p>
          )}
        </div>

        {/* Bottom Pagination */}
        <div className="pagination bottom-pagination">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyUpdates;
