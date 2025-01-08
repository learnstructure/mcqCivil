import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function St1() {
    return (
        <main className='page-container' style={{ lineHeight: '1.8rem' }}>
            <Helmet>
                <title>Structure 1</title>
                <meta name="description" content="Students assignment check" />
            </Helmet>
            <h2>Check your assignments here.</h2>
            <p><Link to="st1-1" className='ext-link ext-link2'>Assignment 1</Link>
            </p>
            {/* <p><Link to="st1-2" className='ext-link ext-link2'>Assignment 2</Link>
            </p>
            <p><Link to="st1-3" className='ext-link ext-link2'>Assignment 3</Link>
            </p>
            <p><Link to="st1-4" className='ext-link ext-link2'>Assignment 4</Link>
            </p> */}

        </main>
    )
}

export default St1