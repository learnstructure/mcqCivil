import React, { useState, createContext } from 'react'
import '../students.css'
export const RollNumber = createContext()
const St11 = () => {
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

            <h4 style={{ marginBottom: '0.2rem' }}>1.	Calculate slope at A and deflection at C using virtual work method.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/1.PNG' alt="Beam with overhang" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>2.	Calculate horizontal and vertical deflection at free end using virtual work method. </h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/2.PNG' alt="Cantilever Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>3.	Calculate vertical deflection at C using virtual work method.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/3.PNG' alt="Cantilever Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4.	Calculate horizontal deflection at D using virtual work method. Take EI = constant.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/4.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5.	State first and second moment area theorems.</h4>

            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>6.	Using moment area method, find the deflection at mid-span. Take E = 200 GPa and I=10⁻⁴ m⁴.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/6.PNG' alt="Simply supported beam" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>7.	Find the deflection at C using moment area method.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/7.PNG' alt="Simply supported beam" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>8.	Using moment area method, determine slope at A, B and deflections at C & D.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/1.PNG' alt="Beam with overhang" style={{ maxWidth: '100%' }} />
            </div>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>9.	Using moment area method, determine the deflection at free end.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/9.PNG' alt="Beam with overhang" style={{ maxWidth: '100%' }} />
            </div>
            <hr />

        </>
    )
}

export default St11