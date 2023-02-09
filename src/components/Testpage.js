import React, { useState } from 'react'
import '../css/testpage.css'
import { rccRandom } from '../data/dataRCC'
import { structureRandom } from '../data/dataStructure'
import { somRandom } from '../data/dataSOM'
import { surveyingRandom } from '../data/dataSurveying'
import Test from './Test'
const allRandom = [...rccRandom, ...structureRandom, ...somRandom, ...surveyingRandom]

function Testpage() {
    const [testClicked, setTestClicked] = useState(false)
    const [submitClicked, setSubmitClicked] = useState(false)
    const [rightAns, setRightAns] = useState(0)

    /* function getCount(data) {
        setRightAns(data)
    } */
    const randomQuestions = allRandom.map((mcq, index) => {
        return (<Test
            key={index + mcq.question.substring(1, 10) + mcq.optionA.substring(1, 10) + mcq.optionB.substring(1, 10)}
            serialno={index + 1}
            question={mcq.question}
            optionA={mcq.optionA}
            optionB={mcq.optionB}
            optionC={mcq.optionC}
            optionD={mcq.optionD}
            correct={mcq.correct}
            submitClicked={submitClicked}
            setRightAns={setRightAns}
            /* getCount={getCount} */ />)
    })
    return (
        <div className='mainBody'>
            {testClicked && randomQuestions}
            {!testClicked && <div style={{ textAlign: "center" }}>
                <div>Please get ready and click on start below. </div>

                <button onClick={() => setTestClicked(true)}>Start</button>

            </div>}
            {testClicked && !submitClicked && <button onClick={() => { setSubmitClicked(true); }}>Submit</button>}
            {submitClicked &&
                <div className='result'>
                    <p>Number of correct answers = {rightAns}</p>
                    Total questions = {allRandom.length}
                </div>}
        </div>

    )
}

export default Testpage