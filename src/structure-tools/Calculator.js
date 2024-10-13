import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function Calculator() {
    return (
        <main className='page-container' style={{ lineHeight: '1.8rem' }}>
            <Helmet>
                <title>Structure Design Tools</title>
                <meta name="description" content="Design your structural components based on IS 456: 2007 for free" />
            </Helmet>
            <h2>Welcome to Structure Calculator</h2>
            <p>Design a <Link to="footing" className='ext-link ext-link2'>Sloped isolated footing</Link>
            </p>
            <p>Design a <Link to="rcc-column" className='ext-link ext-link2'>RCC Column</Link></p>
            <p>Design a <Link to="rcc-beam" className='ext-link ext-link2'>RCC Beam</Link></p>
            <p>Design a <Link to="shear-wall" className='ext-link ext-link2'>Shear Wall</Link></p>
            <p>Calculate <Link to="weld" className='ext-link ext-link2'>Weld Strength</Link></p>
            <p>Visualize <Link to="mohrs-circle" className='ext-link ext-link2'>Mohr's circle</Link></p>
            {/* <p>Visualize <Link to="plastic-hinge" className='ext-link ext-link2'>Plastic hinge</Link> formation. </p> */}
            <p style={{ lineHeight: '1.6' }}>
                <strong>More to come</strong>. Join us on our <a href='https://t.me/civilengineering_structure' target="_blank" className='ext-link' rel="noreferrer">Telegram</a> channel to get notifications.
            </p>
        </main>
    )
}

export default Calculator