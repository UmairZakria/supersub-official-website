import React, { useRef, useState, useEffect } from 'react';
import menu from '../assets/svgs/menu.svg';
import person from '../assets/images/person.png';
// import logo from '../assets/images/logo.png';
import logo from '../../public/logo.png';

import drop from '../assets/images/drop.png'
import cross from '../assets/images/cross.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = (Props) => {

  const [profile1, setProfile1] = useState({ display: 'none' });
  const [menuico, setMenuico] = useState(menu);



  useEffect(() => {
    if (profile1.display == 'flex') {

      document.body.style.overflow = 'hidden';

    } else {
      document.body.style.overflow = 'auto';

    }

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
  return (
    <>
    

      <div className=' sticky top-0 z-[100]  w-full text-white '>

        <div className='h-[90px] px-2  w-full  bg-[rgb(13,12,67)]  flex items-center justify-between   '>
          <Link to="/"><img src={logo} className='' width={90} height={35} alt="" /> </Link>
          <button onClick={handelmenu} className='w-10 h-10 lg:hidden' ><img src={menuico} width={25} height={25} alt="" /></button>
          <div className='hidden  lg:block'>
            <ul className='hidden lg:flex   gap-5 '>
              <NavLink to="/" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300" }} >Home</NavLink  >
              <NavLink to="/Plans" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300" }} >Pricing</NavLink  >
              <NavLink to="/About" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300" }} >About</NavLink  >
              <NavLink to="/contactus" className={(e) => { return e.isActive ? "border-b-2 border-[rgb(0,178,200)] rounded-sm" : "text-gray-300" }} >Contact Us</NavLink  >
            </ul>
          </div>
          <div className=' hidden lg:block'>
          <button onClick={handellogout} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout </button>

          </div>

        </div>
        <div style={profile1} className='w-full lg:hidden transition-all duration-500 ease-in-out absolute  top-[100%] left-0 flex-col z-10 rounded-b-lg'>
          <NavLink to='/' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098acd3]' >Home  </NavLink>
          <NavLink to='/About' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098acd3]' >About </NavLink>
          <NavLink to='/Plans' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098acd3]' >Plans </NavLink>
          <NavLink to='/contactus' className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098acd3]' >Cantact Us </NavLink>
        <button onClick={handellogout} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout</button>


        </div>
        



      </div>
    

    </>

  )
}

export default Navbar
