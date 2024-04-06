import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }} className='w-full h-[50vh] flex flex-col justify-end items-start p-20'>

            <h1 className='w-[70%] text-5xl font-black text-white'>{
                data.name || data.original_name || data.original_title || data.title
            }</h1>
            <p className='w-[70%] text-zinc-200 my-3'>{data.overview}</p>
            <p className='text-zinc-400'>
                <i className='text-yellow-500 ri-megaphone-fill'></i>
                {data.release_date}
                <i className='text-yellow-500 ri-album-fill ml-3'></i>
                {data.media_type.toUpperCase()}
            </p>
            <Link className='px-4 py-2 bg-secondary rounded-md text-white mt-5'>Watch Trailer</Link>
        </div>
    )
}

export default Header