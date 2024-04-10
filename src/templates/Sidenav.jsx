import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
    return (
        <div className='w-[20%] h-full  border-r border-zinc-200 p-10'>
            <h1 className='text-2xl text-white font-bold'>
                <i class="text-secondary ri-movie-2-fill mr-3"></i>
                <span>Movie Magic Hub</span>
            </h1>
            < nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    New Feed
                </h1>
                <Link to="/trending" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-1 group-hover:animate-bounce ri-fire-fill"></i>
                    Trending
                </Link>
                <Link to="/popular" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-2 group-hover:animate-bounce ri-bard-fill"></i>
                    Popular
                </Link>
                <Link to="/movies" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className=" group-hover:animate-bounce ri-movie-2-fill mr-2"></i>
                    Movies
                </Link>
                <Link to="/tvShows" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-2 group-hover:animate-bounce ri-tv-2-fill"></i>
                    TV Shows
                </Link>
                <Link to="people" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-2 group-hover:animate-bounce ri-team-fill"></i>
                    People
                </Link>
            </nav>

            <hr className='border-none h-[1px] bg-zinc-400' />

            < nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    Information
                </h1>
                <Link to="/about" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-2 group-hover:animate-bounce ri-information-fill"></i>
                    About
                </Link>
                <Link to="contact" className='hover:bg-secondary p-5 rounded-lg hover:text-white duration-300 flex flex-row group'>
                    <i className="mr-2 group-hover:animate-bounce ri-phone-fill"></i>
                    Contact
                </Link>
            </nav >

        </div >
    )
}

export default Sidenav