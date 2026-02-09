export default function Sustainability() {
    return (
        <section id="sustainability" className="sustainability-section">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="section-eyebrow">Our Commitment</h5>
                    <h2 className="section-title">Sustainable <span className="text-sushi">Development</span></h2>
                </div>

                <div className="sustainability-grid">
                    <div className="sus-card">
                        <div className="sus-icon">🌱</div>
                        <h3>Environment</h3>
                        <p>Reduced flaring strategies and compliant waste management to protect the Niger Delta ecosystem.</p>
                    </div>
                    <div className="sus-card">
                        <div className="sus-icon">🤝</div>
                        <h3>Community</h3>
                        <p>Active engagement with host communities, providing scholarship schemes and infrastructure support.</p>
                    </div>
                    <div className="sus-card">
                        <div className="sus-icon">🛡️</div>
                        <h3>Safety</h3>
                        <p>Upholding the highest HSE standards. Goal Zero is our mindset for every operation.</p>
                    </div>
                </div>
            </div>

            <style>{`
        .sustainability-section {
            padding: 8rem 0;
            background: var(--bg-primary);
        }
        
        .sustainability-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
        }
        
        .sus-card {
            padding: 2.5rem;
            border-radius: 8px;
            background: var(--bg-card);
            transition: transform 0.3s;
            border-bottom: 3px solid transparent;
            border: 1px solid var(--border-color);
        }
        
        .sus-card:hover {
            transform: translateY(-5px);
            background: var(--bg-card);
            box-shadow: var(--shadow-hover);
            border-bottom: 3px solid var(--color-sushi);
            border-color: var(--color-sushi);
        }
        
        .sus-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        
        .sus-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .sus-card p {
            color: var(--text-secondary);
            line-height: 1.6;
        }
        
        .section-header {
             margin-bottom: 3rem;
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
      `}</style>
        </section>
    );
}
