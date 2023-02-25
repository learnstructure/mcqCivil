
import Mcq from './Mcq';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import '../App.css';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>{props.description}</title>
                <meta name="description" content={"Practise civil engineering " + props.description + " multiple choice questions (mcq) loksewa, NEC license preparation"} />
            </Helmet>
            <div >
                {mcqElements}
            </div>
            <div className='arrows'>
                <div onClick={() => window.scrollBy({ top: -6 * window.innerHeight, left: 0, behavior: 'smooth' })}><BsFillArrowLeftSquareFill size={"2rem"} title="About 20 questions backward" /></div>
                <div onClick={() => window.scrollBy({ top: 6 * window.innerHeight, left: 0, behavior: 'smooth' })}><BsFillArrowRightSquareFill size={"2rem"} title="About 20 questions forward" /></div>
            </div>

        </div>
    )
}