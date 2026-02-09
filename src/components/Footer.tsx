import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/neconde_logo.png';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
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
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Neconde Energy" style={{ height: '50px', marginBottom: '1rem' }} />
            </Link>
            <p>Reliable. Sustainable. Energy.</p>
          </div>

          <div className="footer-nav">
            <div className="nav-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about-profile">About Us</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            <div className="nav-col">
              <h4>Operations</h4>
              <ul>
                <li><Link to="/operations-detail">OML 42</Link></li>
                <li><a href="#sustainability" onClick={(e) => { e.preventDefault(); handleNavClick('sustainability'); }}>Sustainability</a></li>
                <li><Link to="/operations-detail">HSE Policy</Link></li>
              </ul>
            </div>
            <div className="nav-col">
              <h4>Socials</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Neconde Energy Limited. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-deep-green);
          color: white;
          padding: 6rem 0 2rem 0;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-brand {
          max-width: 300px;
        }



        .footer-brand p {
          color: rgba(255,255,255,0.6);
        }

        .footer-nav {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .nav-col h4 {
          color: var(--color-sushi);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .nav-col ul {
          list-style: none;
          padding: 0;
        }

        .nav-col li {
          margin-bottom: 0.8rem;
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
        }

        .nav-col a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-col a:hover {
          color: white;
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          color: white !important;
          text-decoration: none !important;
        }

        .social-links a:hover {
          background: var(--color-sushi);
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          text-align: center;
          color: rgba(255,255,255,0.4);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
}
