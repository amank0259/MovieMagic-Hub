import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ data, title }) {
    document.title = `Trending | ${title}`
    return (
        <div className='flex flex-wrap w-full h-full px-[3%] bg-primary'>
            {data.map((item, index) => (
                <Link className='w-[25vh] mr-[3%] mb-[5%]' key={index}>
                    <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`} alt="" />
                    <h1 className='text-2xl text-zinc-200 mt-5 font-semibold'>
                        {item.name || item.title || item.original_name || item.original_title}
                    </h1>

                </Link>
            ))}
        </div>
    )
}

export default Cards