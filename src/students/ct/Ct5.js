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

            <h4 style={{ marginBottom: '0.2rem' }}>1. Derive the relation of strain displacement [B] matrix for constant strain triangle. </h4>

            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>2. A steel plate of 10 mm thickness is being loaded as shown. Considering plane stress condition, determine element stiffness matrix, nodal displacements & stresses at centroid of the element. Take E = 210 GPa, μ=0.3, and unit weight of steel = 78.5 kN/m³.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/2.PNG' alt="Triangular element" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>3. A steel plate of 10 mm thickness is loaded as shown. Considering plane stress, determine stresses and strains at centroid of the element. Take E = 210 GPa, μ=0.3, and unit weight of steel = 78.5 kN/m³. Length of each side = 100 mm.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/3.PNG' alt="Triangular element" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4. Derive shape functions for</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>6 node triangular element.</li>
                <li>10 node triangular element.</li>
            </ul>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5. Derive interpolation functions for</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>8 node rectangular element.</li>
                <li>9 node rectangular element.</li>
            </ul>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>6. Determine stiffness matrix using two elements for the following plate. E = 210 GPa, μ=0.3, γ = 78.5 kN/m³ and plate thickness = 10 mm. </h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/ct/assignment5/6.PNG' alt="Rectangular element" style={{ maxWidth: '100%' }} />
            </div>
            <hr />

            <h4 style={{ marginBottom: '0.2rem' }}>7. What is isoparametric formulation? What is Jacobian matrix?</h4>
            <hr />
            <h4 style={{ display: "flex", justifyContent: "center" }}>The end 😃</h4>
        </>
    )
}

export default Ct5