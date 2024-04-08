import React, { useEffect, useState } from 'react';
import Sidenav from '../templates/Sidenav';
import Topnav from '../templates/Topnav';
import axios from '../utils/axios';
import Header from '../templates/Header';
import Loader from '../templates/Loader';
import HorizontalCards from '../templates/HorizontalCards';
import Dropdown from '../templates/Dropdown';


function Home() {
    document.title = "Homepage";
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all")
    // Created Header component for the home page with a customized title and Wallpaper
    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomData = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log("error:", error);
        }
    };

    // Trending Section
    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getTrending();
        !wallpaper && getHeaderWallpaper();
    }, [category])

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />
                <div className='my-5 flex justify-between items-center py-2 px-5'>
                    <h1 className='text-3xl font-semibold text-zinc-400'>
                        Trending
                    </h1>
                    <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => setCategory(e.target.value)} />
                </div>
                <HorizontalCards data={trending} />
            </div>
        </>
    ) : <Loader />
}

export default Home