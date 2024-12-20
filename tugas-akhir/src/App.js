import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import CreateReport from './pages/createreport';
import ReportDetail from './components/reportdetail';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<CreateReport />} />
      <Route path="/reports/:id" element={<ReportDetail />} />
    </Routes>
  </Router>
);

export default App;
