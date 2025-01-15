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
            <h4 className='solution divs-container'>
                ➤ θ<sub>A</sub> = {(4.8 * (15 + roll)).toFixed(2)}/EI  <span style={{ marginLeft: '3em' }}></span>  Δ<sub>C</sub> = {(9.6 * (15 + roll)).toFixed(2)}/EI  <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>2.	Calculate horizontal and vertical deflection at free end using virtual work method. </h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/2.PNG' alt="Cantilever Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ Δ<sub>Cx</sub> = {(21.333333 * (10 + roll) + 80 * (10 + roll) + 50 * (90 + roll)).toFixed(2)}/EI  <span style={{ marginLeft: '3em' }}></span>  Δ<sub>Cy</sub> = {(50 * (10 + roll) + 41.6666667 * (90 + roll)).toFixed(2)}/EI  <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>3.	Calculate vertical deflection at C using virtual work method.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/3.PNG' alt="Cantilever Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ Δ<sub>Cy</sub> = {(27 * (20 + roll)).toFixed(2)}/EI
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>4.	Calculate horizontal deflection at D using virtual work method. Take EI = constant.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/4.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ Δ<sub>Dx</sub> = {(29.33334 * (20 + roll)).toFixed(2)}/EI
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>5.	State first and second moment area theorems.</h4>

            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>6.	Using moment area method, find the deflection at mid-span. Take E = 200 GPa and I=10⁻⁴ m⁴.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/6.PNG' alt="Simply supported beam" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ θ<sub>A</sub> = {(122.2222222 + 3.8888889 * (20 + roll)).toFixed(3)}/EI  <span style={{ marginLeft: '3em' }}></span>  Δ<sub>mid</sub> = {(346.6666667 + 17.333333 * (20 + roll)).toFixed(3)}/EI = {((346.6666667 + 17.333333 * (20 + roll)) / 20000).toFixed(4)} m <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>7.	Find the deflection at C using moment area method.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/7.PNG' alt="Simply supported beam" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ Δ<sub>Cy</sub> = {(15.36 * (60 + roll)).toFixed(2)}/EI
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>8.	Using moment area method, determine slope at A, B and deflections at C & D.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/1.PNG' alt="Beam with overhang" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ θ<sub>A</sub> = {(4.8 * (15 + roll)).toFixed(2)}/EI  <span style={{ marginLeft: '3em' }}></span>  θ<sub>B</sub> = {(3.2 * (15 + roll)).toFixed(2)}/EI <br />
                ➤ Δ<sub>C</sub> = {(9.6 * (15 + roll)).toFixed(2)}/EI  <span style={{ marginLeft: '3em' }}></span>  Δ<sub>D</sub> = {(8.533338 * (15 + roll)).toFixed(2)}/EI <br />
            </h4>
            <hr />
            <h4 style={{ marginBottom: '0.2rem' }}>9.	Using moment area method, determine the deflection at free end.</h4>
            <div style={{ marginLeft: '1rem' }}>
                <img src='/images/st1/assignment1/9.PNG' alt="Beam with overhang" style={{ maxWidth: '100%' }} />
            </div>
            <h4 className='solution divs-container'>
                ➤ θ<sub>A</sub> = {(-213.333 + 8 * (50 + roll)).toFixed(2)}/EI  <span style={{ marginLeft: '3em' }}></span>  Δ<sub>C</sub> = {(-533.334 + 10.66667 * (50 + roll)).toFixed(2)}/EI <br />
            </h4>
            <hr />

        </>
    )
}

export default St11