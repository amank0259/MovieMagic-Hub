import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templates/Cards';
import Loader from './Loader';


function Popular() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setPopular((prev) => [...prev, ...data.results])
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
        if (popular.length === 0) {
            getPopular();
        }
        else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='px-[3%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line pr-4'>
                    </i>
                    Popular <span className='text-lg font-medium text-zinc-500'>{`(${category})`}</span>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown title="Category" options={["movie", "tv"]} func={(e) => setCategory(e.target.value)} />
                    <div className='w-[2%]'></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={() => getPopular()}
                hasMore
                loader={<h1>Loading...</h1>}
            >
                <Cards data={popular} pageTitle="Popular" title={category} keyTitle="popular" />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default Popular