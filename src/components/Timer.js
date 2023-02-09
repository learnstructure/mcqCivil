import React, { useState, useEffect } from 'react'
import '../css/timer.css'

function Timer({ testClicked, setSubmitClicked, submitClicked, rightAns, totalQuestions }) {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSecond(second + 1)
            if (second === 59) {
                setMinute(minute + 1);
                setSecond(0);
            }
            if (minute === 10) {
                setSubmitClicked(true)
            }

        }, 1000)
        return () => clearInterval(timer)
    })
    return (
        <>
            <div className='container' style={{ display: submitClicked ? "none" : "null" }}>
                {testClicked && !submitClicked && <button onClick={() => { setSubmitClicked(true); }}>Submit</button>}
                {!submitClicked && <span>Time elapsed = {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</span>}

            </div>
            {submitClicked &&
                <div className='container'>
                    {/* <p>Number of correct answers = {rightAns}</p>
                <p>Total questions = {totalQuestions}</p> */}
                    <div>Score = {rightAns} / {totalQuestions}</div>
                    <div>% Score = {rightAns * 100 / totalQuestions}</div>
                </div>}
        </>
    )
}

export default Timer