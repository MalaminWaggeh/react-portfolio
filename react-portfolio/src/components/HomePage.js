import React, { useState, useEffect } from 'react';

function HomePage() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <section className="intro-section">
        <h2>Welcome to My Portfolio</h2>
        <p>Add your brief introduction here</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" />
          </a>
          {/* Add more contact links and icons as needed */}
        </div>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        {/* Add your skills here */}
      </section>
      <section className="quote-section">
        <h2>Daily Quote</h2>
        <p>{quote}</p>
      </section>
    </div>
  );
}

export default HomePage;
