import '../css/home.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function Home() {
    return (

        <div className='homepage'>
            <Helmet>
                <title>Structure Realm</title>
                <meta name="description" content={"Learn about the various topics in Structural Engineering. Also practise civil engineering multiple choice questions as well as the general knowledge questions based on PSC Loksewa Nepal at one place for free."} />
            </Helmet>
            <div className="bubble-background">
                {Array.from({ length: 25 }).map((_, i) => {
                    const size = 20 + Math.random() * 40;
                    const x = `${Math.random() * 600 - 300}px`;  // left or right ±300px
                    const y = `${-500 - Math.random() * 800}px`; // upward drift

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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className='telegram-link' style={{ lineHeight: '1.6' }}>
                    Stay connected and get the latest updates by joining our <a href='https://t.me/civilengineering_structure' target="_blank" className='ext-link' rel="noreferrer">Telegram</a> channel!
                </p>

                {/* <motion.h1 className='focusText' initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
                    Welcome to <span className='highlight-purple'>Structure</span> <span className='highlight-green'>Realm</span>
                </motion.h1> */}


                <p className='subheading'>
                    Explore the world of Structural Engineering — Learn, Practice, and Design with our curated resources and tools.
                </p>

                <img src="/images/home.png" alt="Engineer Illustration" className="hero-image" />


                <motion.div className='home-link' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <NavLink to='/structural-engineering'>Structure blogs</NavLink>
                    <NavLink to='/structure-calculator'>Structure design tools</NavLink>
                    <NavLink to='/machine-learning'>Machine learning</NavLink>
                    <NavLink to='/students'>Assignments</NavLink>
                </motion.div>

                <hr />

                <div>
                    <p>Or prepare for your civil engineering exams with our collection of multiple choice questions.</p>
                    <p>Choose a civil engineering subject below to practise.</p>
                </div>

                <motion.div className='home-link' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <NavLink to='/som'>Strength of Materials</NavLink>
                    <NavLink to='/structure'>Structural Analysis</NavLink>
                    <NavLink to='/rcc'>Reinforced Cement Concrete</NavLink>
                    <NavLink to='/geotechnical'>Geo-technical Engineering</NavLink>
                    <NavLink to='/surveying'>Surveying</NavLink>
                    <NavLink to='/buildingMaterials'>Building Materials</NavLink>
                    <NavLink to='/estimation'>Estimation and costing</NavLink>
                    <NavLink to='/constructionManagement'>Construction management</NavLink>
                    <NavLink to='/economics'>Engineering Economics</NavLink>
                    <NavLink to='/drawing'>Engineering Drawing</NavLink>
                    <NavLink to='/professional'>Professional Practice</NavLink>
                </motion.div>

                <p>Practise general knowledge questions here.</p>

                <motion.div className='home-link' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <NavLink to='/gk-geography'>Geography</NavLink>
                    <NavLink to='/gk-organization'>UN, SAARC & BIMSTEC</NavLink>
                </motion.div>

                <p>
                    Click to give a test: <NavLink to='/test' className='cta-link'>Online Test</NavLink>
                </p>

                <p>
                    Give us feedback or <NavLink to='/contact' className='cta-link'>contact us</NavLink>.
                </p>
            </motion.section>

            <footer>
                <p>&copy; 2023 Structure Realm. All rights reserved.</p>
            </footer>

        </div>
    );
}

export default Home;
