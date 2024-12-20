import axios from 'axios';

const API_URL = 'https://api.example.com/financial-reports'; // Ganti dengan URL API Anda

export const getReports = () => axios.get(`${API_URL}`);
export const getReportById = (id) => axios.get(`${API_URL}/${id}`);
export const createReport = (data) => axios.post(`${API_URL}`, data);