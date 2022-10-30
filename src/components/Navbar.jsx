import React from 'react'

const Navbar = () => {
  return (
    <nav className="shadow-lg p-6">
        <div className='max-w-6xl flex'>
            <div className="flex-grow justify-center text-center font-imfell text-2xl text-black">
                Estephania Santos
            </div>
            <div className='flex justify-center items-center w-xl'>
                <div className="text-sm justify-center">
                    <div className='block text-md mt-4 px-10 lg:inline-block lg:mt-0 mr-4 font-lora'>gallery</div>
                    <div className='block text-md mt-4 px-10 lg:inline-block lg:mt-0 mr-4 font-lora'>about</div>
                    <div className='block text-md mt-4 px-10 lg:inline-block lg:mt-0 mr-4 font-lora'>contact</div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar