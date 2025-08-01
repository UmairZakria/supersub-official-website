
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import oeye from '../assets/images/openeye.png'
import ceye from '../assets/images/closedeye.png'
import logo from '../assets/images/logo.png'
import arrow from '../assets/images/arrow.png'
import bg from '../assets/images/bg.webp'
import Whatsapp from '../components/Whatsapp'
import axios from 'axios'
import url from '../components/serverurl'
import loading from '../assets/images/loading.gif'






import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [country, setOption] = useState('')

    const navi = useNavigate()
    const [passwordeye, setPasswordeye] = useState(ceye)

    const [passwordtype, setPasswordtype] = useState("password"

    )

    const [succes, setSucces] = useState({ display: 'none' })
    const [loadings, setLoadings] = useState({ display: 'none' })

    const [succestxt, setSuccestxt] = useState('')
    const [password, setPassword] = useState()

    const [name, setName] = useState()
    const [plan, setplan] = useState('free')


    const [email, setEmail] = useState()



    const Submitform = (e) => {
        e.preventDefault();
        setLoadings({ display: 'flex' })
        axios.post(`${url}/rigister`, { name, email, password, plan,country })
            .then(result => {
                if (result.data.status === 'useralready') {
                    setSucces({ display: 'block' })
                    setLoadings({ display: 'none' })

                    setSuccestxt('User Already Exist!')

                    setTimeout(() => {
                        setSuccestxt('')

                    }, 2000);
                } else if (result.data.email === email) {

                    setSucces({ display: 'block' })
                    setLoadings({ display: 'none' })
                    setSuccestxt('User Succesfully Rigistered 😊. Login Now!')

                    navi('/Login')

                } else {
                    setLoadings({ display: 'none' })
                    setSucces({ display: 'block' })

                    setSuccestxt('Internal Server Error !')
                    setTimeout(() => {
                        setSuccestxt('')

                    }, 2000);

                }

            })
            .catch(error => console.log(error))

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

            <div>
                <img src={logo} width={100} height={35} loading='lazy' alt="" />
            </div>

            <div className='w-full  mx-4  bg-[rgba(92,85,194,0.34)] h-auto bg-opacity-50 lg:w-1/3  lg:rounded-xl md:w-1/2 md:rounded-xl 2xl:w-1/3   shadow-lg p-1  '>



                <div className='relative' >
                    <div style={loadings} className='absolute top-0 left-0 rounded-2xl w-full h-full flex items-center justify-center z-50 bg-[#0000004d]'>
                        <img src={loading} alt="" />
                    </div>
                    <img src={arrow} onClick={() => navi(-1)} className='absolute cursor-pointer top-0 rotate-180 left-2' alt="" />
                    <form onSubmit={Submitform} className=' w-full gap-6 px-5 mt-2 py-6 flex flex-col'>
                        <label style={succes} className='text-red-500 font-medium text-md ' >{succestxt}</label>
                        <label className='text-[rgb(0,178,200)]  text-center  font-medium text-2xl' >Rigister Now!</label>

                        <div className='flex flex-col gap-1'>

                            <label htmlFor="Email" className='text-white font-medium text-sm ' >Name</label>
                            <input type="text" required className='pt-2  text-white focus:outline-none px-2 bg-transparent border-[rgb(100,97,255)] border-x-0 border-t-0 border-b-2'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col '>

                            <label htmlFor="Email" className='text-white font-medium text-sm ' >Email Address</label>
                            <input type="email" required className='pt-2 text-white focus:outline-none px-2 border-[rgb(100,97,255)] bg-transparent border-x-0 border-t-0 border-b-2'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>

                            <label htmlFor="Email" className='text-white font-medium text-md' >Choose Your country</label>
                            <select name="" onChange={(e) => setOption(e.target.value)} id="" className='bg-[#059dbcde] focus:outline-none px-2 text-white rounded-md     py-3'>
                                <option className='' value="">Select Your Country </option>

                                <option className=' ' value="us">United State</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ire">Ireland</option>
                                <option value="aus">Australia </option>
                                <option value="ca">Canada</option>
                                <option value="ger">Germany</option>
                                <option value="uae">United Arab emirates</option>
                                <option value="qatar">Qatar</option>
                                <option value="malaysia">Malaysia</option>
                                <option value="other">other</option>

                            </select>

                        </div>


                        <div className='flex flex-col gap-1'>

                            <label className='text-white font-medium text-sm ' htmlFor="Password">Password</label>
                            <div className='w-full relative'>
                                <input required type={passwordtype} className=' text-white pt-2 px-2 w-full border-[rgb(100,97,255)] focus:outline-none bg-transparent border-b-2 border-x-0 border-t-0'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className='p-[5px] bg-[#059fbc] absolute rounded-t-md -top-1     right-0  '>

                                    <img src={passwordeye} alt="" className=' size-7 ' onClick={handeleye} />
                                </div>

                            </div>
                        </div>
                        <span className='flex  gap-4'>
                            <Link to='/login' className='text-white underline hover:text-white hover:underline font-semibold text-md'>Already have Account? Login Now!</Link>

                        </span>
                        <input type="submit" value={'Signup'} className='text-white shadow-sm bg-[rgb(0,178,200)] hover:bg-[rgba(0,177,200,0.88)] active:bg-[rgba(0,177,200,0.94)] py-3 rounded-xl mt-3' />
                    </form>
                </div>

            </div>
            <Whatsapp />
        </div>

    )
}

export default Signup
