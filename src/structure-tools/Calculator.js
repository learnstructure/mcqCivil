import React from 'react'
import { Link } from 'react-router-dom'

function Calculator() {
    return (
        <main className='page-container'>
            <h1>Welcome to Structure Calculator</h1>
            <p>Design an isolated footing. <Link to="footing">Footing</Link>
            </p>
        </main>
    )
}

export default Calculator