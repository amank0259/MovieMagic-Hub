import React from 'react';
import loader from '/loader3.gif'
function Loader() {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {/* <h1 className='text-6xl text-white font-bold'>Tham ja bhai saans lele...</h1> */}
            <img className='w-[25%]' src={loader} alt="" />
        </div>
    )
}

export default Loader