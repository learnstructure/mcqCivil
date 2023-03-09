import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './css/discussion.css'
import { McqContext } from '../components/McqAll'

function Discussion() {

    const { mcq } = useContext(McqContext)
    const id = mcq.id

    const path = window.location.pathname
    return (
        <>
            <Link to={`${path}/${id}`} state={{
                id: mcq.id, ques: mcq.question, quesno: mcq.serialno,
                ansA: mcq.optionA, ansB: mcq.optionB, ansC: mcq.optionC, ansD: mcq.optionD, correct: mcq.correct, path: path
            }} className="showDiscussion">Show Discussion</Link>
        </>
    )
}

export default Discussion