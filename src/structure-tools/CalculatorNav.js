import React from 'react'
import { useParams } from 'react-router-dom'
import IsolatedFooting from './isolated-footing/IsolatedFooting';
function CalculatorNav() {
    const { module } = useParams()
    var moduleCalc;
    switch (module) {
        case "footing":
            moduleCalc = <IsolatedFooting />
            break;
        default:
            moduleCalc = <IsolatedFooting />
            break;
    }
    return (
        <div>
            {moduleCalc}
        </div>
    )
}

export default CalculatorNav