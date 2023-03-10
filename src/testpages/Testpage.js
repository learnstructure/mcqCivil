import React from 'react'
import './css/testpage.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
function Testpage() {

    return (
        <div className='test-container'>
            <Helmet>
                <title>Online Test</title>
                <meta name="description" content="civil engineering loksewa NEC license MCQ test" />
            </Helmet>
            <h3>Quick test</h3>
            <p>For this test, there will be 10 minutes for 15 questions.</p>
            <p>Get ready and click on any of the following subjects.</p>
            <div className='link-container'>
                <Link to="som">SOM</Link>
                <Link to="rcc">RCC</Link>
                <Link to="structure">Structure</Link>
                <Link to='geotechnical' >Geotechnical</Link>
                <Link to='surveying' >Surveying</Link>
                <Link to='buildingMaterials' >Building Materials</Link>
                <Link to='estimation' >Estimation</Link>
                <Link to='constructionManagement' >Const. management</Link>
                <Link to='economics' >Engineering Economics</Link>
                <Link to='drawing' >Engineering Drawing</Link>
                <Link to='professional' >Professional Practice</Link>

            </div>
            <hr />
            <p>Try GK test. This is based on Loksewa Nepal.</p>
            <div className='link-container'>
                <Link to='gk' >General Knowledge test</Link>
            </div>
            <hr />
            <h3>Long test</h3>
            <p>For this test, there will be 45 minutes for 50 questions.</p>
            <p>Get ready and click below.</p>
            <div className='link-container'>
                <Link to="civil">Overall test</Link>
            </div>

        </div>

    )
}

export default Testpage