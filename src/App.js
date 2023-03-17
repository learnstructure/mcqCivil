
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

        <Route path='/test' element={<Testpage />}></Route>
        <Route path='/test/:subject' element={<Testsub />}></Route>

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
      </Routes>
    </>
  );
}

export default App;

