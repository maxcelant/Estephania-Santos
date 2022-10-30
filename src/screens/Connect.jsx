import { useState } from 'react'
import { toast } from 'react-toastify'

const initialMessageState = {
  name: '',
  phoneNumber: '',
  email: '',
  message: ''
}

function Connect() {

  const [ message, setMessage ] = useState(initialMessageState);

  const onChange = (e) => {
    console.log(message)
    setMessage({
      ...message,
      [e.target.id]:e.target.value
    })
  }

  const onSubmit = async (e) => {

  }

  return (
    <div className='container mx-auto max-w-2xl p-5 mb-64'>
      <form>
        <div className='p-2'>
          <input 
            type='text' 
            id='name' 
            value={message.name} 
            onChange={onChange} 
            maxLength='50' 
            minLength='1' 
            required 
            placeholder='Name'
            className='input w-full bg-gray-100 shadow-inner text-sm font-archivo'
            autoComplete='off'
          ></input>
        </div>
        <div className='p-2'>
          <input 
            type='tel' 
            id='phoneNumber' 
            value={message.phoneNumber} 
            onChange={onChange} 
            maxLength='50' 
            minLength='1' 
            required 
            placeholder='Phone Number'
            className='input w-full bg-gray-100 shadow-inner text-sm font-archivo'
            autoComplete='off'
          ></input>
        </div>
        <div className='p-2'>
          <input 
            type='email' 
            id='email' 
            value={message.email} 
            onChange={onChange} 
            maxLength='50' 
            minLength='1' 
            required 
            placeholder='Email'
            className='input w-full bg-gray-100 shadow-inner text-sm font-archivo'
            autoComplete='off'
          ></input>
        </div>
        <div className='p-2'>
          <textarea 
            type='text' 
            id='message' 
            value={message.message} 
            onChange={onChange} 
            maxLength='1500' 
            minLength='10' 
            required 
            placeholder='Message'
            className='input w-full bg-gray-100 shadow-inner h-64 text-sm font-archivo pt-2'
            autoComplete='off'
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button className='btn glass btn-md btn-wide btn-ghost'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Connect