/* import dataSurveying from '../data/dataSurveying';
import Mcq from './Mcq';
import '../App.css';
export default function McqSurveying() {
    const mcqElements = dataSurveying.map(mcq => {
        return (<Mcq
            key={mcq.id}
            serialno={mcq.id}
            question={mcq.question}
            optionA={mcq.optionA}
            optionB={mcq.optionB}
            optionC={mcq.optionC}
            optionD={mcq.optionD}
            correct={mcq.correct} />)
    })
    return (
        <div className="App">
            <div className="marginAll">
                {mcqElements}
            </div>
        </div>
    )
} */