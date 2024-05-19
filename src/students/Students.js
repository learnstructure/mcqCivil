import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function Students() {
    return (
        <main className='page-container' style={{ lineHeight: '1.8rem' }}>
            <Helmet>
                <title>Students section</title>
                <meta name="description" content="Students section" />
            </Helmet>
            <h2>Check your assignments here.</h2>
            <p><Link to="tos2" className='ext-link ext-link2'>Theory of Structures - II</Link>
            </p>

            {/* <p>Design a <Link to="steel-i-column">Steel I Column</Link></p> */}


        </main>
    )
}

export default Students