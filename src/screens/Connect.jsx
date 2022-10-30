import { useState } from 'react'
import { toast } from 'react-toastify'
import { send } from 'emailjs-com';

const initialMessageState = {
  to_name: 'Estephania Santos',
  from_name: '',
  phone_number: '',
  reply_to: '',
  message: ''
}

const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const userId = process.env.REACT_APP_USER_ID

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
    e.preventDefault();
    try {
      send(
        serviceId,
        templateId,
        message,
        userId,
      )
      toast.success("Message Sent!");
    } catch (e) {
      console.log(e);
      toast.error("Message could not be sent");
    }
  }

  return (
    <div className='container mx-auto max-w-2xl p-5 mb-64'>
      <div className='text-3xl ml-3 font-imfell'>Connect with Me</div>
      <form>
        <div className='p-2'>
          <input 
            type='text' 
            id='from_name' 
            value={message.from_name} 
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
            id='phone_number' 
            value={message.phone_number} 
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
            id='reply_to' 
            value={message.reply_to} 
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
          <button onClick={onSubmit} className='btn glass btn-md btn-wide btn-ghost font-archivo'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Connect