import { useState } from "react"
import { GiButterflyFlower, GiHamburgerMenu, GiCancel } from 'react-icons/gi'

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const setNavbarState = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="relative flex items-center justify-around flex-wrap bg-white p-8 shadow-lg">
        <div className="container mx-auto max-w-md">
            { navbarOpen ? 
                (<GiHamburgerMenu className="absolute right-9 text-3xl lg:hidden hover:cursor-pointer text-gray-600/60" onClick={setNavbarState}/>)
                 : 
                (<GiCancel className="absolute right-9 text-3xl lg:hidden hover:cursor-pointer text-gray-600/60" onClick={setNavbarState}/>)}
            <span className="flex flex-shrink-0 justify-center font-imfell text-2xl noselect font-semibold text-black/70">
                <GiButterflyFlower className="mr-3 text-3xl"/>Estepania Santos
            </span>
        </div>
        <div className={navbarOpen ? 'container mx-auto max-w-lg hidden' : 'container mx-auto max-w-lg'}>
            <div className="justify-around w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {/* These will eventuall all be Links with react-router-dom!*/}
                <div className="font-lora text-black/80 text-sm font-bold tracking-widest my-10 lg:my-0">Gallery</div>
                <div className="font-lora text-black/80 text-sm font-bold tracking-widest my-10 lg:my-0">Contact</div>
                <div className="font-lora text-black/80 text-sm font-bold tracking-widest my-10 mb-5 lg:my-0">About</div>
            </div>
        </div>
    </nav>
  ) 
}

export default Navbar