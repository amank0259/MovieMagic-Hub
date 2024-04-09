import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import axios from '../utils/axios';
import Cards from '../templates/Cards';
import Loader from './Loader';

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState(null);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);
        } catch (error) {
            console.log("error:", error);
        }
    };
    useEffect(() => {
        getTrending();
    }, [duration, category])
    return trending ? (
        <div className='w-screen h-screen px-[3%] overflow-hidden overflow-y-auto'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line'>
                    </i>
                    Trending
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />
                    <div className='w-[2%]'></div>
                    <Dropdown title="Duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
                </div>
            </div>

            <Cards data={trending} title={category} />

        </div>
    ) : <Loader />
}

export default Trending