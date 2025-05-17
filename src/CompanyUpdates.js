import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Adjust based on your path
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./CompanyUpdates.css";

const CompanyUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const updatesPerPage = 5;

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

  // Pagination logic
  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = updates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(updates.length / updatesPerPage);

  return (
    <div className="company-updates-page">
      <div className="hero-image">
        <div className="hero-overlay">
          <h1 className="hero-message">Driving the Future with Biofuels</h1>
          <p><b>We're happy to keep you informed with the latest progress and announcements.</b></p>
          
        </div>
      </div>

      <div className="updates-list-container">
        <h2 className="updates-heading">Company Updates</h2>

        {currentUpdates.map((update, index) => (
          <div key={update.id} className={`update-box ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="update-content">
              <h3>{update.title || "Untitled Update"}</h3>
              <p>{update.description || "No description available."}</p>
              <span className="update-date">
                {update.date?.toDate?.().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) || "No date"}
              </span>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
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
