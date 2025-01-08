import React, { useState, createContext } from 'react'
import '../students.css'
export const RollNumber = createContext()

const Ct4 = () => {
    const [roll, setRoll] = useState(1);
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        setRoll(value);
    };
    return (
        <>
            <label >
                <div className='roll'>
                    <div>Class Roll Number (CRN)</div>
                    <div><input type="number" value={roll} onChange={handleChange} min="0"
                        step="1" className='input-number' /></div>

                </div>

            </label>
            <h4 style={{ marginBottom: '0.2rem' }}>1. Derive stiffness matrix for</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>Spring element.</li>
                <li>Bar element.</li>
                <li>Beam element.</li>
                <li>Truss element.</li>
            </ul>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>2. Determine the nodal displacements, element stresses, and support reactions for the bar. Take E = 200 GPa. </h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/1.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ U<sub>2</sub> = {(2.18182 * (300 + roll) / 1000).toFixed(3)} mm  <span style={{ marginLeft: '3em' }}></span>  U<sub>3</sub> = {(1.36364 * (300 + roll) / 1000).toFixed(3)} mm  <br />
                ➤ R<sub>1</sub> = -{(0.72727 * (300 + roll)).toFixed(2)} kN  <span style={{ marginLeft: '3em' }}></span>  R<sub>4</sub> = -{(0.27273 * (300 + roll)).toFixed(2)} kN <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>3. For the given stepped bar, obtain the nodal displacements and support reactions.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/2.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ R<sub>1</sub> = {(-0.8 * roll + 0.2666667 * 0.5 * roll).toFixed(3)} <br />
                ➤ R<sub>2</sub> = {(-0.2 * roll + 0.7333333 * 0.5 * roll).toFixed(3)}
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4. A propped cantilever beam is loaded as shown. Discretize the beam into two elements and find the deflection at B and rotations at A & B. Also check the result using single element model.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/3.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ R<sub>Ay</sub> = {(3 * (12 + roll) + 0.46387 * (30 + roll)).toFixed(3)} <br />
                ➤ R<sub>Cy</sub> = {(5 * (12 + roll) + 0.53613 * (30 + roll)).toFixed(3)}<br />
                ➤ M<sub>C</sub> = {(-8 * (12 + roll) - 1.28906 * (30 + roll)).toFixed(3)}
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5. Determine the support reactions and also draw the bending moment diagram. Take E = 2x10⁵ MPa and I = 5x10⁶ mm⁴.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/4.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ R<sub>Ay</sub> = {(0.7555043 * (30 + roll) - 4.090909 - 0.21477 * (20 + roll)).toFixed(3)} <br />
                ➤ M<sub>A</sub> = {(1.3636364 * (30 + roll) - 10.909091 - 0.57273 * (20 + roll)).toFixed(3)} <br />
                ➤ R<sub>By</sub> = {(0.2977628 * (30 + roll) + 1.0606061 + 1.405682 * (20 + roll)).toFixed(3)}<br />
                ➤ R<sub>Cy</sub> = {(-0.053267 * (30 + roll) + 3.030303 + 1.809091 * (20 + roll)).toFixed(3)}
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>6. Determine the nodal displacements, reaction forces & member forces of given truss. For each member, A = 2x10⁻³ m² and E = 2x10⁵ MPa</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/5.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ R<sub>Ax</sub> = {(-1 * (100 + roll) + 1.333333 * (50 + roll)).toFixed(3)} <br />
                ➤ R<sub>Cx</sub> = {(- 1.333333 * (50 + roll)).toFixed(3)} <br />
                ➤ R<sub>Cy</sub> = {((50 + roll)).toFixed(3)}
            </h4>
            <hr />

        </>
    )
}

export default Ct4