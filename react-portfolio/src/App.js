import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css'; // You can add styles here

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>My Projects</h2>
        <div className="projects">
          <Project
            title="Project 1"
            description="Description of project 1"
            imageUrl="project1.jpg"
          />
          <Project
            title="Project 2"
            description="Description of project 2"
            imageUrl="project2.jpg"
          />
          {/* Add more Project components as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;