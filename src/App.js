
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Title from './components/Title'

//import McqSurveying from './components/McqSurveying';
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
import Thanks from './components/Thanks';

function App() {

  return (
    <>
      <Title />
      <Routes>
        <Route path='/' element={<McqAll data={dataSOM} />}></Route>
        <Route path='/structure' element={<McqAll data={dataStructure} />}></Route>
        <Route path='/rcc' element={<McqAll data={dataRCC} />}></Route>
        <Route path='/geotechnical' element={<McqAll data={dataGeotechnical} />}></Route>
        <Route path='/surveying' element={<McqAll data={dataSurveying} />}></Route>
        <Route path='/estimation' element={<McqAll data={dataEstimating} />}></Route>
        <Route path='/buildingMaterials' element={<McqAll data={dataBuildingMat} />}></Route>
        <Route path='/constructionManagement' element={<McqAll data={dataConstructionManagement} />}></Route>
        <Route path='/economics' element={<McqAll data={dataEconomics} />}></Route>
        <Route path='/drawing' element={<McqAll data={dataDrawing} />}></Route>
        <Route path='/test' element={<Testpage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
      </Routes>
    </>
  );
}

export default App;

/* function App() {
  const mcqElements = dataSurveying.map(mcq => {
    return (<Mcq
      key={mcq.id}
      serialno={mcq.id}
      question={mcq.question}
      optionA={mcq.optionA}
      optionB={mcq.optionB}
      optionC={mcq.optionC}
      optionD={mcq.optionD}
      correct={mcq.correct} />)
  })
  return (
    <div className="App">
      <div className="marginAll">
        <Title />
        {mcqElements}
      </div>

    </div>
  );
} */