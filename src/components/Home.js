import React from 'react'
import { Helmet } from 'react-helmet'
import '../css/home.css'
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className='homepage'>
            <Helmet>
                <title>Civil Engineering MCQ</title>
                <meta name="description" content={"Practise civil engineering multiple choice questions as well as the general knowledge questions based on PSC Loksewa Nepal at one place for free. You can ask any confusions to the experts in discussion."} />
            </Helmet>
            <section className='home-body'>
                <div >
                    <h2 className='focusText'>Let's <span style={{ color: "green" }}>Crack</span> Civil Engineering Competitive <span style={{ color: "green" }}>Exams</span></h2>
                    <p>Prepare for your civil engineering exams with our collection of multiple choice questions.</p>
                    <p>Click to give a test. <NavLink to='/test' >Online Test</NavLink></p>
                    <p>Choose a civil engineering subject below to practise.</p>
                </div>
                <div className='home-link'>
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
                    <NavLink to='/gk' >General knowledge</NavLink>
                </div>
                <p>See our blogs here.</p>
                <div className='home-link'>
                    <NavLink to='/blog' >Structure blogs</NavLink>
                </div>
                <p>Give us feedback or <NavLink to='/contact' >contact us.</NavLink></p>

            </section>
            <footer>
                <p>&copy; 2023 Civil Engineering MCQ. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home