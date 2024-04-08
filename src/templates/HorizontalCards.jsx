import React from 'react'
import { Link } from 'react-router-dom'

function HorizontalCards({ data }) {

    return (
        <div className='w-[100%] h-[35vh] flex overflow-y-hidden mb-5 p-3'>
            {data.map((item, index) => (
                <div key={index} className='min-w-[17%] bg-zinc-900 mr-5 overflow-hidden'>
                    <img
                        className='w-full object-cover rounded'
                        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt="" />
                    <div className=''>
                        <h1 className='text-xl font-semibold text-white my-2 px-2'>
                            {item.title || item.name || item.original_name || item.original_title}
                        </h1>
                        <p className='text-sm text-zinc-200 px-2'>{item.overview.slice(0, 80)}...
                            <Link className='text-zinc-500'>more</Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HorizontalCards