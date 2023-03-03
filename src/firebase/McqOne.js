import React from 'react'
import '../css/mcq.css'
function McqOne({ ques, quesno, ansA, ansB, ansC, ansD, correct }) {

    return (
        <div >
            <div>{quesno}. {ques}</div>
            <div className="option">
                <p className={correct === "a" ? "correctAnswer" : null}>a) {ansA}</p>
                <p className={correct === "b" ? "correctAnswer" : null}>b) {ansB}</p>
                <p className={correct === "c" ? "correctAnswer" : null}>c) {ansC}</p>
                <p className={correct === "d" ? "correctAnswer" : null}>d) {ansD}</p>

            </div>
        </div>
    )
}

export default McqOne