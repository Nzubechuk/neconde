import aboutBg from '../assets/Home-Banner-Our-Values.jpg';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-visual animate-fade-up">
            <div className="image-wrapper">
              <img src={aboutBg} alt="Neconde Values" />
              <div className="image-overlay"></div>
            </div>
            <div className="visual-card">
              <h4>45% Stake</h4>
              <p>In OML 42 (Niger Delta)</p>
            </div>
          </div>

          <div className="about-content animate-fade-up delay-100">
            <h5 className="section-eyebrow">Who We Are</h5>
            <h2 className="section-title">Independent Energy <span className="text-sushi">Leader</span></h2>

            <p className="lead-text">
              Neconde is an independent Nigeria oil and gas company serving as a special purpose vehicle for the acquisition and development of petroleum assets.
            </p>

            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">01</div>
                <div>
                  <h3>Vision</h3>
                  <p>To be a leading Australian energy company, delivering sustainable value.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">02</div>
                <div>
                  <h3>Mission</h3>
                  <p>Growing reserves and production safely, efficiently and profitably.</p>
                </div>
              </div>
            </div>

            <button onClick={() => navigate('/about-profile')} className="btn btn-primary" style={{ marginTop: '2rem' }}>Corporate Profile</button>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          background-color: var(--bg-primary);
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .section-eyebrow {
          color: var(--color-sushi);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.1;
        }

        .lead-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .values-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .value-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .value-icon {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-laurel);
          opacity: 0.8;
          line-height: 1;
        }

        .value-item h3 {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .value-item p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .image-wrapper {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          height: 600px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .visual-card {
          position: absolute;
          bottom: 10%;
          right: -30px;
          background: var(--color-deep-green);
          color: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow-hover);
          min-width: 200px;
        }

        .visual-card h4 {
          font-size: 2rem;
          color: var(--color-sushi);
          margin-bottom: 0.2rem;
        }

        @media (max-width: 900px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .image-wrapper {
             height: 400px;
           }

          .visual-card {
            right: 20px;
            bottom: -20px;
          }
        }
      `}</style>
    </section>
  );
}
