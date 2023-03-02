
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Title from './components/Title'
import Home from './components/Home';

import McqAll from './components/McqAll';
import Testpage from './components/Testpage'
import Contact from './components/Contact';

import { dataSurveying } from './data/dataSurveying';
import { dataStructure } from './data/dataStructure';
import { dataSOM } from './data/dataSOM'
import { dataRCC } from './data/dataRCC'
import { dataEstimating } from './data/dataEstimating'
import { dataBuildingMat } from './data/dataBuildingMat'
import { dataConstructionManagement } from './data/dataConstructionManagement'
import { dataGeotechnical } from './data/dataGeotechnical'
import { dataDrawing } from './data/dataDrawing'
import { dataEconomics } from './data/dataEconomics'
import { dataProfessional } from './data/dataProfessional';
import Thanks from './components/Thanks';

function App() {

  return (
    <>
      <Title />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/som' element={<McqAll data={dataSOM} description={"Strength of materials"} />}></Route>
        <Route path='/structure' element={<McqAll data={dataStructure} description={"Structure"} />}></Route>
        <Route path='/rcc' element={<McqAll data={dataRCC} description={"Reincorced cement concrete RCC"} />}></Route>
        <Route path='/geotechnical' element={<McqAll data={dataGeotechnical} description={"Geotechnical engineering"} />}></Route>
        <Route path='/surveying' element={<McqAll data={dataSurveying} description={"Surveying"} />}></Route>
        <Route path='/estimation' element={<McqAll data={dataEstimating} description={"Estimation and costing"} />}></Route>
        <Route path='/buildingMaterials' element={<McqAll data={dataBuildingMat} description={"Building materials"} />}></Route>
        <Route path='/constructionManagement' element={<McqAll data={dataConstructionManagement} description={"Construction management"} />}></Route>
        <Route path='/economics' element={<McqAll data={dataEconomics} description={"Engineering Economics"} />}></Route>
        <Route path='/drawing' element={<McqAll data={dataDrawing} description={"Engineering drawing"} />}></Route>
        <Route path='/professional' element={<McqAll data={dataProfessional} description={"Professional practice"} />}></Route>
        <Route path='/test' element={<Testpage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
      </Routes>
    </>
  );
}

export default App;

