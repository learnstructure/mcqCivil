import React, { useState, useEffect } from 'react'
import './css/timer.css'

function Timer({ setSubmitClicked, submitClicked, rightAns, totalQuestions, time }) {
    const [minute, setMinute] = useState(time)
    const [second, setSecond] = useState(0)

    useEffect(() => {
        var timer = setInterval(() => {

            setSecond(second - 1)
            if (second === 0) {
                setMinute(minute - 1);
                setSecond(59);
            }
            if (minute === 0 && second === 0) {    //time duration of test
                setSubmitClicked(true)
            }

        }, 1000)
        return () => clearInterval(timer)
    })
    return (
        <>
            <div className='container' style={{ display: submitClicked ? "none" : "null" }}>
                {!submitClicked && <button className='btn1 btn-test' onClick={() => { setSubmitClicked(true); }}>Submit</button>}
                {!submitClicked && <span className='marginRight'>Time remaining = {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</span>}

            </div>
            {submitClicked &&
                <div className='container'>
                    {/* <p>Number of correct answers = {rightAns}</p>
                <p>Total questions = {totalQuestions}</p> */}
                    <div className='marginLeft'>Score = {rightAns} / {totalQuestions}</div>
                    <div className='marginRight'>% Score = {parseFloat((rightAns * 100 / totalQuestions).toFixed(2))}</div>
                </div>}
        </>
    )
}

export default Timer