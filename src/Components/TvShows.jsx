import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import Loader from './Loader';
import axios from '../utils/axios';
import Cards from '../templates/Cards';

function TvShows() {
    const navigate = useNavigate();
    const [tvShows, setTvShows] = useState([]);
    const [category, setCategory] = useState("airing_today");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTvShows = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if (data.results.length > 0) {
                setTvShows((prev) => [...prev, ...data.results])
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
        if (tvShows.length === 0) {
            getTvShows();
        }
        else {
            setPage(1);
            setTvShows([]);
            getTvShows();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tvShows.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='px-[3%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line pr-4'>
                    </i>
                    TvShows <span className='text-lg font-medium text-zinc-500'>{`(${category})`}</span>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e) => setCategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll
                dataLength={tvShows.length}
                next={() => getTvShows()}
                hasMore
                loader={<h1>Loading...</h1>}
            >
                <Cards data={tvShows} pageTitle="TvShows" title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default TvShows