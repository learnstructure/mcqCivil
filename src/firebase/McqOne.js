import React from 'react'
import '../css/mcq.css'

function McqOne({ ques, quesno, ansA, ansB, ansC, ansD, correct }) {

    return (
        <div >
            <div>{quesno}. {ques}</div>
            <div className="option">
                <p className={correct === "a" ? "correctAnswer" : null}>a) {ansA} {correct === "a" && <>✅</>}</p>
                <p className={correct === "b" ? "correctAnswer" : null}>b) {ansB} {correct === "b" && <>✅</>}</p>
                <p className={correct === "c" ? "correctAnswer" : null}>c) {ansC} {correct === "c" && <>✅</>}</p>
                <p className={correct === "d" ? "correctAnswer" : null}>d) {ansD} {correct === "d" && <>✅</>}</p>
            </div>
        </div>
    )
}

export default McqOne