import { useState, useEffect, useRef } from 'react'
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../firebase.config'
import { MoonLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Welcome() {

  const navigate = useNavigate();

  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

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
  return  <div className="flex justify-center items-center h-screen">
              <MoonLoader/>
          </div>
}

photos.map((photo) => console.log(photo.data.photoUrl))

return (
    <div>
    <div className='absolute z-10 top-1/2 left-1/2 transform_position'>
      <div className='container p-1 w-screen'>
        <div className='text-4xl font-imfell text-center mb-10 text-white tracking-widest underline-offset-8 underline'>Estephania Santos</div>
        <div className='flex justify-center'>
          <div className='shadow-lg mx-2 container border-4 border-white hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 duration-300 w-64'>
            <div onClick={() => navigate('/gallery')} className='text-center font-medium text-md lg:text-xl font-lora  text-white p-2 bg-black/30'>GALLERY</div>
          </div>
          <div className='shadow-lg mx-2 container border-4 border-white hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 duration-300 w-64'>
            <div onClick={() => navigate('/home')} className='text-center font-medium text-md lg:text-xl font-lora text-white p-2 bg-black/30'>HOME</div>
          </div>
          <div className='shadow-lg mx-2 container border-4 border-white hover:cursor-pointer transition ease-in-out hover:text-gray-500 hover:scale-105 duration-300 w-64'>
            <div onClick={() => navigate('/connect')} className='text-center font-medium text-md lg:text-xl font-lora text-white p-2 bg-black/30'>CONNECT</div>
          </div>
        </div>
      </div>
    </div>
    <Swiper modules={[Autoplay, Pagination, Navigation]} loop={true} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true}>
       {photos.map((photo, index) => (
         <SwiperSlide key={index}>
         <div className='w-full h-screen'>
           <img className='object-cover w-full h-full brightness-50' src={photo.data.photoUrl} alt=''/>
         </div>
         </SwiperSlide>
       ))}
     </Swiper> 
    </div>
)
}

export default Welcome