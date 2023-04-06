import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function Calculator() {
    return (
        <main className='page-container'>
            <Helmet>
                <title>Structure Design Tools</title>
                <meta name="description" content="Design your structural components based on IS 456: 2007 for free" />
            </Helmet>
            <h2>Welcome to Structure Calculator</h2>
            <p>Design a <Link to="footing">Sloped isolated footing</Link>
            </p>
            <p>Design a <Link to="rcc-column">RCC Column</Link>
            </p>
        </main>
    )
}

export default Calculator