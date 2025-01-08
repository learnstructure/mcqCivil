import React from 'react'
import { useParams } from 'react-router-dom'
import Assignment1 from './tos2/Assignment1';
import Assignment2 from './tos2/Assignment2';
import Assignment3 from './tos2/Assignment3';
import Assignment4 from './tos2/Assignment4';
import Ct1 from './ct/Ct1';
import Ct2 from './ct/Ct2';
import Ct3 from './ct/Ct3';
import Ct4 from './ct/Ct4';
import Ct5 from './ct/Ct5';
import St11 from './structure1/St11';

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
        case "3":
            moduleCalc = <Assignment3 />
            break;
        case "4":
            moduleCalc = <Assignment4 />
            break;
        case "ct1":
            moduleCalc = <Ct1 />
            break;
        case "ct2":
            moduleCalc = <Ct2 />
            break;
        case "ct3":
            moduleCalc = <Ct3 />
            break;
        case "ct4":
            moduleCalc = <Ct4 />
            break;
        case "ct5":
            moduleCalc = <Ct5 />
            break;
        case "st1-1":
            moduleCalc = <St11 />
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