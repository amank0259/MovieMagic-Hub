import React from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
    return (
        <div className='w-full h-[10vh] relative flex justify-center items-center'>
            <i class="text-3xl text-zinc-300 ri-search-fill"></i>
            <input className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200' type='text' placeholder='search anything' />
            <i class="text-zinc-300 text-2xl ri-close-fill"></i>

            <div className='absolute w-[50%] h-[50vh] overflow-auto top-[90%] bg-zinc-200 '>
                <Link className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                    <img src="" alt="" />
                    <span>Search</span>
                </Link>
                <Link className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                    <img src="" alt="" />
                    <span>Search</span>
                </Link>
                <Link className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                    <img src="" alt="" />
                    <span>Search</span>
                </Link>
                <Link className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                    <img src="" alt="" />
                    <span>Search</span>
                </Link>
                <Link className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                    <img src="" alt="" />
                    <span>Search</span>
                </Link>

            </div>


        </div>
    )
}

export default Topnav