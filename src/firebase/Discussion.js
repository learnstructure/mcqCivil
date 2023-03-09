import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './css/discussion.css'
import { McqContext } from '../components/Mcq'
import { createContext } from 'react';
export const McqContext2 = createContext();

function Discussion() {
    const { id, ques, quesno, ansA, ansB, ansC, ansD, correct } = useContext(McqContext)
    const path = window.location.pathname


    return (
        <>
            <McqContext2.Provider value={{ str1: id }}>
                <Link to={`${path}/${id}`} state={{ id: id, path: path, ques: ques, quesno: quesno, ansA: ansA, ansB: ansB, ansC: ansC, ansD: ansD, correct: correct }} className="showDiscussion">Show Discussion</Link>
            </McqContext2.Provider>
        </>
    )
}

export default Discussion