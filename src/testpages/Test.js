import React, { useState, useEffect } from 'react';
import './css/testpage.css';

function Test(props) {
    const { submitClicked, correct, handleCorrectAnswer, serialno, question, optionA, optionB, optionC, optionD } = props;
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false); // Track if the answer has already been checked

    // Check if answer is correct when submit is clicked
    useEffect(() => {
        if (submitClicked && !answered && answer === correct) {
            handleCorrectAnswer();  // Increment correct answer count
            setAnswered(true);      // Mark as answered to prevent multiple increments
        }
    }, [submitClicked, answer, correct, handleCorrectAnswer, answered]); // No longer need to worry about 'props' here

    return (
        <div className="mcq">
            <div>{serialno}. {question}</div>
            <div className="option">
                <p>
                    <input
                        type="radio"
                        name={`${serialno}options`}
                        id={`${serialno}optionA`}
                        value="a"
                        onChange={e => setAnswer(e.target.value)}
                        disabled={submitClicked} // Disable selection after submit
                    />
                    <label
                        htmlFor={`${serialno}optionA`}
                        className={submitClicked && correct === "a" ? "correctAnswer" : null}
                    >
                        a) {optionA}
                    </label>
                </p>
                <p>
                    <input
                        type="radio"
                        name={`${serialno}options`}
                        id={`${serialno}optionB`}
                        value="b"
                        onChange={e => setAnswer(e.target.value)}
                        disabled={submitClicked}
                    />
                    <label
                        htmlFor={`${serialno}optionB`}
                        className={submitClicked && correct === "b" ? "correctAnswer" : null}
                    >
                        b) {optionB}
                    </label>
                </p>
                <p>
                    <input
                        type="radio"
                        name={`${serialno}options`}
                        id={`${serialno}optionC`}
                        value="c"
                        onChange={e => setAnswer(e.target.value)}
                        disabled={submitClicked}
                    />
                    <label
                        htmlFor={`${serialno}optionC`}
                        className={submitClicked && correct === "c" ? "correctAnswer" : null}
                    >
                        c) {optionC}
                    </label>
                </p>
                <p>
                    <input
                        type="radio"
                        name={`${serialno}options`}
                        id={`${serialno}optionD`}
                        value="d"
                        onChange={e => setAnswer(e.target.value)}
                        disabled={submitClicked}
                    />
                    <label
                        htmlFor={`${serialno}optionD`}
                        className={submitClicked && correct === "d" ? "correctAnswer" : null}
                    >
                        d) {optionD}
                    </label>
                </p>
            </div>
        </div>
    );
}

export default Test;
