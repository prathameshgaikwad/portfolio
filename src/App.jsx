import { useState } from 'react';
import './style.css';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="app-container">
        <header className="site-header">
          <div className="logo">Prathamesh</div>
          <nav className="site-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={activeNav === item.id ? 'active' : ''}
                    onClick={() => setActiveNav(item.id)}
                  >
                    <span className="dot"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="hero-section">
          <div className="hero-content">
            <div className="intro-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square square-icon"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
              </svg>
              <p>
                I'm a software engineer who strives to create frictionless user
                experiences and products that impact lives.
              </p>
            </div>
          </div>

          <div className="hero-footer">
            <div className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square square-icon"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
              </svg>
              <p>Dreaming and crafting in India.</p>
            </div>

            <div className="footer-right">
              <div className="cta-buttons">
                <button className="contact-btn">Contact</button>
                <a
                  href="/resume.pdf"
                  download
                  className="scroll-btn"
                  title="Download Resume"
                >
                  ↓
                </a>
              </div>
              <div className="contact-info">
                <a href="mailto:prathameshg461@gmail.com" className="email-link">
                  prathameshg461@gmail.com
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="decorative-curves">
          <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Large left circular arc */}
            <circle
              cx="100"
              cy="650"
              r="288"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />

            {/* Elegant sweeping curve on the right */}
            <path
              d="M 600 0 Q 900 400 800 800"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
        <div className="gradient-bg"></div>
      </div>
    </>
  );
}

export default App;
