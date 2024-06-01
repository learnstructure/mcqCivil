import React, { useState, createContext } from 'react'
import '../students.css'
export const RollNumber = createContext()


const Assignment2 = () => {
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

            <h4>1. Differentiate between force method and displacement method. </h4>
            <hr />
            <h4>2. Displacement method is unique in comparison to the force method. Justify the statement using suitable examples.</h4>
            <hr />
            <h4>3. Derive an expression for three moment equation for continuous beam and explain how it can be used for fixed support.</h4>
            <hr />
            <h4>4. Determine reaction and end moments at supports in a fixed beam of span L when right support sinks down by ∆ unit. </h4>
            <h4 className='solution divs-container'>
                ➤ Moment at left support = 6EI∆/L² ↺ <br />
                ➤ Moment at right support = 6EI∆/L² ↺ <br />
            </h4>
            <hr />
            <h4>5. Using force method determine expression for support moments of single span fixed beam when right end of beam rotates clockwise by an angle θ. </h4>
            <h4 className='solution divs-container'>
                ➤ Moment at left support = 2EIθ/L ↻ <br />
                ➤ Moment at right support = 4EIθ/L ↻ <br />
            </h4>

            <hr />
            <h4>6. Analyze the given beam by using 3-moment equation.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/3-moment.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Ay</sub> = {(3.75 * (20 + roll)).toFixed(2)} kN <br />
                    ➤ M<sub>A</sub> = {(4.5 * (20 + roll)).toFixed(2)} kNm ↺<br />
                    ➤ R<sub>By</sub> = {(2.25 * (20 + roll)).toFixed(2)} kN
                </h4>
            </div>
            <hr />

            <h4>7. Draw shear force and bending moment diagram of the continuous beam using three moment equation method.  </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/3-moment2.PNG' alt="Continuous beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ M<sub>A</sub> = {Math.abs((-1.313 * (300 + roll) + 3.906 * (50 + roll) - 0.313 * (20 + roll)).toFixed(2))} kNm ↺<br />
                    ➤ M<sub>B</sub> = {(-0.375 * (300 + roll) - 7.813 * (50 + roll) + 0.625 * (20 + roll)).toFixed(2)} kNm <br />
                    ➤ M<sub>C</sub> = {(-2 * (20 + roll)).toFixed(2)} kN
                </h4>
            </div>
            <hr />
            <h4>8. Determine the reactions at hinged support A using force method. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/portal-frame.PNG' alt="Portal frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Ax</sub> = {((30 + roll) * 6.968 / 30 + (120 + roll) * 43.355 / 120).toFixed(2)} kN<br />
                    ➤ R<sub>Ay</sub> = {((30 + roll) * 60.47 / 30 + (120 + roll) * 67.687 / 120).toFixed(2)} kN
                </h4>
            </div>
            <hr />
            <h4>9. Generate flexibility matrix and determine the reactions at support D and draw BMD</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/frame2.PNG' alt="Portal frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Dx</sub> = {(-(30 + roll) * 12.903 / 30 - (20 + roll) * 2.523 / 20).toFixed(2)} kN<br />
                    ➤ R<sub>Dy</sub> = {((30 + roll) * 3.484 / 30 + (20 + roll) * 13.386 / 20).toFixed(2)} kN <br />
                    ➤ M<sub>D</sub> = {((30 + roll) * 33.886 / 30 + (20 + roll) * 0.816 / 20).toFixed(2)} kNm ↺
                </h4>
            </div>
            <hr />
            <h4>10. Determine reactions and draw bending moment diagram using method of consistent deformation.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/frame3.PNG' alt="Portal frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Ax</sub> = {(-(20 + roll) * 5.267 / 20 + (75 + roll) * 42.003 / 75).toFixed(2)} kN<br />
                    ➤ R<sub>Ay</sub> = {(-(20 + roll) * 1.33 / 20 + (75 + roll) * 381.581 / 75).toFixed(2)} kN <br />
                    ➤ R<sub>Ex</sub> = {(-(20 + roll) * 14.733 / 20 - (75 + roll) * 42.003 / 75).toFixed(2)} kN <br />
                    ➤ R<sub>Ey</sub> = {((20 + roll) * 1.33 / 20 + (75 + roll) * 368.419 / 75).toFixed(2)} kN <br />
                    ➤ M<sub>E</sub> = {Math.abs(((20 + roll) * 53.036 / 20 - (75 + roll) * 144.204 / 75).toFixed(2))} kNm ↻
                </h4>
            </div>
            <hr />
            <h4>11.	Find the member forces of the given truss using force method if temperature of diagonal members rises by 20° C and vertical members are 5mm too short. Take E = 2x10⁵ MPa, A = 50 cm² for all members and α = 10.6x10⁻⁶ /°C. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/truss.PNG' alt="Truss" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Ax</sub> = 371.4 kN  <span style={{ marginLeft: '3em' }}></span>  R<sub>Ay</sub> = -26.67 kN <br />
                    ➤ R<sub>Dx</sub> = -391.4 kN  <span style={{ marginLeft: '3em' }}></span>  R<sub>Dy</sub> = 76.67 kN <br />
                    ➤ F<sub>BD</sub> = -652.3 kN  <span style={{ marginLeft: '3em' }}></span>  F<sub>AC</sub> = -619.0 kN
                </h4>
            </div>
            <hr />
            <h4>12.	Find the member forces of the given truss using force method due to decrease in temperature of 20°C in all vertical members only. Take E = 2x10⁵ MPa, A = 35 cm² for all members and α = 12x10⁻⁶ /°C.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/truss2.PNG' alt="Truss 2" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ F<sub>BC</sub> = 34.8 kN  <span style={{ marginLeft: '3em' }}></span>  F<sub>EF</sub> = 34.8 kN <br />
                    ➤ F<sub>BF</sub> = 34.8 kN  <span style={{ marginLeft: '3em' }}></span>  F<sub>CE</sub> = 34.8 kN <br />
                    ➤ F<sub>BE</sub> = -49.2 kN  <span style={{ marginLeft: '3em' }}></span>  F<sub>CF</sub> = -49.2 kN
                </h4>
            </div>
            <hr />
            <h4>13.	Analyze the truss using force method. Take EA = constant.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/truss3.PNG' alt="Truss 3" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ R<sub>Ax</sub> = {(31.04 / 60 * (60 + roll)).toFixed(2)} kN  <span style={{ marginLeft: '3em' }}></span>  R<sub>Ay</sub> = {0.5 * (60 + roll)} kN <br />
                    ➤ R<sub>Ex</sub> = {-(31.04 / 60 * (60 + roll)).toFixed(2)} kN  <span style={{ marginLeft: '3em' }}></span>  R<sub>Ey</sub> = {0.5 * (60 + roll)} kN <br />
                    ➤ F<sub>AC</sub> = {(-27.62 / 60 * (60 + roll)).toFixed(2)} kN  <span style={{ marginLeft: '3em' }}></span>  F<sub>BD</sub> = {(22.37 / 60 * (60 + roll)).toFixed(2)} kN
                </h4>
            </div>
            <hr />
            <h4>14.	Determine horizontal reaction and bending moment at C in the two hinged parabolic arch shown in figure below.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/arch.PNG' alt="Arch 1" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ H = {(0.988618 * (200 + roll) + 1.3916015 * (150 + roll)).toFixed(2)} kN<br />
                    ➤ M<sub>c</sub> = {(-0.9317129 * (200 + roll) - 0.849609 * (150 + roll)).toFixed(2)} kN<br />
                </h4>
            </div>
            <hr />
            <h4>15.	Calculate reactions of the two hinged arch. If there is a temperature rise by 10°C. What will be the change in reactions. Assume Iₓ = I₀ secφ and α = 10⁻⁵ /°C. Take I₀ = 6 x 10⁵ cm⁴ & E = 10 kN/mm²</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment2/arch2.PNG' alt="Arch 2" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤ H = {(1.546 * (5 + roll)).toFixed(2)} kN<br />
                    ➤ H* = {((89.0028 * (5 + roll) + 72) / 57.6).toFixed(2)} kN
                </h4>
            </div>
            <hr />
            <h4>16.	A 2-hinged parabolic arch of span 60 m and central rise of 6 m is subjected to a concentrated load of <span style={{ color: 'blueviolet' }}>(40 + roll)</span> kN at the crown. Allowing for rib shortening and yielding of support B by 6 mm outwards horizontally, determine the horizontal thrust. Also Draw BMD. Take I₀ = 6 x 10⁵ cm⁴, A꜀ = 1000 cm², E = 10 kN/mm² and consider Iₓ = I₀ secφ. A꜀ is cross sectional area at crown.</h4>
            <h4 className='solution divs-container'>
                ➤ H = {((90000 / 40 * (40 + roll) - 360) / 1155.6).toFixed(2)} kN
            </h4>
        </>
    )
}

export default Assignment2