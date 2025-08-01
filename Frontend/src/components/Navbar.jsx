import React, { useRef, useState, useEffect } from 'react';
import menu from '../assets/svgs/menu.svg';

import logo from '../../public/logo.png';
import Marquee from 'react-fast-marquee';

import cross from '../assets/images/cross.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


  const [profile1, setProfile1] = useState({ display: 'none' });
  const [authing, setAuthing] = useState({ display: 'none' });
  const token = localStorage.getItem('token')
  const [country, setCountry] = useState()
  const [menuico, setMenuico] = useState(menu);



  useEffect(() => {
    setCountry(localStorage.getItem('country'))
    if (profile1.display == 'flex') {

      document.body.style.overflow = 'hidden';

    } else {
      document.body.style.overflow = 'auto';

    }

    // Cleanup the scroll style when component unmounts or popup closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [profile1]);

  const handelmenu = () => {
    if (profile1.display == 'none') {

      setProfile1({ display: 'flex' })


      setMenuico(cross)

    } else {
      setMenuico(menu)

      setProfile1({ display: 'none' })

    }
  }

  const handellogout = () => {
    localStorage.removeItem('token');
    window.location.reload(true);



  }
  const handelreset = () => {
    localStorage.removeItem('country')
    window.location.reload(true)
  }
  const tils = [
    " ",
    "✨ 2025 MEGA SALE , Get 25% OFF ON 1 YEAR Subsicription ✨",
    "✨ Start the free trial of our premium IPTV services! ✨",
    "✨ 2025 MEGA SALE , Get 25% OFF ON 1 YEAR Subsicription ✨",
    "✨ Super Sub Officials ✨ ",

    "✨ 2025 MEGA SALE , Get 25% OFF ON 1 YEAR Subsicription ✨",
    "✨ Super Sub Officials ✨",
    "✨ Start the free trial of our premium IPTV services! ✨",

    





  ]
  return (
    <>

      <div className='w-full flex flex-wrap text-lg bg-gradient-to-br from-[rgb(12,109,133)] text-white  to-[rgb(57,206,226)] p-3'>
        <Marquee speed={40} direction='left' className="text-white text-[16px] font-medium h-full ">
          {tils.map((til, index) => (
            <>
              <span key={index} className='mx-6 uppercase'>
                {til}
              </span>
            </>
          ))}
        </Marquee>

      </div>
      <nav className=' sticky top-0 z-[100]  w-full text-white '>

        <div className='h-[90px] px-2  w-full  bg-[rgb(13,12,67)]  flex items-center justify-between   '>
          <Link to="/"><img src={logo} className='' width={100} height={35} alt="SuperSub Officials Logo" /> </Link>
          <button onClick={handelmenu} className='w-10 h-10 lg:hidden md:hidden' ><img src={menuico} width={25} height={25} alt="Menu Icon" /></button>
          <div className='hidden  lg:block md:block'>
            <ul className='hidden lg:flex  md:flex  gap-5 '>
              <NavLink to="/" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300 hover:text-white" }} >Home</NavLink  >
              <NavLink to="/Plans" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300 hover:text-white" }} >Pricing</NavLink  >
              <NavLink to="/About" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300 hover:text-white" }} >About</NavLink  >
              <NavLink to="/FAQs" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300 hover:text-white" }} >FAQs</NavLink  >
              <NavLink to="/contactus" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300 hover:text-white" }} >Contact Us</NavLink  >

            </ul>
          </div>
          {
            token ? (

              <div className=' hidden lg:block md:block'>
                <button onClick={handellogout} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout</button>

              </div>

            ) : (
              <div className=' hidden lg:block md:block'>
                <ul className='hidden lg:flex md:flex gap-2'>
                  <Link to='/Signup' className='bg-white px-4 flex items-center  font-medium cursor-pointer transition-all duration-500 border-2 text-[#0d0c43] rounded-3xl hover:bg-transparent hover:text-white hover:border-2 hover:border-[rgb(0,178,200)]'>Sign Up</Link>
                  <Link to='/login' className='py-2 px-6 text-gray-300 border-2  rounded-3xl hover:border-[rgb(0,178,200)] transition-all duration-500 hover:bg-[rgb(0,178,200)] cursor-pointer'>Login</Link>
                </ul>
              </div>

            )}

        </div>
        <div style={profile1} className='w-full lg:hidden md:hidden transition-all duration-500 ease-in-out absolute  top-[100%] left-0 flex-col z-10 rounded-b-lg'>
          <NavLink to='/' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' >Home  </NavLink>
          <NavLink to='/About' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' >About </NavLink>
          <NavLink to='/Plans' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' >Plans </NavLink>
          <NavLink to='/contactus' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' >Cantact Us </NavLink>
          {
            token ? (

              <div className=''>
                <button onClick={handellogout} className='px-5 flex py-6 w-full border-t-2 bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout</button>

              </div>
            ) : (

              <div className='w-full flex flex-col'>

                <NavLink to={'/login'} className='px-5 py-4  bg-[rgb(13,12,67)] border-t-2 hover:bg-[#0098acd3]' href="">Log in</NavLink>
                <NavLink to={'/signup'} className='px-5 py-4 bg-[rgb(13,12,67)] hover:bg-[#0098ac]' href="">Sign up</NavLink>
              </div>
            )
          }





        </div>




      </nav>


    </>

  )
}

export default Navbar
