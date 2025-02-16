import React, { useState, createContext } from 'react'
import '../students.css'
export const RollNumber = createContext()

const Ct5 = () => {
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


            <h4 style={{ marginBottom: '0.2rem' }}>1. Derive shape functions and stiffness matrix for</h4>
            <ul style={{ marginTop: '0px' }}>

                <li>Bar element</li>
                <li>Beam element</li>
                <li>Constant strain triangle (CST)</li>
            </ul>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>2. Derive shape (interpolation) functions  for</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>6-node triangular element</li>
                <li>10-node triangular element</li>
                <li>8-node rectangular element</li>
                <li>9-node rectangular element</li>
            </ul>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>3. A steel plate of 10 mm thickness is being loaded as shown. Considering plane stress condition, determine element stiffness matrix, nodal displacements & stresses at centroid of the element. Take E = 210 GPa, μ=0.3, and unit weight of steel = 78.5 kN/m³.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/cst1.PNG' alt="Triangular element" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ u<sub>3</sub> = 0    <span style={{ marginRight: '3em' }}></span>
                ➤ v<sub>3</sub> = {(-0.0004422 * (25 + roll)).toFixed(4)} mm  <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4. A steel plate of 10 mm thickness is loaded as shown. Considering plane stress, determine stresses and strains at centroid of the element. Take E = 210 GPa, μ=0.3, and unit weight of steel = 78.5 kN/m³. Length of each side = 100 mm.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/cst2.PNG' alt="Triangular element" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ u<sub>3</sub> = {(9.2857 * 10 ** -10 * (100 + roll)).toPrecision(4)} m    <span style={{ marginRight: '3em' }}></span>
                ➤ v<sub>3</sub> = {(1.7922 * 10 ** -10 * (100 + roll)).toPrecision(4)} m  <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5. A steel plate of thickness 10 mm is being loaded in the structural system as shown. Calculate stresses at centroid of the plate.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/cst3.PNG' alt="Triangular element" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ u<sub>2</sub> = {(-3.15782 * 10 ** -7 * (10 + roll)).toExponential(3)} m    <span style={{ marginRight: '3em' }}></span>
                ➤ v<sub>2</sub> = 0 <br />
            </h4>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>6. Determine stiffness matrix using two elements. Also find the reactions.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/cst4.PNG' alt="Rectangular element" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ u<sub>2</sub> = {(-2.23594 * 10 ** -6 * (10 + roll)).toExponential(3)} m    <span style={{ marginRight: '3em' }}></span>
                ➤ u<sub>3</sub> = {(2.1716 * 10 ** -6 * (10 + roll)).toExponential(3)} m <br />
                ➤ v<sub>2</sub> = {(-1.20563 * 10 ** -5 * (10 + roll)).toExponential(3)} m    <span style={{ marginRight: '3em' }}></span>
                ➤ v<sub>3</sub> = {(-1.19588 * 10 ** -5 * (10 + roll)).toExponential(3)} m

            </h4>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>7. What is iso-parametric formulation? What is Jacobian matrix?</h4>
            <hr />
            <h4 style={{ display: "flex", justifyContent: "center" }}>The end 😃</h4>
        </>
    )
}

export default Ct5