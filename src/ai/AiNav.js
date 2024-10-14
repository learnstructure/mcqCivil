import React from 'react'
import { useParams } from 'react-router-dom'

import Concrete from './concrete/Concrete';

function AiNav() {
    const { module } = useParams()
    var moduleCalc;
    switch (module) {
        case "concrete":
            moduleCalc = <Concrete />
            break;

        default:
            moduleCalc = <Concrete />
            break;
    }

    return (
        <div>
            {moduleCalc}
        </div>
    )
}

export default AiNav