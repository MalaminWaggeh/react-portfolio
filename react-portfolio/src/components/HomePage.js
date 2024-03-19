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

  const handleEmailClick = () => {
    alert('SupremeMal123@gmail.com || 862-224-8929');
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '24px' }}>
      <section className="intro-section" style={{ padding: '10px', height: '500px' }}>
        <h1>Welcome to My Portfolio!</h1>
        <h2>Hi there! My name is Malamin Waggeh!</h2>
        <div className="contact-links">
          <h1>Socials</h1>
          <a href="https://www.linkedin.com/in/malamin-waggeh-b32494299/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://github.com/MalaminWaggeh" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT1xCnrnVH2C-rLDB_rEW6PMxJohPMLkizH5haeTuyw&s" alt="GitHub" style={{ width: '50px', height: '50px' }} />
          </a>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeJPGScRtcCWN5jmMI1YwLVCNaYwtCswpzA&usqp=CAU" alt="Email" onClick={handleEmailClick} style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
          </div>
        </div>
        <h3>A Full Stack Developer with a passion for overcoming challenges, learning, creating, and critical thinking!</h3>
      </section>
      
      <section className="skills-section" style={{ height: '500px', backgroundColor: '#f0f0f0' }}>
        <h2>Skills</h2>
        <h2>Frontend</h2>
        <p>HTML, CSS, JavaScript, React.js, React Redux, BootStrap,</p>
        <h1>Backend</h1>
        <p>MongoDB, Node.js, MySQL.</p>
        <h1>Languages</h1>
        <p>JavaScript</p>
      </section>
      
      <section className="quote-section" style={{ height: '300px', backgroundColor: '#f0f0f0' }}>
        <h2>Daily Quote</h2>
        <p>{quote}</p>
      </section>
    </div>
  );
}

export default HomePage;
