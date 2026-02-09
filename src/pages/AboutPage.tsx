import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="container">
          <div className="page-header">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1>Corporate Profile</h1>
          </div>

          <div className="page-content">
            <p className="lead">Neconde Energy Limited is a leading indigenous oil and gas exploration and production company in Nigeria.</p>

            <div className="content-block">
              <h3>Our History</h3>
              <p>Established in 2010, Neconde was formed by a consortium of experienced professionals... (Placeholder for extended history)</p>
            </div>

            <div className="content-block">
              <h3>Governance</h3>
              <p>We adhere to the highest standards of corporate governance...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <style>{`
        .page-container {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 60vh;
        }
        
        .page-header {
          margin-bottom: 3rem;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 1rem;
          color: var(--color-sushi);
          font-weight: 500;
        }

        .page-content {
          max-width: 800px;
        }

        .lead {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: var(--text-secondary);
        }
        
        h3 {
             color: var(--text-primary);
             margin-bottom: 0.5rem;
        }
        
        p {
            color: var(--text-secondary);
        }

        .content-block {
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
