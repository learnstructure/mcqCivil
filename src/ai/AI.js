import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function AI() {
    return (
        <main className='page-container' style={{ lineHeight: '1.8rem' }}>
            <Helmet>
                <title>Machine learning</title>
                <meta name="description" content="Use the free artificial intelligence and machine learning tools to design your structural components" />
            </Helmet>
            <h2>Welcome to Machine learning tools</h2>
            <p>Predict <Link to="concrete" className='ext-link ext-link2'>Compressive strength</Link> of Concrete
            </p>
            <p>Optimize design of <Link to="srrs-beam" className='ext-link ext-link2'>Singly Reinforced RC Beam</Link>
            </p>

            <p style={{ lineHeight: '1.6' }}>
                <strong>More to come</strong>. Join us on our <a href='https://t.me/civilengineering_structure' target="_blank" className='ext-link' rel="noreferrer">Telegram</a> channel to get notifications.
            </p>
        </main>
    )
}

export default AI