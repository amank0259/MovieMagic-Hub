import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import axios from '../utils/axios';
import Cards from '../templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1)

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}`);
            // setTrending(data.results)
            setTrending((prev) => [...prev, ...data.results])
            setPage(page + 1)
            console.log(data);
        } catch (error) {
            console.log("error:", error);
        }
    };
    useEffect(() => {
        getTrending();
    }, [duration, category])
    return trending.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='px-[3%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line pr-4'>
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

            <InfiniteScroll
                dataLength={trending.length}
                next={() => setTimeout(() => getTrending(), 500)}
                hasMore={true}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default Trending