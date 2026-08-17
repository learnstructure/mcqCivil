import '../css/home.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div className='homepage'>
            <Helmet>
                <title>Civil Engineering MCQ | Loksewa & License Preparation</title>
                <meta name="description" content="Practise civil engineering multiple choice questions (MCQ) and Loksewa Nepal General Knowledge questions with instant answers, scoring, and discussion forum." />
            </Helmet>
            <div className="bubble-background">
                {Array.from({ length: 20 }).map((_, i) => {
                    const size = 20 + Math.random() * 40;
                    const x = `${Math.random() * 600 - 300}px`;
                    const y = `${-500 - Math.random() * 800}px`;

                    return (
                        <div
                            key={i}
                            className="bubble"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${Math.random() * 100}%`,
                                bottom: `-${Math.random() * 100}px`,
                                animationDelay: `${Math.random() * 10}s`,
                                '--x': x,
                                '--y': y,
                            }}
                        />
                    );
                })}
            </div>

            <motion.section
                className='home-body'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='focusText'>
                    <span className='highlight-purple'>Civil Engineering</span> <span className='highlight-green'>MCQ</span>
                </h1>

                <p className='subheading'>
                    Comprehensive collection of Civil Engineering multiple choice questions and General Knowledge for PSC Loksewa Nepal, NEC licensing, and competitive engineering exams.
                </p>

                {/* Migration notice to structurerealm.com */}
                <div className='migration-banner'>
                    <div className='migration-text'>
                        <h4>Looking for Structural Engineering & Design Tools?</h4>
                        <p>
                            The structural engineering blogs, structural calculators, beam/column tools, and machine learning modules have moved to our dedicated platform at <strong>structurerealm.com</strong>.
                        </p>
                    </div>
                    <a
                        href='https://structurerealm.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='migration-btn'
                    >
                        Visit StructureRealm.com &rarr;
                    </a>
                </div>

                <div className='section-title'>Technical Civil Engineering MCQs</div>
                <div className='section-desc'>Select a core subject to start practicing multiple choice questions with explanations and discussions:</div>

                <motion.div className='home-link' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <NavLink to='/som'>Strength of Materials</NavLink>
                    <NavLink to='/structure'>Structural Analysis</NavLink>
                    <NavLink to='/rcc'>Reinforced Cement Concrete</NavLink>
                    <NavLink to='/geotechnical'>Geo-technical Engineering</NavLink>
                    <NavLink to='/surveying'>Surveying</NavLink>
                    <NavLink to='/buildingMaterials'>Building Materials</NavLink>
                    <NavLink to='/estimation'>Estimation & Costing</NavLink>
                    <NavLink to='/constructionManagement'>Construction Management</NavLink>
                    <NavLink to='/economics'>Engineering Economics</NavLink>
                    <NavLink to='/drawing'>Engineering Drawing</NavLink>
                    <NavLink to='/professional'>Professional Practice</NavLink>
                </motion.div>

                <div className='section-title'>General Knowledge (Loksewa Nepal)</div>
                <div className='section-desc'>Practice PSC Loksewa Nepal General Knowledge questions:</div>

                <motion.div className='home-link' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <NavLink to='/gk-geography'>Geography</NavLink>
                    <NavLink to='/gk-organization'>UN, SAARC & BIMSTEC</NavLink>
                    <NavLink to='/gk-natural-resources'>Natural Resources</NavLink>
                    <NavLink to='/gk-climate-nepal'>Climate of Nepal & Biodiversity</NavLink>
                    <NavLink to='/gk-periodic-plans'>Periodic Plans of Nepal</NavLink>
                    <NavLink to='/gk-management'>Fundamentals of Management</NavLink>
                    <NavLink to='/gk-government-plans'>Government Plans & Budgeting</NavLink>
                </motion.div>

                <hr style={{ margin: '2rem 0', borderColor: '#e5e7eb' }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', margin: '1.5rem 0' }}>
                    <p style={{ margin: 0 }}>
                        Ready to test yourself? <NavLink to='/test' className='cta-link'>Take an Online Test</NavLink> (Timed Quick & Full Mocks)
                    </p>
                    <p style={{ margin: 0 }}>
                        Need study materials? <NavLink to='/downloads' className='cta-link'>Free Lecture Notes & Numericals</NavLink>
                    </p>
                </div>

                <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    Have suggestions or inquiries? <NavLink to='/contact' className='cta-link'>Contact us / About Me</NavLink>
                </p>
            </motion.section>

            <footer>
                <p>&copy; 2026 Civil Engineering MCQ (civilengineering-mcq.web.app). All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
