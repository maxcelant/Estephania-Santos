import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'

import {toast} from 'react-toastify'
import { MoonLoader } from 'react-spinners'


function Photo() {

  const [ photo, setPhoto ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const params = useParams()

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const docRef = doc(db, 'photos', params.photoId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          setPhoto(docSnap.data());
          setLoading(false);
        }
      } catch (e) {
        toast.error('Could not fetch photo');
      }
    }

    fetchPhoto()
  }, [params.photoId])

  if(loading){
    return  <div class="flex justify-center items-center h-screen">
                <MoonLoader/>
            </div>
  }

  return (
    <div className='container mx-auto max-w-3xl mt-10 mb-64'>
      <img className='p-7 lg:p-10 shadow-md mx-auto' src={photo.photoUrl} alt={photo.title}/>
      <div className='mt-2 font-lora text-2xl ml-2 text-center'>{photo.title}</div>
    </div>
  )
}

export default Photo