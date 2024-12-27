import React from 'react'
import '../students.css'

const Ct2 = () => {

    return (
        <>

            <h4 style={{ marginBottom: '5px' }}>1. Use Gauss Seidel method to solve.</h4>
            <ul style={{ marginTop: '0px' }}>
                <li> 2x - 2y + 3z = 2 ; x + 2y - z = 3 ; 3x - y + 2z = 1</li>
                <li> 2x + 4y + 6z = 22 ; 3x + 8y + 5z = 27 ; - x + y + 2z = 2</li>

            </ul>
            <hr />
            <h4 style={{ marginBottom: '5px' }}>2.	Use conjugate gradient method to solve</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>4x – y = 15 ; -x + 4y - z = 10 ; - y + 3z = 10</li>
                <li><div >
                    <img src='/images/ct/conjugate.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div></li>
            </ul>
            <hr />
            <h4>3.	Develop a computer program using python or MATLAB to implement conjugate gradient method.</h4>
            <hr />
            <h4>4.	Explain briefly about discrete Fourier transform and fast Fourier transform.</h4>

        </>
    )
}

export default Ct2