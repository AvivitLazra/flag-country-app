import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewComponent from './components/NewComponent';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
