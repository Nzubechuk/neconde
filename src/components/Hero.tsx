import heroBg from '../assets/Home-Banner-Our-Approach.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-card animate-fade-up">
          <h1 className="hero-title">
            Unlock the <span className="text-sushi">Future of Energy</span>
          </h1>
          <p className="hero-subtitle">
            Neconde Energy Limited is a prominent independent oil and gas company.
            We are dedicated to the exploration, development, and production of oil and gas assets.
          </p>
          <div className="hero-actions">
            <button onClick={() => navigate('/operations-detail')} className="btn btn-primary">Our Expertise</button>
            <button onClick={() => navigate('/contact-full')} className="btn btn-outline" style={{ borderColor: 'var(--color-laurel)', color: 'var(--color-laurel)' }}>Contact Us</button>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          height: 90vh;
          width: 100%;
          position: relative;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: flex-start; /* Align content to left for diverse layout */
          margin-top: 60px; /* Offset for fixed header */
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%);
          z-index: 1;
        }
        
        [data-theme="dark"] .hero::before {
          background: linear-gradient(90deg, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.8) 40%, rgba(18,18,18,0) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-card {
          max-width: 600px;
          padding: 3rem;
          /* Glassmorphism card effect on light background */
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(15px);
          border-left: 5px solid var(--color-laurel);
          border-radius: 0 8px 8px 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        
        [data-theme="dark"] .hero-card {
           background: rgba(30, 30, 30, 0.8);
           box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-deep-green);
          letter-spacing: -1px;
        }
        
        [data-theme="dark"] .hero-title {
            color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          color: #444;
          font-weight: 400;
          line-height: 1.7;
        }
        
        [data-theme="dark"] .hero-subtitle {
             color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .hero {
            justify-content: center;
          }
          
          .hero::before {
            background: rgba(255,255,255,0.85);
          }
          
          [data-theme="dark"] .hero::before {
             background: rgba(18,18,18,0.9);
          }

          .hero-card {
            max-width: 100%;
            margin: 0 1rem;
            padding: 2rem;
            border-radius: 8px;
            border-left: 5px solid var(--color-laurel);
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
