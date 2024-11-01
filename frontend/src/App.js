import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import BudgetTracker from './components/BudgetTracker';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
