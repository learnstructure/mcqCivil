
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Title from './components/Title';
import Home from './components/Home';
import McqAll from './components/McqAll';
import Testpage from './testpages/Testpage';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import NewComment from './firebase/NewComment';
import ScrollToTop from './components/ScrollToTop';
import SharedLayout from './sharedLayouts/SharedLayout';
import Testsub from './testpages/Testsub';
import Downloads from './components/Downloads';

function App() {
  return (
    <>
      <Title />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:subject" element={<SharedLayout />}>
          <Route index element={<McqAll />} />
          <Route path=":id" element={<NewComment />} />
        </Route>
        <Route path='/test' element={<Testpage />} />
        <Route path='/test/:subject' element={<Testsub />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </>
  );
}

export default App;

