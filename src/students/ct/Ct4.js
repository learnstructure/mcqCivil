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
                    <div>Roll Number</div>
                    <div><input type="number" value={roll} onChange={handleChange} min="0"
                        step="1" className='input-number' /></div>

                </div>

            </label>
            <h4 style={{ marginBottom: '0.2rem' }}>1. Derive stiffness matrix for</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>Bar element.</li>
                <li>Beam element.</li>
            </ul>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>2. Determine the nodal displacements, element stresses, and support reactions for the bar. Take E = 200 GPa. </h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/1.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>3. For the given stepped bar, obtain the nodal displacements and support reactions.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/2.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4. A propped cantilever beam is loaded as shown. Discretize the beam into two elements and find the deflection at B and rotations at A & B. Also check the result using single element model.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/3.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5. Determine the support reactions and also draw the bending moment diagram. Take E = 2x10⁵ MPa and I = 5x10⁶ mm⁴.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/4.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>6. Determine the nodal displacements, reaction forces & member forces of given truss. For each member, A = 2x10⁻³ m² and E = 2x10⁵ MPa</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment4/5.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />

        </>
    )
}

export default Ct4