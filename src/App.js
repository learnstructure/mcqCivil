
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Title from './components/Title'
import Home from './components/Home';

import McqAll from './components/McqAll';
import Testpage from './testpages/Testpage'
import Contact from './components/Contact';

import Thanks from './components/Thanks';
import NewComment from './firebase/NewComment';
import Blog from './blogs/Blog';
import ScrollToTop from './components/ScrollToTop';
import BlogOne from './blogs/BlogOne';

import SharedLayout from './sharedLayouts/SharedLayout';
import Testsub from './testpages/Testsub';
import SharedBlog from './sharedLayouts/SharedBlog';

import Calculator from './structure-tools/Calculator';
import CalculatorNav from './structure-tools/CalculatorNav';

import Students from './students/Students';
import StudentsNav from './students/SubjectsNav';
import AssignmentsNav from './students/AssignmentsNav';

import Downloads from './components/Downloads';
import Concrete from './ai/concrete/Concrete';
import AI from './ai/AI';
import AiNav from './ai/AiNav';

function App() {

  return (
    <>
      <Title />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path="/:subject" element={<SharedLayout />}>
          <Route index element={<McqAll />} />
          <Route path=":id" element={<NewComment />} />
        </Route>
        <Route path="structural-engineering" element={<SharedBlog />}>
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogOne />} />
        </Route>

        <Route path='/structure-calculator' element={<Calculator />}></Route>
        <Route path='/structure-calculator/:module' element={<CalculatorNav />}></Route>

        <Route path='/machine-learning' element={<AI />}></Route>
        <Route path='/machine-learning/:module' element={<AiNav />}></Route>

        <Route path='/students' element={<Students />}></Route>
        <Route path='/students/:module' element={<StudentsNav />}></Route>
        <Route path='/students/:module/:module' element={<AssignmentsNav />}></Route>

        <Route path='/test' element={<Testpage />}></Route>
        <Route path='/test/:subject' element={<Testsub />}></Route>
        <Route path='/downloads' element={<Downloads />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
        <Route path='/concrete' element={<Concrete />}></Route>
      </Routes>
    </>
  );
}

export default App;

