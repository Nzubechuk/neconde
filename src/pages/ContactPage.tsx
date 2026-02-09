import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="container">
          <div className="page-header">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1>Contact Us</h1>
          </div>

          <div className="page-content">
            <div className="grid-2-col">
              <div className="contact-info">
                <h3>Head Office</h3>
                <p>
                  Nestoil Tower<br />
                  Victoria Island<br />
                  Lagos, Nigeria
                </p>
                <p>
                  Phone: +234 1 234 5678<br />
                  Email: info@neconde.com.ng
                </p>
              </div>

              <div className="contact-form-placeholder">
                <h3>Send us a message</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" rows={4}></textarea>
                </div>
                <button className="btn btn-primary">Send Message</button>
              </div>
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

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }
        
        label {
             display: block;
             margin-bottom: 0.5rem;
             font-weight: 500;
             color: var(--text-primary);
        }

        .form-control {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          background: var(--bg-card);
          color: var(--text-primary);
        }
        
        h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        p {
            color: var(--text-secondary);
        }
        
        @media(max-width: 768px) {
           .grid-2-col {
             grid-template-columns: 1fr;
           }
        }
      `}</style>
    </>
  );
}
