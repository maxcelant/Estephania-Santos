import React from 'react'

function About() {

  console.log(process.env.REACT_APP_ABOUT_IMG_URL)

  return (
    <div className='container mx-auto min-w-2xl mt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <img className='p-10 shadow-lg' src={process.env.REACT_APP_ABOUT_IMG_URL} alt='Estephania Santos'/>
        <div className='container mx-auto p-10'>
            <p className='font-lora align-middle lg:mt-10'>Talking about myself...</p>
        </div>
      </div>
    </div>
  )
}

export default About