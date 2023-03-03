import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './css/discussion.css'

import { McqContext } from '../components/Mcq'
function Discussion() {
    const { id, ques, quesno, ansA, ansB, ansC, ansD, correct } = useContext(McqContext)
    const path = window.location.pathname


    return (
        <>
            <Link to={`${path}/${id}`} state={{ id: id, path: path, ques: ques, quesno: quesno, ansA: ansA, ansB: ansB, ansC: ansC, ansD: ansD, correct: correct }} className="showDiscussion">Show Discussion</Link>

        </>
    )
}

export default Discussion