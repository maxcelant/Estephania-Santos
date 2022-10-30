import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar, Footer} from './components';
import { About, Connect, Gallery, Home, Photo, NotFound, Welcome } from './screens';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/me' element={<About/>}/>
          <Route path='/connect' element={<Connect/>}/>
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/home/:photoId' element={<Photo/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
