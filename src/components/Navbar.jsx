import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'

import { GiButterflyFlower, GiHamburgerMenu, GiCancel } from 'react-icons/gi'

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setNavbarOpen(false)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth < 960 && setNavbarOpen(true)
    );
  }, []);

  const setNavbarState = () => setNavbarOpen(!navbarOpen);

  if (location.pathname !== '/'){
    return (
      <nav className="sticky top-0 flex items-center justify-around flex-wrap bg-white/90 p-5 shadow-lg z-20">
          <div className="relative container mx-auto max-w-md">
              { navbarOpen ? 
                  (<GiHamburgerMenu className="absolute right-2 text-3xl lg:hidden text-gray-600/60 z-20 hover:cursor-pointer transition ease-in-out hover:text-black hover:scale-105 duration-300" onClick={setNavbarState}/>)
                   : 
                  (<GiCancel className="absolute right-2 text-3xl lg:hidden text-gray-600/60 z-20 hover:cursor-pointer transition ease-in-out hover:text-black hover:scale-105 duration-300" onClick={setNavbarState}/>)}
              <span 
                   className="flex flex-shrink-0 justify-start lg:justify-center font-imfell text-2xl noselect font-semibold text-black/70 hover:cursor-pointer transition ease-in-out hover:scale-105 duration-300"
                   onClick={() => navigate('/home')}
                  >
                  Estepania Santos
              </span>
          </div>
          <div className={navbarOpen ? 'container mx-auto max-w-lg hidden' : 'container mx-auto max-w-lg'}>
              <div className="justify-around w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  {/* These will eventuall all be Links with react-router-dom!*/}
                  <div onClick={() => navigate('/gallery')} className="noselect hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300 font-lora text-black/80 text-sm font-bold tracking-widest my-10 lg:my-0">Gallery</div>
                  <div onClick={() => navigate('/connect')} className="noselect hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300 font-lora text-black/80 text-sm font-bold tracking-widest my-10 lg:my-0">Connect</div>
                  <div onClick={() => navigate('/me')} className="noselect hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300 font-lora text-black/80 text-sm font-bold tracking-widest my-10 mb-5 lg:my-0">About</div>
              </div>
          </div>
      </nav>
    ) 
  }
}

export default Navbar