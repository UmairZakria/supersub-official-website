import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import drop from '../assets/images/drop.png'
import { Helmet } from 'react-helmet-async';
import mb from '../assets/images/mb.png'

import vid from '../../public/bg.mp4'
import vid2 from '../../public/bg.mp4'

import vidbg from '../assets/images/vid-bg.jpg'
import Plans from '../components/Plans'
import Feature from '../components/feature'
import Footer from '../components/footer'
import SnowEffect from '../components/SnowEffect';
import Typewriter from 'typewriter-effect';
import '../index.css'
import Wa from '../components/Whatsapp'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom'
import { Rev, Revimage, ReviewSection, Slideshow } from '../components/rev'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import Santa from '../components/Santa';
const Home = () => {
  const navi = useNavigate()
  const [profile, setProfile] = useState({ display: 'none' });
  const [select, setOption] = useState('')
  const [startTyping, setStartTyping] = useState(false); // Control when typing starts


  const handelsubmit = (e) => {
    e.preventDefault();
    if (select === '') {

    } else {
      localStorage.setItem('country', select)
      setStartTyping(true)
      setProfile({ display: 'none' })
      // navi('/plans')





    }


  }

  
  useEffect(() => {
    const country = localStorage.getItem('country')
    if (country) {
      localStorage.removeItem('country')
      setProfile({ display: 'flex' })
    } else {

      setProfile({ display: 'flex' })



    }

  }, [])
  return (
    <>
      <Helmet>
        <title>SuperSub Officials - Best IPTV Service Provider</title>
        <meta name="description" content="SuperSubofficials provides the best IPTV service. Watch live channels, movies, series, and more with no buffering and freezing." />
        <meta name="keywords" content="supersubofficials,super sub, supersub, supersub officials, IPTV, IPTV service, best IPTV" />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <Navbar />
      <Wa />
      {/* <Santa /> */}



      <div id='main'  className='relative w-full max-h-full min-h-[calc(100vh-80px)] shadow-inset-up-down h-[calc(100vh-80px)] bg-[rgba(28,28,70,0.62)]'>


        <div style={profile} className='fixed bottom-0 z-[100] flex items-center justify-center left-0 w-full h-screen bg-[#00000093]'>

          <motion.form
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{delay:1,duration:1 ,type:'spring',stiffness:150}}
          onSubmit={handelsubmit} className='lg:w-1/3 w-full md:w-1/2 rounded flex flex-col gap-5 h-1/2 justify-center py-16 md:py-14 lg:py-8 text-white  px-3 lg:px-6 bg-[rgba(13,12,67,0.88)] '>
            <label htmlFor="" className='text-center md:text-2xl text-xl   lg:text-2xl'>Please, Choose Your Country!</label>
            <select name="" onChange={(e) => setOption(e.target.value)} id="" className='bg-white text-black p-2'>
              <option value="">Select Your Country </option>

              <option value="us">United State</option>
              <option value="uk">United Kingdom</option>
              <option value="ire">Ireland</option>
              <option value="aus">Australia </option>
              <option value="ca">Canada</option>
              <option value="ger">Germany</option>
              <option value="uae">United Arab emirates</option>
              <option value="qatar">Qatar</option>
              <option value="malaysia">Malaysia</option>
              <option value="pk">Pakistan</option>
              <option value="other">other</option>

            </select>
            <input type="submit" value={'Continue'} className='bg-[rgb(0,177,200)] text-white font-semibold cursor-pointer py-4' />

          </motion.form>
        </div>
        <video src={vid2}
          className="absolute  top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >

        </video>
        <img src={vidbg} className="absolute  top-0 left-0 w-full h-full object-cover -z-20 " alt="" />
        {/* <SnowEffect /> */}

        <div className='text-white flex flex-col justify-center  gap-4 lg:gap-6 h-[100%] px-4 text-center items-center ' >
          <div className='flex flex-col'>
            <p className='text-[rgb(0,178,200)] font-semibold text-lg lg:text-2xl'>Faster, Better, Cheaper!</p>
            <motion.h1
              initial={{ y: -600 }}
              animate={{
                y: 0
              }}
              transition={{ delay: 1.3, duration: 0.5, type: 'spring', stiffness: 150 }}
               className='  text-[38px] font-sans md:text-6xl font- lg:text-7xl ' >
              {startTyping && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(' Super Sub Officials  ') 
                      .pauseFor(6000) 
                      .deleteAll() 
                      .typeString('2025 Mega Sale, 25% off on 1 Year Subscription') 
                      .pauseFor(4000) 
                      .deleteAll() 
                      .typeString('Best IPTV Service Provider') 
                      .pauseFor(3000) 
                      .start(); 
                  }}
                />
                )}



            </motion.h1  >

          </div>
          <p className='text-[16px] md:text-lg md:w-3/4 text-center  lg:w-1/2 lg:text-2xl'>

            Enjoy all streaming platforms in one place with the best IPTV services from SuperSubOfficials.
          </p>
          <p className='text-center text-sm font-light '>
            Live Channels + 4k HD Resolution + Movies & Series <br />
            No Buffering + No Freezing
          </p>
          <Link to='/Plans' className='text-white px-6 shadow-sm bg-[rgb(0,178,200)] hover:bg-[rgba(0,177,200,0.88)] active:bg-[rgba(0,177,200,0.94)] py-3 gap-5 flex mt-3'>BUY NOW <img src={drop} className='rotate-[270deg]' alt="SuperSub IPTV" /> </Link>
          



        </div>
        <div className='w-full overflow-x-hidden'>

          <Rev />
        </div>

      </div>
      <Plans selectedCountry={select} />
      <Revimage />
      <Slideshow></Slideshow>
      <ReviewSection></ReviewSection>
      <Feature />
      <div className="flex flex-col items-center bg-white py-1 mb-4 px-4 ">
        <img src={mb} alt="SuperSub Official Money-Back Guarantee" className="w-36 h-36 mb-4" />
        <h3 className="text-blue-600 text-lg font-semibold mb-2">MONEY-BACK GUARANTEE</h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Supersubofficials – 7-Day Money-Back Guarantee</h1>
        <p className="text-gray-600 text-center max-w-md lg:max-w-screen-md">
          Experience  risk-free with our 7-day money-back guarantee. Enjoy a seamless streaming experience from the best IPTV provider.
        </p>
      </div>
      <FAQ></FAQ>
      <Footer></Footer>


    </>
  )
}

export default Home
