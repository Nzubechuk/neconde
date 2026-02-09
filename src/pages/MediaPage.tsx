import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MediaPage() {
  const newsItems = [
    {
      id: 1,
      date: 'October 24, 2025',
      title: 'Neconde Announces New Safety Milestone',
      excerpt: 'Achieving 5 million man-hours without Lost Time Injury (LTI) in OML 42 operations.'
    },
    {
      id: 2,
      date: 'September 15, 2025',
      title: 'Community Development Projects Commissioned',
      excerpt: 'New healthcare and educational facilities handed over to host communities in the Niger Delta.'
    },
    {
      id: 3,
      date: 'August 01, 2025',
      title: 'Q2 2025 Operational Update',
      excerpt: 'Significant increase in production output driven by successful well re-entry programs.'
    }
  ];

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="container">
          <div className="page-header">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1>Media Center</h1>
          </div>

          <section className="media-section">
            <h2 className="section-heading">News & Announcements</h2>
            <div className="news-grid">
              {newsItems.map(item => (
                <div key={item.id} className="news-card">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a href="#" className="read-more">Read Full Story →</a>
                </div>
              ))}
            </div>
          </section>

          <section className="media-section">
            <h2 className="section-heading">Blog & Insights</h2>
            <div className="blog-placeholder">
              <div className="blog-feature">
                <h3>The Future of Indigenous Oil & Gas in Nigeria</h3>
                <p>Exploring the role of local companies in driving energy independence and sustainable growth.</p>
              </div>
            </div>
          </section>

          <section className="media-section">
            <h2 className="section-heading">Gallery & Downloads</h2>
            <div className="downloads-list">
              <div className="download-item">
                <span className="file-icon">📄</span>
                <span className="file-name">2024 Annual Report.pdf</span>
              </div>
              <div className="download-item">
                <span className="file-icon">📄</span>
                <span className="file-name">Corporate Profile 2025.pdf</span>
              </div>
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
          margin-bottom: 3rem;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 1rem;
          color: var(--color-sushi);
          font-weight: 500;
        }

        .media-section {
          margin-bottom: 4rem;
        }

        .section-heading {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .news-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 8px;
          transition: transform 0.2s;
          border: 1px solid var(--border-color);
        }
        
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .news-date {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .news-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .news-card p {
          color: var(--text-secondary);
        }

        .read-more {
          display: inline-block;
          margin-top: 1rem;
          color: var(--color-sushi);
          font-weight: 500;
          text-decoration: none;
        }

        .blog-feature {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid var(--color-anakiwa);
        }

        .blog-feature h3 {
            color: var(--text-primary);
        }

        .blog-feature p {
            color: var(--text-secondary);
        }

        .downloads-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .download-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
          background: var(--bg-card);
        }

        .download-item:hover {
          background: var(--bg-secondary);
        }

        .file-icon {
          font-size: 1.5rem;
        }
        
        .file-name {
            color: var(--text-primary);
        }
      `}</style>
    </>
  );
}
