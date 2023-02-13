import React, { useState, useMemo } from 'react'
import '../css/testpage.css'

let count = 0;
function Test(props) {

    useMemo(() => {
        count = 0;
    }, [props.testClicked])
    const [answer, setAnswer] = useState()

    useMemo(() => {
        if (props.submitClicked && answer === props.correct) {
            count = count + 1
            /* console.log("correct answer " + count + answer) */

            /* props.getCount(count) */
            props.setRightAns(count)
        }
    }, [props.submitClicked])




    return (
        <div className="mcq" >
            <div>{props.serialno}. {props.question}</div>
            <div className="option" >

                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionA`} value="a"
                        onChange={e => setAnswer(e.target.value)} />
                    <label htmlFor={`${props.serialno}optionA`}
                        className={props.submitClicked && props.correct === "a" ? "correctAnswer" : null}>a) {props.optionA}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionB`} value="b"
                        onChange={e => setAnswer(e.target.value)} />
                    <label htmlFor={`${props.serialno}optionB`} className={props.submitClicked && props.correct === "b" ? "correctAnswer" : null}>b) {props.optionB}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionC`} value="c"
                        onChange={e => setAnswer(e.target.value)} />
                    <label htmlFor={`${props.serialno}optionC`} className={props.submitClicked && props.correct === "c" ? "correctAnswer" : null}>c) {props.optionC}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionD`} value="d"
                        onChange={e => setAnswer(e.target.value)} />
                    <label htmlFor={`${props.serialno}optionD`} className={props.submitClicked && props.correct === "d" ? "correctAnswer" : null}>d) {props.optionD}</label>
                </p>
            </div>
            {/* {props.submitClicked && <p>Selected option is {answer}</p>} */}
            <hr></hr>

            {/* {props.submitClicked &&
                <div className='result'>
                    <p>Number of correct answers = {count}</p>
                    Total questions = {props.serialno}
                </div>} */}
        </div>
    )
}

export default Test