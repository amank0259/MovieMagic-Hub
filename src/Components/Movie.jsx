import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import Cards from '../templates/Cards';


function Movie() {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [category, setCategory] = useState("popular");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setMovie((prev) => [...prev, ...data.results])
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
        if (movie.length === 0) {
            getMovie();
        }
        else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='px-[3%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line pr-4'>
                    </i>
                    Movie <span className='text-lg font-medium text-zinc-500'>{`(${category})`}</span>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown title="Category" options={["now_playing", "popular", "top_rated", "upcoming"]} func={(e) => setCategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={() => getMovie()}
                hasMore
                loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} pageTitle="Movie" title={category} />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default Movie