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
                <div onClick={handleClickA} className={optClassA}> a) {props.optionA}</div>
                <div onClick={handleClickB} className={optClassB}> b) {props.optionB}</div>
                <div onClick={handleClickC} className={optClassC}> c) {props.optionC}</div>
                <div onClick={handleClickD} className={optClassD}> d) {props.optionD}</div>
            </div>
            <hr></hr>
        </div>
    )
}

//className={props.correct == "a" ? 'correctAnswer' : null}
