import React, { useState } from 'react'
import '../css/testpage.css'
import { rccRandom } from '../data/dataRCC'
import { structureRandom } from '../data/dataStructure'
import { somRandom } from '../data/dataSOM'
import { surveyingRandom } from '../data/dataSurveying'
import { estimatingRandom } from '../data/dataEstimating'
import { buildingMatRandom } from '../data/dataBuildingMat'
import { constructionManagementRandom } from '../data/dataConstructionManagement'
import { geotechnicalRandom } from '../data/dataGeotechnical'
import { economicsRandom } from '../data/dataEconomics'
import { drawingRandom } from '../data/dataDrawing'

import Test from './Test'
import Timer from './Timer'
const allRandom = [...rccRandom, ...structureRandom, ...somRandom, ...surveyingRandom, ...estimatingRandom,
...buildingMatRandom, ...constructionManagementRandom, ...geotechnicalRandom, ...economicsRandom, ...drawingRandom]

function Testpage() {
    const [testClicked, setTestClicked] = useState(false)
    const [submitClicked, setSubmitClicked] = useState(false)
    const [rightAns, setRightAns] = useState(0)

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
            testClicked={testClicked}
            setRightAns={setRightAns}
        />)
    })
    return (
        <div className='mainBody'>
            {testClicked &&
                <Timer
                    setSubmitClicked={setSubmitClicked}
                    testClicked={testClicked}
                    submitClicked={submitClicked}
                    rightAns={rightAns}
                    totalQuestions={allRandom.length} />}
            {testClicked && randomQuestions}

            {!testClicked && <div className='testInfo'>
                <div>Please get ready and click on start below. <br />
                </div>
                <button onClick={() => setTestClicked(true)}>Start</button>
            </div>}

            {testClicked && !submitClicked && <button onClick={() => { setSubmitClicked(true); }} className='submitLower'>Submit</button>}
            {submitClicked &&
                <div className='result'>
                    <p>Number of correct answers = {rightAns}</p>
                    Total questions = {allRandom.length}
                </div>}
        </div>

    )
}

export default Testpage