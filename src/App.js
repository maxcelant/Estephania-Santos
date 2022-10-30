import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Navbar, Footer} from './components';
import { About, Connect, Gallery, Home, Image, NotFound, Welcome } from './screens';

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
          <Route path='/gallery/:id' element={<Image/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
