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
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            // setTrending(data.results)
            if (data.results.length > 0) {
                setTrending((prev) => [...prev, ...data.results])
                setPage(page + 1)
            }
            else {
                setHasMore(false)
            }
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    const refreshHandler = () => {
        if (trending.length === 0) {
            getTrending();
        }
        else {
            setPage(1);
            setTrending([]);
            getTrending();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [duration, category]);

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
                next={() => getTrending()}
                hasMore
                loader={<h1>Loading...</h1>}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default Trending