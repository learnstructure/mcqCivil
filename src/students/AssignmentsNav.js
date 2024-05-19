import React from 'react'
import { useParams } from 'react-router-dom'
import Assignment1 from './tos2/Assignment1';
import Assignment2 from './tos2/Assignment2';

function StudentsNav() {
    const { module } = useParams()
    var moduleCalc;
    switch (module) {
        case "1":
            moduleCalc = <Assignment1 />
            break;
        case "2":
            moduleCalc = <Assignment2 />
            break;
        default:
            moduleCalc = <Assignment1 />
            break;
    }

    return (
        <div className='page-container' style={{ lineHeight: '2rem' }}>
            {moduleCalc}

        </div>
    )
}

export default StudentsNav