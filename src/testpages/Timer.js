import React, { useState, useEffect } from 'react';
import './css/timer.css';

function Timer({ setSubmitClicked, submitClicked, rightAns, totalQuestions, time }) {
    const [minute, setMinute] = useState(time);
    const [second, setSecond] = useState(0);
    const [timeUp, setTimeUp] = useState(false); // Track whether time is up

    useEffect(() => {
        // Run only if the timer is not yet up and submit hasn't been clicked
        if (!timeUp && !submitClicked) {
            var timer = setInterval(() => {
                setSecond(prev => prev - 1);

                if (second === 0) {
                    if (minute === 0) {
                        clearInterval(timer); // Stop the timer when time runs out
                        setSubmitClicked(true); // Submit the test when time is up
                        setTimeUp(true); // Mark the time as up
                    } else {
                        setMinute(prev => prev - 1);
                        setSecond(59);
                    }
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [minute, second, submitClicked, timeUp, setSubmitClicked]);

    return (
        <>
            <div className='container' style={{ display: submitClicked ? "none" : "null" }}>
                {!submitClicked && <button className='btn1 btn-test' onClick={() => { setSubmitClicked(true); }}>Submit</button>}
                {!submitClicked && <span className='marginRight'>Time remaining = {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</span>}
            </div>
            {submitClicked &&
                <div className='container'>
                    <div className='marginLeft'>Score = {rightAns} / {totalQuestions}</div>
                    <div className='marginRight'>% Score = {parseFloat((rightAns * 100 / totalQuestions).toFixed(2))}</div>
                </div>
            }
        </>
    );
}

export default Timer;
