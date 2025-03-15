import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const fetchLogs = async () => {
    return await axios.get(`${API_URL}/api/travels`);
};

export const addLog = async (logData) => {
    return await axios.post(`${API_URL}/api/travels`, logData);
};

