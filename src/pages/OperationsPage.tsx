import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OperationsPage() {
    return (
        <>
            <Header />
            <div className="page-container">
                <div className="container">
                    <div className="page-header">
                        <Link to="/" className="back-link">← Back to Home</Link>
                        <h1>Operations & Expertise</h1>
                    </div>

                    <div className="page-content">
                        <div className="content-block">
                            <h3>Asset: OML 42</h3>
                            <p>OML 42 is located in the Niger Delta, covering 814 square kilometers...</p>
                            <ul>
                                <li>Odidi Field</li>
                                <li>Jones Creek Field</li>
                                <li>Egwa Field</li>
                                <li>Batan Field</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Production Capabilities</h3>
                            <p>Current production capacity information goes here...</p>
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
         .content-block {
          margin-bottom: 2rem;
        }
        
        h3 {
             color: var(--text-primary);
             margin-bottom: 0.5rem;
        }
        
        p, li {
            color: var(--text-secondary);
        }
      `}</style>
        </>
    );
}
