import React from 'react';
import { useLocation } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

function Footer() {

  const location = useLocation();

  if (location.pathname !== '/'){
    return (
      <footer className='footer fixed-bottom flex p-6 justify-center'>
          <div className="flex">
            <div className='font-lora text-sm text-black justify-center'>Copyright &copy; 2022 Estephania Santos</div>
            <BsInstagram className='text-xl hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300'/>
            <BsTwitter className='text-xl hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300'/>
            <BsFacebook className='text-xl hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 hover:underline hover:underline-offset-8 duration-300'/>
          </div>
      </footer>
    )
  }
}

export default Footer