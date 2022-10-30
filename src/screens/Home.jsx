import React from 'react';
import { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../firebase.config';
import { MoonLoader } from 'react-spinners';
import PhotoItem from '../components/PhotoItem';

function Home() {

  const [ photos, setPhotos ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const isMounted = useRef(true);
  const params = useParams();

  useEffect(() => {
    if(isMounted){
        const fetchPhotos = async () => {
            try {
                // get reference to collection
                const recipesRef = collection(db, 'photos')

                // create a query
                const q = query(
                    recipesRef,
                    orderBy('date_uploaded', 'desc'),
                    limit(20),
                )

                // execute query
                const querySnap = await getDocs(q)

                const photos = []

                querySnap.forEach((doc) => {
                    return photos.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                })
                setPhotos(photos)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchPhotos()
    }
    return () => {
        isMounted.current = false
    }
}, [isMounted]);

  if(loading){
    return  <div class="flex justify-center items-center h-screen">
              <MoonLoader/>
            </div>  
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo.data} id={photo.id}/>
      ))}
    </div>
  )
}

export default Home