import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar2'
import pp from '../assets/images/paypal.png'

import bb from '../assets/images/bb.png'
import bankim from '../assets/images/bank.png'




import arrow from '../assets/images/arrow.png'
import url from '../components/serverurl'
import axios from 'axios'
const buynow = () => {
    const [select, setOption] = useState('')
    const [first1, setFirst1] = useState({ display: 'flex' })
    const [first2, setFirst2] = useState({ display: 'none' })
    const [payment, setPayment] = useState('')
    const [email, setEmail] = useState('')

    const [payaccount, setPayaccount] = useState('')
    const [country, setCountry] = useState(localStorage.getItem('country'))
    const [listbank, setBanklist] = useState([])
    const [filterbank, setFilterbank] = useState([])
    const [phonenumber, setPnumber] = useState('')


    const [paymethods, setPaymethods] = useState({})
    const [bank, setBank] = useState([])

    const state = useLocation()
    const navi = useNavigate()
    const data = () => {
        axios.get(`${url}/admincontact`)
            .then((res) => {
                setEmail(res.data[0].email)
                setPnumber(res.data[0].phonenumber)

            }).catch((err) => { console.log(err) })

    }

    const id = state.state.id;
    const adminbanks = () => {
        axios.get(`${url}/adminbank`)
            .then((res) => {
                setBanklist(res.data[0].banks)

            }).catch((err) => { console.log(err) })
    }
    const filterByCountry = (data, country) => {
        return data.filter(bank => bank.country.toLowerCase() === country.toLowerCase());
    };
    const filterByname = (data) => {
        return listbank.filter(bank => bank.bname.toLowerCase() === data.toLowerCase());
    };
    useEffect(() => {
        if (id) {
            adminbanks()
            data()
            setPayment(id)
            axios.get(`${url}/adminauth`)
                .then(res => {
                    setPaymethods(res.data[0])
                })
                .catch((err) => { console.log(err) })

        } else {
            navi('/Plans')
        }

    }, [])
    useEffect(() => {
        if (listbank.length > 0) {
            setFilterbank(filterByCountry(listbank, country)); // Use dynamic country or default to 'uae'
        }
    }, [listbank, country]);


    const handelback = () => {
        setFirst1({ display: 'flex' })
        setFirst2({ display: 'none' })
    }
    const handelnext1 = () => {
        if (select !== 'paypal' && select !== 'binance') {
            setBank(filterByname(select))
            setFirst1({ display: 'none' })
            setFirst2({ display: 'flex' })
        } else {
            setFirst1({ display: 'none' })

            setFirst2({ display: 'flex' })



        }


    }
    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            //   setCopied(true); 
            //   setTimeout(() => setCopied(false), 2000); 
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <>
            <Navbar></Navbar>
            <div className='w-full  h-auto min-h-[90vh] flex justify-center items-center bg-indigo-100'>
                <div style={first1} className=' h-[300px] py-4 px-4 flex flex-col justify-around bg-indigo-200 w-full lg:w-1/3'>
                    <div onClick={() => { navi(-1) }}>

                        <img src={arrow} className='rotate-180 cursor-pointer' alt="" />
                    </div>
                    <h3 className='text-center text-xl text-gray-600 '>Choose Your Payment method   </h3>
                    <select onChange={(e) => { setOption(e.target.value) }} name="" className='w-full bg-transparent border-2 flex  p-2 focus:outline-none  border-[rgba(13,12,67,0.62)]  ' id="">
                        <option value="" >Select an option </option>

                        <option value="binance">Binance</option>
                        <option value="paypal">Paypal</option>
                        {
                            country == 'pk' ?
                                <><option value="easypaisa">Easypaisa</option>
                                    <option value="jazzcash">Jazzcash</option>
                                </> :
                                ""


                        }
                        {filterbank.length > 0 ? (
                            <>
                                {filterbank.map(bank => (
                                    <option key={bank.bname} value={bank.bname}>{bank.bname}</option>


                                )

                                )
                                }
                            </>
                        ) : ('')
                        }
                    </select>
                    <button onClick={handelnext1} className='border-2 p-3  hover:bg-transparent hover:text-black transition-all duration-700 ease-in-out border-[rgb(13,12,67)]  text-lg bg-[rgb(13,12,67)]  text-white'>Next</button>

                </div>
                <div style={first2} className=' h-auto py-4 px-4 flex flex-col gap-6 bg-indigo-200 w-full lg:w-1/3'>
                    <div>
                        <div onClick={handelback}>

                            <img src={arrow} className='rotate-180 cursor-pointer' alt="" />
                        </div>
                        <h3 className='text-center text-xl text-gray-600 flex items-center justify-center  gap-2'>Pay Via {select} {select === 'paypal' ? (<>  <img src={pp} alt="" /></>) : select === 'binance' ? (<>  <img src={bb} alt="" width={32} /></>) : (<>  <img src={bankim} alt="" width={48} /></>)}  </h3>
                    </div>
                    <div>

                        <div className='text-md flex  items-center gap-1 flex-wrap'>Please send <span className='font-semibold'>{payment}</span> to  {select === 'paypal' ? (<>id :- <a className='underline text-blue-600' target='_blank' href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paymethods.paypal}&amount=0&item_name=Payment`} >{paymethods.paypal}</a><button className='flex gap-2 mx-1 p-1 bg-slate-200 rounded items-center active:opacity-75' onClick={() => handleCopy(paymethods.paypal)}><img width="16" height="16" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy" /> Copy </button> </>) : select === 'binance' ? (<div className='flex ' >id :-{paymethods.binance} <button className='flex gap-2 mx-1 p-1 bg-slate-200 rounded items-center active:opacity-75' onClick={() => handleCopy(paymethods.binance)}><img width="16" height="16" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy" /> Copy </button> </div>) : select ==='jazzcash' ? (<>
                            <div className=' flex items-center'>03064771821 <button className='flex gap-2 mx-1 p-1 bg-slate-200 rounded items-center active:opacity-75' onClick={() => handleCopy('03064771821')}><img width="16" height="16" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy" /> Copy </button></div>
                            <p className='  my-3 text-lg font-semibold  text-red-600'>
                                Important Note  :
                                Please send a screenshot of the payment receipt to this email: <Link className='underline font-bold' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  >{email}</Link>. <br />
                                OR <br />
                                Send a screenshot of the payment receipt to this number: <Link className='underline font-bold' to={`https://wa.me/${phonenumber}`}  >+{phonenumber}</Link>.
                            </  p>

                        </>) : select ==='easypaisa' ? (<>
                            <div className=' flex items-center'>03064771821 <button className='flex gap-2 mx-1 p-1 bg-slate-200 rounded items-center active:opacity-75' onClick={() => handleCopy('03064771821')}><img width="16" height="16" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy" /> Copy </button></div>
                            <p className='  my-3 text-lg font-semibold  text-red-600'>
                                Important Note  :
                                Please send a screenshot of the payment receipt to this email: <Link className='underline font-bold' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  >{email}</Link>. <br />
                                OR <br />
                                Send a screenshot of the payment receipt to this number: <Link className='underline font-bold' to={`https://wa.me/${phonenumber}`}  >+{phonenumber}</Link>.
                            </  p>

                        </>) : (
                            <>

                                <div className='text-lg  font-semibold'>

                                    {bank.map(bank => (
                                        <>

                                            <h1 key={bank.bname}><span>Bank Name:</span> {bank.bname}</h1>
                                            <h2 ><span>Account Holder Name:</span> {bank.accountholder
                                            }</h2>
                                            <h3 ><span>Account Number:</span> {bank.accountno

                                            }</h3>
                                            <p>{bank.iban === "" ? ('') : (<>Iban: {bank.iban}</>)}</p>
                                            <p className='  my-3 text-lg font-semibold  text-red-600'>
                                                Important Note  :
                                                Please send a screenshot of the payment receipt to this email: <Link className='underline font-bold' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  >{email}</Link>. <br />
                                                OR <br />
                                                Send a screenshot of the payment receipt to this number: <Link className='underline font-bold' to={`https://wa.me/${phonenumber}`}  >+{phonenumber}</Link>.
                                            </  p>
                                        </>



                                    )

                                    )
                                    }
                                </div>

                            </>




                        )}</div>

                        {
                            select === 'paypal' ? (
                                <>
                                    <p className='  my-3 text-lg font-semibold text-red-600'>
                                        Important Note:
                                        When making the payment, kindly use the <span className='font-bold underline'>"Friends and Family"</span> option. To maintain privacy, please do not mention IPTV or any specific services in the payment details. Instead, just include your name in the reference section.
                                        <br />
                                        Additionally,
                                        Please send a screenshot of the payment receipt to this email: <Link className='underline font-bold' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  >{email}</Link>. <br />
                                        OR <br />
                                        Send a screenshot of the payment to this number: <Link className='underline font-bold' to={`https://wa.me/${phonenumber}`}  >+{phonenumber}</Link>.
                                    </  p>
                                    <div className='flex'>

                                        <img src={pp} width={28} alt="" />
                                        <h1>{select}</h1>
                                    </div>
                                </>
                            ) : select === 'binance' ? (
                                <>
                                    <p className='  my-3 text-lg font-semibold  text-red-600'>
                                        <span className='text-gray-600 '>Account Name: ADMIN-SRK </span> <br />
                                        Important Note  :
                                        Please send a screenshot of the payment receipt to this email: <Link className='underline font-bold' to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  >{email}</Link>. <br />
                                        OR <br />

                                        Send a screenshot of the payment to this number: <Link className='underline font-bold' to={`https://wa.me/${phonenumber}`}  >+{phonenumber}</Link>.
                                    </  p>
                                </>
                            )
                                : (
                                    <>
                                    </>
                                )
                        }
                    </div>

                    <Link to={`https://wa.me/${phonenumber}`} className='border-2 p-3 text-center  hover:bg-transparent hover:text-black transition-all duration-700 ease-in-out border-[rgb(13,12,67)]  text-lg bg-[rgb(13,12,67)]  text-white'>Next</Link>

                </div>

            </div>

        </>
    )
}

export default buynow
