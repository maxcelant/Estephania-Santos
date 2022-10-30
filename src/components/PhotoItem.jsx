import React from 'react';
import { Link } from 'react-router-dom';

function PhotoItem({ photo, id }) {
  return (
    <Link className='p-10 transition ease-in-out hover:shadow-xl duration-500' to={`/home/${id}`}>
        <img className='hover:shadow-lg' src={photo.photoUrl} alt=""/>
    </Link>
  )
}

export default PhotoItem