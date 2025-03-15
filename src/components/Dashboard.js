import React, { useEffect, useState } from "react";
import { fetchLogs, addLog } from "./api";
import './styles.css';

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState({ date: '', place: '', year: '', experience: '' });

  useEffect(() => {
    const loadLogs = async () => {
      const { data } = await fetchLogs();
      setLogs(data);
    };
    loadLogs();
  }, []);

  const handleChange = (e) => {
    setNewLog({ ...newLog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addLog(newLog);
    setNewLog({ date: '', place: '', year: '', experience: '' });
    // Reload logs after adding a new one
    const { data } = await fetchLogs();
    setLogs(data);
  };

  return (
    <div className="container">
      <h2>Add Travel Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={newLog.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={newLog.place}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newLog.year}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={newLog.experience}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Experience</button>
      </form>
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

export default Dashboard;