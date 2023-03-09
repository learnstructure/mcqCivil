import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { dataSurveying } from '../data/dataSurveying';
import { dataStructure } from '../data/dataStructure';
import { dataSOM } from '../data/dataSOM'
import { dataRCC } from '../data/dataRCC'
import { dataEstimating } from '../data/dataEstimating'
import { dataBuildingMat } from '../data/dataBuildingMat'
import { dataConstructionManagement } from '../data/dataConstructionManagement'
import { dataGeotechnical } from '../data/dataGeotechnical'
import { dataDrawing } from '../data/dataDrawing'
import { dataEconomics } from '../data/dataEconomics'
import { dataProfessional } from '../data/dataProfessional';
import { dataGk } from '../data/dataGk';

function SharedLayout() {
    const { subject } = useParams()

    var data;
    switch (subject) {
        case "som":
            data = [...dataSOM]
            break;
        case "structure":
            data = [...dataStructure]
            break;
        case "rcc":
            data = [...dataRCC]
            break;
        case "geotechnical":
            data = [...dataGeotechnical]
            break;
        case "surveying":
            data = [...dataSurveying]
            break;
        case "buildingMaterials":
            data = [...dataBuildingMat]
            break;
        case "estimation":
            data = [...dataEstimating]
            break;
        case "constructionManagement":
            data = [...dataConstructionManagement]
            break;
        case "economics":
            data = [...dataEconomics]
            break;
        case "drawing":
            data = [...dataDrawing]
            break;
        case "professional":
            data = [...dataProfessional]
            break;

        default:
            data = [...dataGk]
            break;
    }

    for (let i = 0; i < data.length; i++) {
        data[i].serialno = i + 1
        data[i].id = (i + data[i].question.substring(1, 20) + data[i].optionA.substring(1, 10) + data[i].question.slice(-20) + data[i].optionB.substring(1, 10)).replaceAll(/[./?:%,*+'";-]/g, "").replaceAll(' ', '').replaceAll('  ', '');
    }
    return (
        <>
            <Outlet context={{ data }} />
        </>
    )
}

export default SharedLayout