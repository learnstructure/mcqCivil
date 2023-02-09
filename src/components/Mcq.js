import '../css/mcq.css';
import { useState } from 'react';
export default function Mcq(props) {
    const [optClassA, setOptClassA] = useState(null)
    function handleClickA() {
        if (props.correct === "a") { setOptClassA("correctAnswer") }
        else { setOptClassA("wrongAnswer") }
    }
    const [optClassB, setOptClassB] = useState(null)
    function handleClickB() {
        if (props.correct === "b") { setOptClassB("correctAnswer") }
        else { setOptClassB("wrongAnswer") }
    }
    const [optClassC, setOptClassC] = useState(null)
    function handleClickC() {
        if (props.correct === "c") { setOptClassC("correctAnswer") }
        else { setOptClassC("wrongAnswer") }
    }
    const [optClassD, setOptClassD] = useState(null)
    function handleClickD() {
        if (props.correct === "d") { setOptClassD("correctAnswer") }
        else { setOptClassD("wrongAnswer") }
    }
    return (
        <div className="mcq">
            <div>{props.serialno}. {props.question}</div>
            <div className="option">
                <p onClick={handleClickA} className={optClassA}> a) {props.optionA}</p>
                <p onClick={handleClickB} className={optClassB}> b) {props.optionB}</p>
                <p onClick={handleClickC} className={optClassC}> c) {props.optionC}</p>
                <p onClick={handleClickD} className={optClassD}> d) {props.optionD}</p>
            </div>

        </div>
    )
}

//className={props.correct == "a" ? 'correctAnswer' : null}
