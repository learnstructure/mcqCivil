import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function tos2() {
    return (
        <main className='page-container' style={{ lineHeight: '1.8rem' }}>
            <Helmet>
                <title>Students section</title>
                <meta name="description" content="Students assignment check" />
            </Helmet>
            <h2>Check your assignments here.</h2>
            <p><Link to="1" className='ext-link ext-link2'>Assignment 1</Link>
            </p>
            <p><Link to="2" className='ext-link ext-link2'>Assignment 2</Link>
            </p>

            {/* <p>Design a <Link to="steel-i-column">Steel I Column</Link></p> */}
        </main>
    )
}

export default tos2