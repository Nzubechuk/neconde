import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LeadershipPage() {
    const leaders = [
        {
            id: 1,
            name: 'Dr. Ernest Azudialu-Obiejesi',
            role: 'Chairman',
            bio: 'A visionary leader with over 30 years of experience in the oil and gas industry. Founder of the Nestoil Group.'
        },
        {
            id: 2,
            name: 'Engr. Nnanna Anyanwu',
            role: 'Managing Director',
            bio: 'Seasoned engineer with extensive expertise in exploration and production operations management.'
        },
        {
            id: 3,
            name: 'Mrs. Chienye Ogwo',
            role: 'Legal Counsel / Company Secretary',
            bio: 'Expert in corporate law and governance, ensuring compliance and strategic legal direction.'
        }
    ];

    return (
        <>
            <Header />
            <div className="page-container">
                <div className="container">
                    <div className="page-header">
                        <Link to="/" className="back-link">← Back to Home</Link>
                        <h1>Leadership Team</h1>
                    </div>

                    <div className="intro-section">
                        <p className="lead">Meet the experienced professionals driving Neconde's vision to be a leading independent energy company in Africa.</p>
                    </div>

                    <div className="leaders-grid">
                        {leaders.map(leader => (
                            <div key={leader.id} className="leader-card">
                                <div className="leader-avatar-placeholder">
                                    {leader.name.charAt(0)}
                                </div>
                                <div className="leader-info">
                                    <h3>{leader.name}</h3>
                                    <span className="leader-role">{leader.role}</span>
                                    <p>{leader.bio}</p>
                                </div>
                            </div>
                        ))}
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
          margin-bottom: 2rem;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 1rem;
          color: var(--color-sushi);
          font-weight: 500;
        }

        .lead {
           font-size: 1.2rem;
           color: var(--text-secondary);
           max-width: 800px;
           margin-bottom: 3rem;
           line-height: 1.6;
        }

        .leaders-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
           gap: 2rem;
        }

        .leader-card {
           background: var(--bg-card);
           border: 1px solid var(--border-color);
           border-radius: 8px;
           overflow: hidden;
           transition: transform 0.3s;
        }
        
        .leader-card:hover {
           transform: translateY(-5px);
           box-shadow: var(--shadow-hover);
        }

        .leader-avatar-placeholder {
           height: 200px;
           background: var(--bg-secondary);
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 4rem;
           color: #ccc;
           font-weight: 700;
        }

        .leader-info {
           padding: 1.5rem;
        }

        .leader-info h3 {
           color: var(--text-primary);
           margin-bottom: 0.5rem;
        }

        .leader-role {
           display: block;
           color: var(--color-sushi);
           font-weight: 600;
           margin-bottom: 1rem;
           font-size: 0.9rem;
           text-transform: uppercase;
           letter-spacing: 0.5px;
        }

        .leader-info p {
           color: var(--text-secondary);
           font-size: 0.95rem;
           line-height: 1.6;
        }
      `}</style>
        </>
    );
}
