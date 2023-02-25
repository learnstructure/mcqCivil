import React from 'react'
import { Helmet } from 'react-helmet'
import '../css/home.css'
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className='homepage'>
            <Helmet>
                <title>Civil Engineering MCQ</title>
                <meta name="description" content={"Practise civil engineering multiple choice questions (mcq) loksewa, NEC license preparation"} />
            </Helmet>
            <section className='home-body'>
                <div >
                    <h2 className='focusText'>Let's <span style={{ color: "green" }}>Crack</span> Civil Engineering Competitive <span style={{ color: "green" }}>Exams</span></h2>
                    <p>Prepare for your civil engineering exams with our collection of multiple choice questions.</p>
                    <p>Choose a category below to get started.</p>
                </div>
                <div className='home-link'>
                    <NavLink to='/som' >Strength of Materials</NavLink>
                    <NavLink to='/structure' >Structural Analysis</NavLink>
                    <NavLink to='/rcc' >Reincorced Cement Concrete</NavLink>
                    <NavLink to='/geotechnical' >Geotechnical Engineering</NavLink>
                    <NavLink to='/surveying' >Surveying</NavLink>
                    <NavLink to='/buildingMaterials' >Building Materials</NavLink>
                    <NavLink to='/estimation' >Estimation and costing</NavLink>
                    <NavLink to='/constructionManagement' >Constrution management</NavLink>
                    <NavLink to='/economics' >Engineering Economics</NavLink>
                    <NavLink to='/drawing' >Engineering Drawing</NavLink>
                    <NavLink to='/test' >Online Test</NavLink>
                    <NavLink to='/contact' >Contact Us</NavLink>
                </div>
            </section>
            <footer>
                <p>&copy; 2023 Civil Engineering MCQ. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home