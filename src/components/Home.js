import React, { useEffect, useState } from "react";
import { fetchLogs } from "./api";
import './styles.css';

const Home = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      const { data } = await fetchLogs();
      setLogs(data);
    };
    loadLogs();
  }, []);

  return (
    <div className="container">
      <h2>Travel Experiences</h2>
      <div className="card-container">
        {logs.map((log) => (
          <div key={log._id} className="log-card">
            <h3>{log.place} ({log.year})</h3>
            <p>{log.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;