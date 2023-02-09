
import Mcq from './Mcq';
import '../App.css';
export default function McqAll(props) {
    const mcqElements = props.data.map((mcq, index) => {
        return (<Mcq
            key={index + mcq.question.substring(1, 10) + mcq.optionA.substring(1, 10) + mcq.optionB.substring(1, 10)}
            serialno={index + 1}
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
}