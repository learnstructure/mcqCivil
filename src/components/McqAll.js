
import Mcq from './Mcq';
import '../App.css';
export default function McqAll(props) {
    const mcqElements = props.data.map((mcq, index) => {
        const id = (index + mcq.question.substring(1, 20) + mcq.optionA.substring(1, 10) + mcq.question.slice(-20) + mcq.optionB.substring(1, 10)).replaceAll(' ', '')
        return (<Mcq
            key={id}
            id={id}
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