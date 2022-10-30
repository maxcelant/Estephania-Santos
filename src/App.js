import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Navbar, Footer} from './components';
import { About, Connect, Gallery, Home, Photo, NotFound, Welcome } from './screens';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
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
    </BrowserRouter>
  );
}

export default App;
