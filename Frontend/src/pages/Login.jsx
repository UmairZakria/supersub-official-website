
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import oeye from '../assets/images/openeye.png'
import ceye from '../assets/images/closedeye.png'
import logo from '../assets/images/logo.png'
import arrow from '../assets/images/arrow.png'

import bg from '../assets/images/bg.webp'
import Whatsapp from '../components/Whatsapp'
import url from '../components/serverurl'
import axios from 'axios'
import loading from '../assets/images/loading.gif'



import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navi = useNavigate()
    const [passwordeye, setPasswordeye] = useState(ceye)
    const [passwordtype, setPasswordtype] = useState("password"

    )
    const [loadings, setLoadings] = useState({ display: 'none' })


    const [error, setError] = useState({ display: 'none' })

    const [password, setPassword] = useState()


    const [email, setEmail] = useState()
    const handellogin = (e) => {
        e.preventDefault();
        setLoadings({ display: 'flex' })


        axios.post(`${url}/login`, { email, password })
            .then((res) => {
                const data = res.data
                if (data.status == 'nouser') {
                    console.log('nouser')
                    setLoadings({ display: 'none' })

                    setError({ display: 'block' })
                    setTimeout(() => {
                        setError({ display: 'none' })

                    }, 3000);
                }
                else if (data.status == 'nopass') {
                    setError({ display: 'block' })
                    setLoadings({ display: 'none' })

                    setTimeout(() => {
                        setError({ display: 'none' })

                    }, 3000);

                }
                else if (data.status == 'adminfull') {
                    localStorage.setItem('admintoken', data.admintoken)


                    navi('/adminpanel')

                }
                else if (data.status == 'adminnopass') {


                    setLoadings({ display: 'none' })

                    setError({ display: 'block' })
                    setTimeout(() => {
                        setError({ display: 'none' })

                    }, 3000);
                }

                else if (data.token) {
                    const token = localStorage.getItem('token')
                    if (token) {
                        localStorage.removeItem('token')

                        localStorage.setItem('token', data.token)
                        navi('/')
                        setLoadings({ display: 'none' })
                    } else {


                        localStorage.setItem('token', data.token)
                        navi('/')
                        setLoadings({ display: 'none' })
                    }

                }



            })
            .catch((err) => { console.log(err) })

    }
    const handeleye = () => {
        if (passwordeye == ceye) {
            setPasswordtype('text')
            setPasswordeye(oeye)
        } else {
            setPasswordtype('password')
            setPasswordeye(ceye)
        }

    }

    return (
        <div className='bg-[rgb(13,12,67)] bg-cover bg-center w-full min-h-screen max-h-full flex flex-col justify-center  items-center'>

            <div onClick={() => { navi('/') }} >
                <img src={logo} width={100} height={35} loading='lazy' alt="" />
            </div>

            <div className='w-full  mx-4  bg-[rgba(92,85,194,0.34)] h-auto bg-opacity-50 lg:w-1/3  lg:rounded-xl md:w-1/2 md:rounded-xl 2xl:w-1/3   shadow-lg p-1  '>



                <div className='relative' >

                    {/* <img src={arrow} onClick={() => navi(-1)} className='absolute cursor-pointer top-0 rotate-180 left-2' alt="" /> */}
                    <form onSubmit={handellogin} className=' w-full gap-6 px-5 mt-2 py-6 flex flex-col'>
                        <label style={error} htmlFor="" className="text-red-600 font-medium">Invalid User and Password</label>

                        <label className='text-[rgb(0,178,200)]  text-center  font-medium text-2xl' >Login Now!</label>


                        <div className='flex flex-col '>

                            <label htmlFor="Email" className='text-white font-medium text-sm ' >Email Address</label>
                            <input type="email" required className='pt-2 text-white focus:outline-none px-2 border-[rgb(100,97,255)] bg-transparent border-x-0 border-t-0 border-b-2'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div className='flex flex-col gap-1'>

                            <label className='text-white font-medium text-sm ' htmlFor="Password">Password</label>
                            <div className='w-full relative'>
                                <input required type={passwordtype} className=' text-white pt-2 px-2 w-full border-[rgb(100,97,255)] focus:outline-none bg-transparent border-b-2 border-x-0 border-t-0'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img src={passwordeye} alt="" className='absolute top-0 right-2 size-7' onClick={handeleye} />
                                <div className='p-[4px] bg-[#059fbc] absolute rounded-t-md -top-1     right-0  '>

                                    <img src={passwordeye} alt="" className=' size-7 ' onClick={handeleye} />
                                </div>
                            </div>
                        </div>

                        <input type="submit" value={'Login Now'} className='text-white shadow-sm bg-[rgb(0,178,200)] hover:bg-[rgba(0,177,200,0.88)] active:bg-[rgba(0,177,200,0.94)] py-3 rounded-xl mt-3' />
                    </form>
                </div>

            </div>
            <Whatsapp />
        </div>

    )
}

export default Login
