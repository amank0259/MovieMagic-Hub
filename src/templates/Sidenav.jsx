import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className='w-[20%] h-full  border-r border-zinc-200 p-10'>
            <h1 className='text-2xl text-white font-bold'>
                <i class="text-secondary ri-tv-fill mr-3"></i>
                <span>Movie Magic Hub</span>
            </h1>
            < nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    New Feed
                </h1>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-1 ri-fire-fill"></i>
                    Trending
                </Link>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="ri-movie-2-fill mr-2"></i>
                    Movies
                </Link>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-2 ri-tv-2-fill"></i>
                    TV Shows
                </Link>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-2 ri-team-fill"></i>
                    People
                </Link>
            </nav>

            <hr className='border-none h-[1px] bg-zinc-400' />

            < nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    Information
                </h1>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-2 ri-information-fill"></i>
                    About
                </Link>
                <Link className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300'>
                    <i class="mr-2 ri-phone-fill"></i>
                    Contact
                </Link>
            </nav >

        </div>
    )
}

export default Sidenav