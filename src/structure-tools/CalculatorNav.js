import React from 'react'
import { useParams } from 'react-router-dom'
import IsolatedFooting from './isolated-footing/IsolatedFooting';
import RccColumn from './rcc-column/RccColumn';
import SteelColumnI from './steel-design/steelColumnI/SteelColumnI';
import ShearWall from './shear-wall/ShearWall';
import ShareButtons from '../components/ShareButtons';
function CalculatorNav() {
    const { module } = useParams()
    var moduleCalc;
    switch (module) {
        case "footing":
            moduleCalc = <IsolatedFooting />
            break;
        case "rcc-column":
            moduleCalc = <RccColumn />
            break;
        case "shear-wall":
            moduleCalc = <ShearWall />
            break;
        case "steel-i-column":
            moduleCalc = <SteelColumnI />
            break;
        default:
            moduleCalc = <IsolatedFooting />
            break;
    }
    const contentUrl = 'https://structurerealm.com/structure-calculator'
    const contentTitle = 'Structural Calculator';
    return (
        <div>
            {moduleCalc}
            <div >
                <ShareButtons url={contentUrl} title={contentTitle} />
            </div>
        </div>
    )
}

export default CalculatorNav