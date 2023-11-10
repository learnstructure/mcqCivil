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
import { dataGkGeography } from '../data/dataGkGeography';
import { dataGkOrganization } from '../data/dataGkOrganization';
import { dataGkNatResources } from '../data/dataGkNatResources';
import { dataGkClimate } from '../data/gk/dataGkClimate';
import { dataGkPlans } from '../data/gk/dataGkPlans';
import { dataGkGovernmentPlans } from '../data/gk/dataGkGovernmentPlans';
import { dataGkManagement } from '../data/gk/dataGkManagement';

function SharedLayout() {
    const { subject } = useParams()
    var data;
    var descrip;
    switch (subject) {
        case "som":
            data = [...dataSOM]
            descrip = "Strength of materials"
            break;
        case "structure":
            data = [...dataStructure]
            descrip = "Structure analysis"
            break;
        case "rcc":
            data = [...dataRCC]
            descrip = "Reinforced cement concrete"
            break;
        case "geotechnical":
            data = [...dataGeotechnical]
            descrip = "Geo-technical engineering"
            break;
        case "surveying":
            data = [...dataSurveying]
            descrip = "Surveying"
            break;
        case "buildingMaterials":
            data = [...dataBuildingMat]
            descrip = "Building materials"
            break;
        case "estimation":
            data = [...dataEstimating]
            descrip = "Estimation & Costing"
            break;
        case "constructionManagement":
            data = [...dataConstructionManagement]
            descrip = "Construction management"
            break;
        case "economics":
            data = [...dataEconomics]
            descrip = "Engineering economics"
            break;
        case "drawing":
            data = [...dataDrawing]
            descrip = "Engineering drawing"
            break;
        case "professional":
            data = [...dataProfessional]
            descrip = "Professional practice"
            break;
        case "gk-geography":
            data = [...dataGkGeography]
            descrip = "General knowledge Geography"
            break;
        case "gk-natural-resources":
            data = [...dataGkNatResources]
            descrip = "General knowledge Natural Resources"
            break;
        case "gk-climate-nepal":
            data = [...dataGkClimate]
            descrip = "General knowledge Climate of Nepal Biodiversity"
            break;
        case "gk-periodic-plans":
            data = [...dataGkPlans]
            descrip = "General knowledge Periodic plans of Nepal"
            break;
        case "gk-government-plans":
            data = [...dataGkGovernmentPlans]
            descrip = "General knowledge Government plans and budgeting of Nepal"
            break;
        case "gk-management":
            data = [...dataGkManagement]
            descrip = "General knowledge Fundamentals of management."
            break;
        default:
            data = [...dataGkOrganization]
            descrip = "General knowledge UN, SAARC & BIMSTEC"
            break;
    }

    for (let i = 0; i < data.length; i++) {
        data[i].serialno = i + 1
        data[i].id = (i + 1 + data[i].question).replaceAll(/[./?°:%,*_+'";]/g, "").replace(/[¹²³⁴ᵗʰʳᵈˢᵗ]/g, "").replaceAll(' ', '-').replaceAll('  ', '-');
    }
    return (
        <>
            <Outlet context={{ data, descrip }} />
        </>
    )
}

export default SharedLayout