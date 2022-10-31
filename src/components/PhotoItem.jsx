import React from 'react';
import { Link } from 'react-router-dom';

function PhotoItem({ photo, id, show }) {
  return (
    <Link className={`relative pb-2 px-2 lg:p-8 transition ease-in-out hover:shadow-xl duration-500 ${show ? "" : "translate-y-16 opacity-0"}`} to={`/home/${id}`}>
        <img className='hover:shadow-lg noselect' src={photo.photoUrl} alt=""/>
    </Link>
  )
}

export default PhotoItem