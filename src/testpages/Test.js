import React, { useState, useMemo, useEffect } from 'react'
import './css/testpage.css'
import { useContext } from 'react';
import { TestContext } from './Testsub';

let count;
function Test(props) {
    useMemo(() => {
        count = 0;
    }, [])
    const { setRightAns } = useContext(TestContext)

    const [answer, setAnswer] = useState()

    useMemo(() => {

        if (props.submitClicked && answer === props.correct) {
            count = count + 1
        }

    }, [props.submitClicked])

    useEffect(() => {
        setRightAns(count)
    }, [count]);

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

        </div>
    )
}

export default Test