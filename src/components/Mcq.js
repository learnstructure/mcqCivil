import '../css/mcq.css';
import { useState } from 'react';
import Discussion from '../firebase/Discussion';
import { createContext } from 'react';
export const McqContext = createContext();
export default function Mcq(props) {
    const audio = new Audio();
    audio.src = "./correctOption.wav";
    const [optClassA, setOptClassA] = useState(null)

    function handleClickA() {
        if (props.correct === "a") {
            audio.play();
            setOptClassA("correctAnswer")

        }
        else { setOptClassA("wrongAnswer") }
    }
    const [optClassB, setOptClassB] = useState(null)
    function handleClickB() {
        if (props.correct === "b") {
            audio.play();
            setOptClassB("correctAnswer");
        }
        else { setOptClassB("wrongAnswer") }
    }
    const [optClassC, setOptClassC] = useState(null)
    function handleClickC() {
        if (props.correct === "c") {
            audio.play();
            setOptClassC("correctAnswer");
        }
        else { setOptClassC("wrongAnswer") }
    }
    const [optClassD, setOptClassD] = useState(null)
    function handleClickD() {
        if (props.correct === "d") {
            audio.play();
            setOptClassD("correctAnswer");
        }
        else { setOptClassD("wrongAnswer") }
    }

    return (
        <div className="mcq">

            <div>{props.serialno}. {props.question}</div>
            <div className="option">
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionA`} value="a" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionA`}
                        onClick={handleClickA} id={optClassA}>a) {props.optionA}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionB`} value="b" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionB`}
                        onClick={handleClickB} id={optClassB}>b) {props.optionB}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionC`} value="c" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionC`}
                        onClick={handleClickC} id={optClassC}>c) {props.optionC}</label>
                </p>
                <p>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionD`} value="d" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionD`}
                        onClick={handleClickD} id={optClassD}>d) {props.optionD}</label>
                </p>

            </div>

            <McqContext.Provider value={{ id: props.id, ques: props.question, quesno: props.serialno, ansA: props.optionA, ansB: props.optionB, ansC: props.optionC, ansD: props.optionD, correct: props.correct }}>
                <Discussion />
            </McqContext.Provider>

        </div>
    )
}

