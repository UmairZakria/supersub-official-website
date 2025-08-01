import React from 'react'
import Navbar from '../components/Navbar2'
import image from '../assets/images/wa2.png'
import arrow from '../assets/images/arrow.png'

import image2 from '../assets/images/gmail.png'
import axios from 'axios'
import url from '../components/serverurl';


import { Link,useNavigate  } from 'react-router-dom'
import { useState, useEffect } from 'react';

const trail = () => {
    const navi = useNavigate()

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
            <div className="flex flex-col w-full h-screen">

                <Navbar></Navbar>
                <div className='w-full   h-full flex justify-center items-center bg-indigo-100'>
                    <div className='relative bg-indigo-200 flex flex-col   gap-3 justify-center items-center h-3/4 lg:h-1/2 md:w-3/4 w-full lg:w-1/2  py-2 '>
                        <div onClick={() => { navi(-1) }}>

                            <img src={arrow} className='absolute top-3 z-50 left-3 rotate-180 cursor-pointer' alt="" />
                        </div>
                        <div class="absolute top-0 inset-0 flex justify-center items-center">
                            <div class="w-full h-full bg-[url('/logo.png')] bg-center bg-contain bg-no-repeat opacity-10"></div>
                        </div>
                        <h1 className='text-2xl lg:text-3xl text-gray-700 text-center font-semibold '> Get Your Free Trial Today </h1>
                        <Link target='_blank' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`} className='flex z-50 items-center justify-center gap-2 text-lg  lg:text-xl  underline cursor-pointer font-semibold text-cyan-900'>
                            <img className='bg-white p-2 rounded-full' src={image2} alt="" />
                            Get  Trial through Email.


                        </Link>
                        <Link target='_blank' to={`https://wa.me/${phonenumber}`} className='flex z-50 items-center justify-center gap-2 cursor-pointer  text-lg  lg:text-xl underline font-semibold text-cyan-900'>
                            <img className='bg-green-500 rounded-full ' src={image} alt="" />
                            Get  Trial through Whatsapp.

                        </Link>


                    </div>
                </div>
            </div>
        </>

    )
}

export default trail
