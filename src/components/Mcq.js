import '../css/mcq.css';
import { useState } from 'react';
import Discussion from '../firebase/Discussion';
import { useContext } from 'react';
import { McqContext } from './McqAll';
export default function Mcq() {
    const { mcq } = useContext(McqContext)

    const audio = new Audio();
    audio.src = "./correctOption.wav";
    const [optClassA, setOptClassA] = useState(null)

    function handleClickA() {
        if (mcq.correct === "a") {
            audio.play();
            setOptClassA("correctAnswer")
        }
        else { setOptClassA("wrongAnswer") }
    }
    const [optClassB, setOptClassB] = useState(null)
    function handleClickB() {
        if (mcq.correct === "b") {
            audio.play();
            setOptClassB("correctAnswer");
        }
        else { setOptClassB("wrongAnswer") }
    }
    const [optClassC, setOptClassC] = useState(null)
    function handleClickC() {
        if (mcq.correct === "c") {
            audio.play();
            setOptClassC("correctAnswer");
        }
        else { setOptClassC("wrongAnswer") }
    }
    const [optClassD, setOptClassD] = useState(null)
    function handleClickD() {
        if (mcq.correct === "d") {
            audio.play();
            setOptClassD("correctAnswer");
        }
        else { setOptClassD("wrongAnswer") }
    }

    return (
        <div className="mcq">

            <div>{mcq.serialno}. {mcq.question}</div>
            <div className="option">
                <p>
                    <input type="radio" name={`${mcq.serialno}options`} id={`${mcq.serialno}optionA`} value="a" style={{ display: 'none' }} />
                    <label htmlFor={`${mcq.serialno}optionA`}
                        onClick={handleClickA} id={optClassA}>a) {mcq.optionA}</label>
                </p>
                <p>
                    <input type="radio" name={`${mcq.serialno}options`} id={`${mcq.serialno}optionB`} value="b" style={{ display: 'none' }} />
                    <label htmlFor={`${mcq.serialno}optionB`}
                        onClick={handleClickB} id={optClassB}>b) {mcq.optionB}</label>
                </p>
                <p>
                    <input type="radio" name={`${mcq.serialno}options`} id={`${mcq.serialno}optionC`} value="c" style={{ display: 'none' }} />
                    <label htmlFor={`${mcq.serialno}optionC`}
                        onClick={handleClickC} id={optClassC}>c) {mcq.optionC}</label>
                </p>
                <p>
                    <input type="radio" name={`${mcq.serialno}options`} id={`${mcq.serialno}optionD`} value="d" style={{ display: 'none' }} />
                    <label htmlFor={`${mcq.serialno}optionD`}
                        onClick={handleClickD} id={optClassD}>d) {mcq.optionD}</label>
                </p>

            </div>

            <Discussion />
        </div>
    )
}

