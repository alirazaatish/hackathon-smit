import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoanPage from '../Pages/LoanPage';
import LoginPage from '../Pages/LoginPage';
// import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage isAdmin={false} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
