import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { dataRCC } from '../data/dataRCC'
import { dataStructure } from '../data/dataStructure'
import { dataSOM } from '../data/dataSOM'
import { dataSurveying } from '../data/dataSurveying'
import { dataEstimating } from '../data/dataEstimating'
import { dataBuildingMat } from '../data/dataBuildingMat'
import { dataConstructionManagement } from '../data/dataConstructionManagement'
import { dataGeotechnical } from '../data/dataGeotechnical'
import { dataEconomics } from '../data/dataEconomics'
import { dataDrawing } from '../data/dataDrawing'

import Test from './Test'
import Timer from './Timer'
import { dataProfessional } from '../data/dataProfessional'
import { dataGkGeography } from '../data/dataGkGeography'
import { dataGkOrganization } from '../data/dataGkOrganization'
import { createContext } from 'react'
export const TestContext = createContext()
function Testsub() {

    const { subject } = useParams();

    if (subject !== "civil") {
        var time = 10
    } else {
        time = 45
    }

    const testData = useMemo(() => {
        switch (subject) {
            case "som":
                return generateRandom(dataSOM, 15)
            case "structure":
                return generateRandom(dataStructure, 15)
            case "rcc":
                return generateRandom(dataRCC, 15)
            case "geotechnical":
                return generateRandom(dataGeotechnical, 15)
            case "surveying":
                return generateRandom(dataSurveying, 15)
            case "buildingMaterials":
                return generateRandom(dataBuildingMat, 15)
            case "estimation":
                return generateRandom(dataEstimating, 15)
            case "constructionManagement":
                return generateRandom(dataConstructionManagement, 15)
            case "economics":
                return generateRandom(dataEconomics, 15)
            case "drawing":
                return generateRandom(dataDrawing, 15)
            case "professional":
                return generateRandom(dataProfessional, 15)
            case "gk":
                return [...generateRandom(dataGkGeography, 10), ...generateRandom(dataGkOrganization, 5)]
            default:
                return [...generateRandom(dataSOM, 4), ...generateRandom(dataStructure, 4), ...generateRandom(dataRCC, 5), ...generateRandom(dataGeotechnical, 5), ...generateRandom(dataSurveying, 5),
                ...generateRandom(dataBuildingMat, 5), ...generateRandom(dataEstimating, 4), ...generateRandom(dataConstructionManagement, 5), ...generateRandom(dataEconomics, 5), ...generateRandom(dataDrawing, 5), ...generateRandom(dataProfessional, 3)]
        }
    }, [subject])



    const [submitClicked, setSubmitClicked] = useState(false)
    const [rightAns, setRightAns] = useState(0)
    const handleCorrectAnswer = () => {
        setRightAns(prev => prev + 1);  // Increment based on the previous state
    };
    const randomQuestions = testData.map((mcq, index) => {
        return (<Test
            key={index + 1}
            serialno={index + 1}
            question={mcq.question}
            optionA={mcq.optionA}
            optionB={mcq.optionB}
            optionC={mcq.optionC}
            optionD={mcq.optionD}
            correct={mcq.correct}
            submitClicked={submitClicked}
            handleCorrectAnswer={handleCorrectAnswer}
        />)
    })

    return (
        <TestContext.Provider value={{ rightAns, setRightAns }}>
            <div>
                {randomQuestions}
                <Timer
                    setSubmitClicked={setSubmitClicked}
                    submitClicked={submitClicked}
                    rightAns={rightAns}
                    totalQuestions={testData.length}
                    time={time} />
            </div>
        </TestContext.Provider>
    )
}

export default Testsub

const generateRandom = (sub, num) => {
    const res = [];
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * sub.length);
        if (res.indexOf(sub[random]) !== -1) {
            continue;
        };
        res.push(sub[random]);
        i++;
    };
    return res;
};
