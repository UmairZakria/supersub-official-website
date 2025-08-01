import React from 'react'
import wa2 from '../assets/images/wa2.png'
import gmail from '../assets/images/gmail.png'
import axios from 'axios'
import url from './serverurl';


import { Link } from 'react-router-dom'
import { useState, useEffect  } from 'react';

const Whatsapp = () => {
  const [email, setEmail] = useState('')
  const [phonenumber, setPnumber] = useState('')
  const data = ()=>{
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
    <div className='fixed bottom-4 flex w-auto  text-white justify-center items-center flex-row-reverse z-[100]  right-4'>

      <Link to={`https://wa.me/${phonenumber}`} target='_blank' className=' p-[2px] bg-green-500   rounded-full '  >
        <img src={wa2} className='w-[34px] lg:w-auto' alt="" />
      </Link>

      <span className='bg-white text-gray-600 self-start rounded-full p-1 text-[9px] lg:text-[14px] lg:px-3 font-semibold'>Contact us</span>
    </div>
    <div >

    <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Subject&body=Message%20Body`}  target='_blank' className=' fixed bottom-[60px] p-1 lg:bottom-[100px] z-[100] right-4 lg:p-2 bg-white  rounded-full '  >
        <img src={gmail} className='w-[28px] lg:w-auto' alt="" />
      <span className='bg-white absolute text-gray-600  top-0 -left-11 lg:-left-20 lg:w-[80px] px-2 rounded-full text-center   p-1  text-[9px] lg:text-[14px] lg:px-3 font-semibold'>Mail us</span>

      </Link>
    </div>
    </>
  )
}

export default Whatsapp
