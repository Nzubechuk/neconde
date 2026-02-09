import operationsBg from '../assets/Home-Banner-Our-Business-Model.jpg';
import { Link } from 'react-router-dom';

export default function Operations() {
  return (
    <section id="operations" className="operations-section">
      <div className="container">
        <div className="operations-header text-center">
          <h5 className="section-eyebrow">Our Assets</h5>
          <h2 className="section-title">Excellence in <span className="text-sushi">Operations</span></h2>
        </div>

        <div className="operations-card animate-fade-up">
          <div className="card-image" style={{ backgroundImage: `url(${operationsBg})` }}>
            <div className="card-overlay">
              <h3>OML 42</h3>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-heading">Asset Overview</h3>
            <p>
              OML 42 is a large lease of 814km² located in the swamps of the Niger Delta.
              The block contains 7 fields: Odidi, Jones Creek, Egwa, Batan, Ajuju, Omoku, and Sekele.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-val">814</span>
                <span className="stat-label">Square Km</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">7</span>
                <span className="stat-label">Total Fields</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">4</span>
                <span className="stat-label">Producing</span>
              </div>
            </div>

            <Link to="/operations-detail" className="link-arrow">View Detailed Report →</Link>
          </div>
        </div>
      </div>

      <style>{`
        .operations-section {
          padding: 8rem 0;
          background-color: var(--bg-secondary);
        }

        .operations-header {
          margin-bottom: 4rem;
        }
        
        .operations-card {
          background: var(--bg-card);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
        }

        .card-image {
          background-size: cover;
          background-position: center;
          position: relative;
          min-height: 500px;
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          background: var(--color-deep-green);
          padding: 1.5rem 3rem;
          border-top-right-radius: 8px;
        }

        .card-overlay h3 {
          color: white;
          font-size: 1.5rem;
        }

        .card-content {
          padding: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-heading {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .card-content p {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }

        .stat-val {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-laurel);
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
        }

        .link-arrow {
          color: var(--color-deep-green); /* Maybe keep deep green for link, or switch? */
          font-weight: 600;
          margin-top: auto;
        }
        
        [data-theme="dark"] .link-arrow {
            color: var(--color-sushi);
        }

        @media (max-width: 900px) {
          .operations-card {
            grid-template-columns: 1fr;
          }
           .card-content {
             padding: 3rem;
           }
        }
      `}</style>
    </section>
  );
}
