import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Adjust path if needed
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import "./Announcement.css";

const Announcement = () => {
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);

  useEffect(() => {
    const fetchLatestAnnouncement = async () => {
      const q = query(collection(db, "updates"), orderBy("date", "desc"), limit(1));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (data.length > 0) {
        setLatestAnnouncement(data[0]);
      }
    };

    fetchLatestAnnouncement();
  }, []);

  return (
    <div className="announcement-section">
      <h2 className="announcement-heading">Announcements</h2>

      {latestAnnouncement ? (
        <div className="announcement-card">
          <div className="announcement-text">
            <h3>{latestAnnouncement.title}</h3>
            <p>{latestAnnouncement.description}</p>
            <div className="announcement-meta">
              <span className="source">TESSERACT FLEX FUEL</span>
              <span className="dot">|</span>
              <span className="date">
                {latestAnnouncement.date?.toDate?.().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="announcement-logos">
            <img src="/announcementlogo.png" alt="Tesseract Flex Fuel Logo" />
            {/* Add more partner logos if needed */}
          </div>
        </div>
      ) : (
        <p className="no-announcement">No announcements yet.</p>
      )}
    </div>
  );
};

export default Announcement;
