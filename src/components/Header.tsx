import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/neconde_logo.png';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="Neconde Energy" style={{ height: '50px' }} />
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Us</a>
          <a href="#operations" onClick={(e) => { e.preventDefault(); handleNavClick('operations'); }}>Operations</a>
          <a href="#sustainability" onClick={(e) => { e.preventDefault(); handleNavClick('sustainability'); }}>Sustainability</a>
          <Link to="/media" onClick={() => setMenuOpen(false)}>Media</Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>
          <Link to="/contact-full" onClick={() => setMenuOpen(false)} className="btn-nav">Contact</Link>
        </nav>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          background: var(--bg-header);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          padding: 0.8rem 0;
          box-shadow: var(--shadow-card);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-laurel);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav a {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-primary);
          position: relative;
          opacity: 0.8;
          transition: all 0.3s;
          cursor: pointer;
        }

        .nav a:not(.btn-nav):hover {
          opacity: 1;
          color: var(--color-laurel);
        }

        .nav a:not(.btn-nav)::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-sushi);
          transition: width 0.3s;
        }

        .nav a:not(.btn-nav):hover::after {
          width: 100%;
        }

        .btn-nav {
          padding: 0.6rem 1.5rem;
          background: var(--color-laurel);
          color: white !important;
          border-radius: 4px;
          opacity: 1 !important;
          font-weight: 600 !important;
          text-decoration: none;
        }

        .btn-nav:hover {
          background: var(--color-deep-green);
          transform: translateY(-1px);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 2px;
          background: var(--text-primary);
          transition: 0.3s;
        }
        
        .theme-toggle-wrapper {
          display: flex;
          align-items: center;
        }

        @media (max-width: 900px) {
          .nav {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transform: translateX(100%);
            transition: transform 0.4s ease;
          }
          
          .nav.open {
            transform: translateX(0);
          }

          .nav a {
            font-size: 1.25rem;
          }

          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
