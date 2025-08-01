import React from 'react'
// import logo from '../assets/images/logo.png'
import logo from '../../public/logo.png';

import star from '../assets/images/start.png'
import wa from '../assets/images/wa.png'
import mail from '../assets/images/mail.png'
import axios from 'axios';
import url from './serverurl';


import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const footer = () => {
    const [email, setEmail] = useState('')
    const [phonenumber, setPnumber] = useState('')
    const data = () => {
        axios.get(`${url}/admincontact`)
            .then((res) => {
                setEmail(res.data[0].email)
                setPnumber(res.data[0].phonenumber)

            }).catch((err) => { console.log(err) })

    }
    useEffect(() => {
        data()
    }, [])


    return (
        <>
        <div className='h-auto grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-3 md:grid-cols-2 text-white bg-[rgb(13,12,67)] px-10 py-8'>
            <div className='h-full  flex flex-col gap-3 items-start  '>
                <img src={logo} className="h-[100px] " alt="SuperSubOfficials logo" />
                <div className='space-y-4'>
                    <p className='pr-4'>
                        <strong>SuperSubOfficials</strong> is the best IPTV provider of 2024. We offer premium IPTV services at an <Link to='/Plans' className='underline'>affordable price</Link>.
                        Enjoy <strong>all streaming platforms</strong> in one place with the best IPTV service provider.
                    </p>
                    <ul className='mt-2 space-y-2 text-gray-300'>

                        <li>+54,000 TV Channels, Movies & Series</li>
                        <li>4k HD Resolution</li>
                        <li>No Buffering</li>
                        <li>No Freezing</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>UseFull Links</h2>
                <ul className='  text-white'>
                    <Link to='/' className='flex items-center gap-2 hover:underline  text-lg p-2'>
                        <img width={20} src={star} alt="Home" />
                        Home</Link>
                    <Link to={'/about'} className='flex items-center gap-2 hover:underline  text-lg p-2'>
                        <img width={20} src={star} alt="About" />
                        About</Link>
                    <Link to={'/contactus'} className='flex items-center gap-2  hover:underline text-lg p-2'>
                        <img width={20} src={star} alt=" Contact Us" />
                        Contact Us</Link>
                    <Link to={'/Plans'} className='flex items-center gap-2  hover:underline text-lg p-2'>
                        <img width={20} src={star} alt="Plans" />
                        Plans</Link>
                    <div className='h-[1px] w-3/4 bg-white'></div>
                    <Link to={'/login'} className='flex items-center gap-2 pl-6  hover:underline text-lg p-2'>
                        {/* <img src={star} alt="" /> */}
                        Login</Link>
                    <Link to={'/signup'} className='flex items-center gap-2 pl-6  hover:underline  text-lg p-2'>
                        {/* <img src={star} alt="" /> */}
                        Sign Up</Link>





                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-semibold '>Contact Details</h1>
                <ul>
                    <Link to={`https://wa.me/${phonenumber}`} target='_blank' className='flex items-center gap-2  hover:underline text-lg p-2'>
                        <img src={wa} width={28} alt="WhatsApp contact for Supersub Officials" />
                        +{phonenumber}</Link>
                    <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`} target='_blank' className='flex items-center gap-2  hover:underline text-lg p-2'>
                        <img src={mail} width={28} alt="Email contact for Supersub Officials" />
                        {email}</Link>
                </ul>
            </div>




        </div>
        <div className="border-t-2 bg-[rgb(13,12,67)] w-full ">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <div className="text-gray-100 text-md text-center flex  gap-6 sm:text-left"><span>
                        
                        © 2024   <span >supersubofficials.com</span>
                        </span>

                    </div>
                    
                    
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-100">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-100">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-100">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-100">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </>

    )
}

export default footer
