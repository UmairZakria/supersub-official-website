import React from 'react'
import tvshow from '../assets/images/tv.png'
import tvideo from '../assets/videos/video-tv.mp4'
import { Link } from 'react-router-dom'

import tvshowbg from '../assets/images/tvshowbg.jpg'


const feature = () => {
  return (
    <div className='w-full h-auto py-28  bg-black transition-all mb-20 shadow-lg shadow-black duration-500 ease-in-out flex gap-8 px-5 flex-col-reverse lg:flex-row items-center justify-around'>
      <div className='relative rounded-xl flex flex-col   bg-black items-center justify-evenly w-full  lg:w-[40%] h-[300px] '>
        <img src={tvshowbg} loading='lazy' className='absolute animate-pulse rounded-xl w-full lg:w-full h-[300px] object-cover  z-10    ' alt="" />
        <div className='bg-[#00000077] absolute rounded-xl  w-full lg:w-full h-[300px]   z-50'> </div>
        <div className='z-50 text-white  font-bold'>
          <h1 className='text-2xl  text-center'>
            Sign up Now and Start your Free trial Today
          </h1>
          <p className='text-center text-gray-300  font-normal px-4 lg:px-9'>
            Enjoy All Streaming Platform’s in One Spot at best IPTV Services

            16k Plus Channels + 4k HD Resolution + Movies & Series
            No Buffering + No Freezing
          </p>

        </div>

        {/* <Link to='/signup'  className='px-5 py-4 z-50  bg-[#00b2c8] hover:bg-[#21c9df]  text-white font-semibold ' href="">Sign up Now</Link > */}
        <Link to='/Trail' className='text-white shadow-sm z-50 bg-[rgb(0,178,200)] hover:bg-[rgba(0,177,200,0.88)] active:bg-[rgba(0,177,200,0.94)] py-3 px-5  flex mt-3'>Get Your Free Trial Today</Link>
        



      </div>
      <div className=' relative   text-white flex items-center flex-col z-50 w-full lg:w-[50%] '>

          <h3 className='text-xl'>Unlimited Movies and Series to watch  </h3>
          

        <img loading='lazy' className='rounded-lg w-full lg:w-full h-[300px] object-cover z-50   ' src={tvshow} alt="" />
        <video src={tvideo}
          className="absolute  top-1/3 md:w-[70%] md:top-7 md:left-[14%]   lg:top-7  left-0 lg:left-[10%] w-full  lg:w-[81%] h-auto z-10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          >

        </video>
          

      </div>

    </div>
  )
}

export default feature
