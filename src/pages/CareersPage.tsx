import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPage() {
    const vacancies = [
        {
            id: 1,
            role: 'Production Engineer',
            location: 'Warri, Delta State',
            type: 'Full-time',
            deadline: 'March 30, 2025'
        },
        {
            id: 2,
            role: 'HSE Supervisor',
            location: 'OML 42 Fields',
            type: 'Contract',
            deadline: 'April 15, 2025'
        },
        {
            id: 3,
            role: 'Financial Analyst',
            location: 'Lagos Head Office',
            type: 'Full-time',
            deadline: 'March 15, 2025'
        }
    ];

    return (
        <>
            <Header />
            <div className="page-container">
                <div className="container">
                    <div className="page-header">
                        <Link to="/" className="back-link">← Back to Home</Link>
                        <h1>Careers at Neconde</h1>
                    </div>

                    <div className="intro-section">
                        <p className="lead">Join a team dedicated to redefining energy in Nigeria. We are looking for passionate, innovative, and driven individuals to help us power the future.</p>
                    </div>

                    <section className="careers-section">
                        <h2 className="section-heading">Why Join Us?</h2>
                        <div className="culture-grid">
                            <div className="culture-card">
                                <h3>Professional Growth</h3>
                                <p>Continuous learning and development opportunities to advance your career in the oil & gas sector.</p>
                            </div>
                            <div className="culture-card">
                                <h3>Safety First</h3>
                                <p>A culture that prioritizes the health and safety of every employee and contractor above all else.</p>
                            </div>
                            <div className="culture-card">
                                <h3>Inclusive Environment</h3>
                                <p>We foster a diverse workplace where every voice is heard and valued.</p>
                            </div>
                        </div>
                    </section>

                    <section className="careers-section">
                        <h2 className="section-heading">Current Vacancies</h2>
                        <div className="vacancy-list">
                            {vacancies.map(job => (
                                <div key={job.id} className="job-card">
                                    <div className="job-info">
                                        <h3>{job.role}</h3>
                                        <div className="job-meta">
                                            <span>📍 {job.location}</span>
                                            <span>💼 {job.type}</span>
                                            <span>⏳ apply by {job.deadline}</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline">View Details</button>
                                </div>
                            ))}
                        </div>
                        <div className="no-vacancy-note">
                            <p>Don't see a role that fits? Send your CV to <a href="mailto:careers@neconde.com.ng">careers@neconde.com.ng</a> for future consideration.</p>
                        </div>
                    </section>
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

        .careers-section {
          margin-bottom: 4rem;
        }

        .section-heading {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .culture-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
           gap: 2rem;
        }

        .culture-card {
           background: var(--bg-card);
           border: 1px solid var(--border-color);
           padding: 1.5rem;
           border-radius: 8px;
        }
        
        .culture-card p {
            color: var(--text-secondary);
        }

        .culture-card h3 {
           color: var(--color-sushi);
           margin-bottom: 0.5rem;
        }

        .vacancy-list {
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }

        .job-card {
           display: flex;
           justify-content: space-between;
           align-items: center;
           background: var(--bg-card);
           padding: 1.5rem;
           border-radius: 8px;
           flex-wrap: wrap;
           gap: 1rem;
           border: 1px solid var(--border-color);
        }

        .job-info h3 {
           margin-bottom: 0.5rem;
           color: var(--text-primary);
        }

        .job-meta {
           display: flex;
           gap: 1.5rem;
           font-size: 0.9rem;
           color: var(--text-secondary);
           flex-wrap: wrap;
        }

        .no-vacancy-note {
           margin-top: 2rem;
           font-style: italic;
           color: var(--text-secondary);
        }
        
        .no-vacancy-note a {
           color: var(--color-sushi);
        }
      `}</style>
        </>
    );
}
