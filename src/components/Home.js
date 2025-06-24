import { Helmet } from 'react-helmet'
import '../css/home.css'
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className='homepage'>
            <Helmet>
                <title>Structure Realm</title>
                <meta name="description" content={"Learn about the various topics in Structural Engineering. Also practise civil engineering multiple choice questions as well as the general knowledge questions based on PSC Loksewa Nepal at one place for free."} />
            </Helmet>
            <section className='home-body'>
                <p style={{ lineHeight: '1.6' }}>
                    Stay connected and get the latest updates by joining our <a href='https://t.me/civilengineering_structure' target="_blank" className='ext-link' rel="noreferrer">Telegram</a> channel!.
                </p>
                <h1 className='focusText'>Welcome to <span style={{ color: "blueviolet" }}>Structure</span> <span style={{ color: "green" }}>Realm</span> </h1>
                <p>Explore the world of Structural Engineering — Learn, Practice, and Design with our curated resources and tools.</p>

                <div className='home-link'>
                    <NavLink to='/structural-engineering' >Structure blogs</NavLink>
                    <NavLink to='/structure-calculator' >Structure design tools</NavLink>
                    <NavLink to='/machine-learning' >Machine learning</NavLink>
                    <NavLink to='/students' >Assignments</NavLink>
                </div>

                <hr />
                <div >
                    <p>Or prepare for your civil engineering exams with our collection of multiple choice questions.</p>
                    <p>Choose a civil engineering subject below to practise.</p>
                </div>
                <div className='home-link' >
                    <NavLink to='/som' >Strength of Materials</NavLink>
                    <NavLink to='/structure' >Structural Analysis</NavLink>
                    <NavLink to='/rcc' >Reinforced Cement Concrete</NavLink>
                    <NavLink to='/geotechnical' >Geo-technical Engineering</NavLink>
                    <NavLink to='/surveying' >Surveying</NavLink>
                    <NavLink to='/buildingMaterials' >Building Materials</NavLink>
                    <NavLink to='/estimation' >Estimation and costing</NavLink>
                    <NavLink to='/constructionManagement' >Construction management</NavLink>
                    <NavLink to='/economics' >Engineering Economics</NavLink>
                    <NavLink to='/drawing' >Engineering Drawing</NavLink>
                    <NavLink to='/professional' >Professional Practice</NavLink>
                </div>
                <p>Practise general knowledge questions here.</p>
                <div className='home-link'>
                    <NavLink to='/gk-geography' >Geography</NavLink>
                    <NavLink to='/gk-organization' >UN, SAARC & BIMSTEC</NavLink>
                </div>

                <p>Click to give a test. <NavLink to='/test' >Online Test</NavLink></p>

                <p>Give us feedback or <NavLink to='/contact' >contact us.</NavLink></p>

            </section>
            <footer>
                <p>&copy; 2023 Structure Realm. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home