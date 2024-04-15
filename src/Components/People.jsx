import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import Loader from './Loader';
import axios from '../utils/axios';
import Cards from '../templates/Cards';

function People() {
    const navigate = useNavigate();
    const [people, setPeople] = useState([]);
    const [category, setCategory] = useState("popular");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPeople = async () => {
        try {
            const { data } = await axios.get(`person/popular?page=${page}`);
            if (data.results.length > 0) {
                setPeople((prev) => [...prev, ...data.results])
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
        if (people.length === 0) {
            getPeople();
        }
        else {
            setPage(1);
            setPeople([]);
            getPeople();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return people.length > 0 ? (
        <div className='w-screen h-screen'>
            <div className='px-[3%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-300'>
                    <i onClick={() => navigate(-1)} className='hover:text-secondary cursor-pointer ri-arrow-left-line pr-4'>
                    </i>
                    People <span className='text-lg font-medium text-zinc-500'>{`(${category})`}</span>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown title="Category" options={["popular"]} func={(e) => setCategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll
                dataLength={people.length}
                next={() => getPeople()}
                hasMore
                loader={<h1>Loading...</h1>}
            >
                <Cards data={people} pageTitle="People" title={category} keyTitle="people" />
            </InfiniteScroll>

        </div>
    ) : <Loader />
}

export default People