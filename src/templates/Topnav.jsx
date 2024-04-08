import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import noimage from '/no_images.png';

function Topnav() {

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(null)
    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${search}`);
            setSearchResult(data.results);
        } catch (error) {
            console.log("error:", error);
        }
    }

    useEffect(() => {
        getSearches()
    }, [search])


    return (
        <div className='w-full h-[8vh] relative flex justify-start items-center pl-[10%]'>
            <i className="text-3xl text-zinc-300 ri-search-fill"></i>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200' type='text' placeholder='search anything' />
            {search.length > 0 && (<i onClick={() => setSearch("")} className="text-zinc-300 text-2xl ri-close-fill"></i>)}

            {search.length > 0 && (<div className='absolute w-[55%] max-h-[50vh] overflow-auto top-[90%] bg-zinc-200 rounded'>
                {searchResult.map((item, index) => (
                    <Link key={index} className='w-[100%] text-zinc-600 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                        <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : noimage} alt="" />
                        <span>{item.title || item.originaltitle || item.name}</span>
                    </Link>
                ))}


            </div>)}


        </div>
    )
}

export default Topnav