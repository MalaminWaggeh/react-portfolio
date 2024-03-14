import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import Routes
import Header from './components/Header'; // Adjust import path for Header
import Footer from './components/Footer'; // Adjust import path for Footer
import HomePage from './components/HomePage'; // Adjust import path for HomePage
import ProjectsPage from './components/ProjectsPage'; // Adjust import path for ProjectsPage
import AboutMePage from './components/AboutMePage'; // Adjust import path for AboutMePage


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Wrap your Route components within a Routes element */}
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
