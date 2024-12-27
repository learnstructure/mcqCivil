import React from 'react'
import { useParams } from 'react-router-dom'
import Tos2 from './tos2/Tos2';
import Ct from './ct/Ct';
function SubjectsNav() {
    const { module } = useParams()
    var moduleCalc;
    switch (module) {
        case "tos2":
            moduleCalc = <Tos2 />
            break;

        case "ct":
            moduleCalc = <Ct />
            break;

        default:
            moduleCalc = <Tos2 />
            break;
    }

    return (
        <div>
            {moduleCalc}

        </div>
    )
}

export default SubjectsNav