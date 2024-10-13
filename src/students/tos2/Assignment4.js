import React from 'react'
import '../students.css'



const Assignment4 = () => {

    return (
        <>

            <h4 style={{ marginBottom: '5px' }}>1. Define the following terms.</h4>
            <ul style={{ marginTop: '0px' }}>
                <li>Plastic hinge</li>
                <li>Plastic hinge length</li>
                <li>Plastic moment capacity</li>
                <li>Shape factor</li>
            </ul>
            <hr />
            <h4>2.	Determine the shape factor for a triangular section.</h4>
            <h4 className='solution' >
                ➤ S = 2.34
            </h4>
            <hr />
            <h4>3.	Determine shape factor for the composite figure shown in figure below.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/secti.PNG' alt="Propped cantilever beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤  y̅ = 124.4 <br />
                    ➤ I<sub>X</sub> = 14115333  <br />
                    ➤ Z<sub>e</sub> = 113467  <span style={{ marginLeft: '3em' }}></span>  Z<sub>p</sub> = 158100 <br />
                    ➤  S = 1.39

                </h4>
            </div>
            <hr />
            <h4>4.	Determine the collapse load W. </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/cont-beam.PNG' alt="Continuous beam" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤  Beam mechanism span AB, W<sub>collapse</sub> = 6 Mₚ/L <br />
                    ➤  Beam mechanism span BC, W<sub>collapse</sub> = 24 Mₚ/L <br />
                    ➤  Beam mechanism span CD, W<sub>collapse</sub> = 6 Mₚ/L<br />
                    ➤ W<sub>collapse</sub> = min. of above= 6 Mₚ/L
                </h4>
            </div>
            <hr />
            <h4>5. Calculate the maximum plastic moment capacity.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/frame5.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤  Beam mechanism 1, M<sub>P</sub> = 41.18 kNm <br />
                    ➤  Beam mechanism 2, M<sub>P</sub> = 66.67 kNm <br />
                    ➤  Sway mechanism, M<sub>P</sub> = 80 kNm<br />
                    ➤  Combined mechanism, M<sub>P</sub> = 76.36 kNm<br />
                    ➤  Required M<sub>P</sub> = max. of above = 80 kNm<br />
                </h4>
            </div>
            <hr />
            <h4>6. Determine the collapse load for the portal frame.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/frame6.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>

                    ➤  Beam mechanism, P<sub>collapse</sub> = 1.83 Mₚ <br />
                    ➤  Sway Mechanism, P<sub>collapse</sub> = 0.689 Mₚ<br />
                    ➤  Combined Mechanism, P<sub>collapse</sub> = 0.73 Mₚ<br />
                    ➤ P<sub>collapse</sub> = min. of above= 0.689 Mₚ
                </h4>
            </div>
            <hr />
            <h4>7. Evaluate the plastic moment capacity required.</h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/frame7.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤  Beam mechanism 1, M<sub>P</sub> = 12 kNm <br />
                    ➤  Beam mechanism 2, M<sub>P</sub> = 10.91 kNm <br />
                    ➤  Beam mechanism 3, M<sub>P</sub> = 7.81 kNm <br />
                    ➤  Sway mechanism, M<sub>P</sub> = 25 kNm<br />
                    ➤  Combined mechanism 1, M<sub>P</sub> = 28.46 kNm<br />
                    ➤  Combined mechanism 2, M<sub>P</sub> = 22.27 kNm<br />
                    ➤  Required M<sub>P</sub> = max. of above = 28.46 kNm<br />
                </h4>
            </div>
            <hr />
            <h4>8. Find the plastic moment capacity of the frame.  </h4>
            <div className='divs-container'>
                <div >
                    <img src='/images/tos2/assignment4/frame8.PNG' alt="Frame" style={{ maxWidth: '100%' }} />
                </div>
                <h4 className='solution'>
                    ➤  Beam mechanism 1, M<sub>P</sub> = 13.9 kNm <br />
                    ➤  Beam mechanism 2, M<sub>P</sub> = 35.56 kNm <br />
                    ➤  Beam mechanism 3, M<sub>P</sub> = 26.67 kNm <br />
                    ➤  Sway mechanism, M<sub>P</sub> = 8 kNm<br />
                    ➤  Combined mechanism, M<sub>P</sub> = 32.73 kNm<br />
                    ➤  Required M<sub>P</sub> = max. of above = 35.56 kNm<br />
                </h4>
            </div>





        </>
    )
}

export default Assignment4