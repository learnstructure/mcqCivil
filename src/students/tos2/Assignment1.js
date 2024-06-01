import React, { useState, createContext } from 'react'
import '../students.css'
export const RollNumber = createContext()

const Assignment1 = () => {
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
            <h4>1. Define degree of static and kinematic indeterminacy with suitable expressions. Give examples for each.  </h4>

            <h4 style={{ marginBottom: '5px' }}>2. Define the following terms.</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>Primary structure</li>
                <li>Redundant force</li>
            </ul>
            <h4 style={{ marginBottom: '5px' }}>3. State and prove the following.</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>Castigliano's second theorem</li>
                <li>Betti's law</li>
                <li>Maxwell's law</li>
            </ul>
            <h4>4. What is structural idealization? Explain the steps involve during identification and formulation of problems in theory of structures.</h4>
            <h4>5. Obtain degree of static (external and internal) and kinematic indeterminacy.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/5-1.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤External static indeterminacy =  1 <br />
                    ➤Internal static indeterminacy =  4    <br />
                    ➤Kinematic  indeterminacy =  22    <br />
                    ➤Kinematic  indeterminacy =  13 (Assuming inextensible members)
                </h4>
                <hr />
                <div >
                    <img src='/images/tos2/assignment1/5-2.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤External static indeterminacy =  6 <br />
                    ➤Internal static indeterminacy =  3    <br />
                    ➤Kinematic  indeterminacy =  27   <br />
                    ➤Kinematic  indeterminacy =  15 (Assuming inextensible members)
                </h4>
                <hr />
                <div >
                    <img src='/images/tos2/assignment1/5-3.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤External static indeterminacy =  3 <br />
                    ➤Internal static indeterminacy =  5    <br />
                    ➤Kinematic  indeterminacy =  25    <br />
                    ➤Kinematic  indeterminacy =  14 (Assuming inextensible members)
                </h4>
                <hr />
                <div >
                    <img src='/images/tos2/assignment1/5-4.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤External static indeterminacy =  5 <br />
                    ➤Internal static indeterminacy =  10    <br />
                    ➤Kinematic  indeterminacy =  24    <br />
                    ➤Kinematic  indeterminacy =  11 (Assuming inextensible members)
                </h4>
                <hr />
                <div >
                    <img src='/images/tos2/assignment1/5-5.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤External static indeterminacy =  1 <br />
                    ➤Internal static indeterminacy =  2    <br />
                    ➤Kinematic  indeterminacy =  16    <br />
                </h4>
            </div>
            <hr />


            <h4>6. Determine the reactions of the beam shown below by Castigliano’s method</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/6.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Vertical reaction at C = {((5.6 / 10) * (10 + roll)).toFixed(2)} kN
                </h4>
            </div>
            <hr />

            <h4>7. Determine the reactions of the following loaded beam using Castigliano's theorem. Take EI constant. Redundant should be moment at A. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/7.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Moment at A = {((1.5 / 6) * (6 + roll) + (1.25 / 10) * (10 + roll)).toFixed(2)} kNm ↻
                </h4>
            </div>
            <hr />
            <h4>8. Determine deflection at D of the beam shown in figure below using Castigliano's theorem</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/8.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Vertical reaction at C = {((10.4 / 50) * (50 + roll) + (26 / 20) * (20 + roll)).toFixed(2)} kN <br />
                    ➤ Deflection at D = {((-240 / 50) * (50 + roll) + (253.33333333 / 20) * (20 + roll)).toFixed(2)} / EI ↓
                </h4>
            </div>
            <hr />
            <h4>9. Using Castigliano's theorem, find the deflection at point B of the beam shown in figure below. Take constant EI</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/9.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Vertical reaction at C = {(0.3125 * (60 + roll)).toFixed(2)} kN
                    <br />
                    ➤ Deflection at B = {((546.875 / 60) * (60 + roll)).toFixed(2)} / EI
                </h4>
            </div>
            <hr />
            <h4>10. Determine the moment at fixed support of the propped cantilever beam using Castigliano's method. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/10.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Moment at A = {((222.222 / 100) * (100 + roll) + (88.889 / 50) * (50 + roll)).toFixed(2)} kNm ↺
                </h4>
            </div>
            <hr />
            <h4>11.	Find support reactions of the given loaded beam using Castigliano's theorem. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/11.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Vertical reaction at A = 7wL/16 <br />
                    ➤ Vertical reaction at B = 5wL/8<br />
                    ➤ Vertical reaction at C = -wL/16
                </h4>
            </div>
            <hr />
            <h4>12.	Find the reaction at C using Castigliano’s theorem.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment1/12.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ Vertical reaction at C = 15 wL/32
                </h4>
            </div>
            <hr />

        </>
    )
}

export default Assignment1