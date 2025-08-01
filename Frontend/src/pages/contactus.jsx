import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Whatsapp from '../components/Whatsapp'
import { NavLink } from 'react-router-dom'
import Mail from '../assets/images/mail.png'
import wa from '../assets/images/wa.png'
import axios from 'axios';
import url from '../components/serverurl'

const contactus = () => {
  const [mailform, setMailform] = useState({ display: 'flex' })
  const [waform, setWaform] = useState({ display: 'none' })
  const [viamail, setViamail] = useState({ borderColor: 'rgba(0,177,200,0.86)' })
  const [viawa, setViawa] = useState({ borderColor: 'transparent' })
  
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('')
  const [phonenumber, setPnumber] = useState('')

  const data = ()=>{
    axios.get(`${url}/admincontact`)
    .then((res) => {
      setEmail(res.data[0].email)
      setPnumber(res.data[0].phonenumber)

    }).catch((err) => { console.log(err) })

}
  const handelmail = () => {
    setWaform({ display: 'none' })
    setMailform({ borderColor: '[rgba(0,177,200,0.86)]', })
    setViamail({ borderColor: 'rgba(0,177,200,0.86)' })
    setViawa({ borderColor: 'transparent' })

  }

  const handelwa = () => {
    setWaform({ display: 'flex' })
    setMailform({ display: 'none' })
    setViawa({ borderColor: 'rgba(0,177,200,0.86)' })
    setViamail({ borderColor: 'transparent' })
    // setWaform({border:'[rgba(0,177,200,0.86)]',})


  }
  const sendmail = (e) => {
    // Create the mailto link
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    // Redirect to the mailto link
    window.location.href = mailtoLink;

  }
  const sendwa = (e) => {
    e.preventDefault();
    const phoneNumber = phonenumber
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
  }
  useEffect(() => {
    data()
}, [])
  return (
    <>
      <Navbar />

      <div className='w-full h-auto flex py-10 flex-col   justify-center items-center bg-[rgba(13,12,67,0.9)]  text-white'>
        <h1 className='mb-6 text-4xl font-semibold '>Contact Us</h1>
        <div className='mb-6 w-full lg:w-1/2 '>
          <nav className="w-full rounded-2xl  shadow-md shadow-black box-border flex justify-around">
            <button style={viamail} onClick={handelmail} className="px-7 font-bold items-center gap-3 border-b-[3px] border-[rgba(0,177,200,0.86)] py-4 flex " >
              <img src={Mail} width={28} alt="" />
              Via Email
            </button>
            <button style={viawa} onClick={handelwa} className="px-7 font-bold items-center gap-3 border-b-[3px] border-transparent  py-4 flex " >
              <img src={wa} width={28} alt="" />
              Via Whatsapp
            </button>

          </nav>
        </div>
        <form onSubmit={sendmail} style={mailform} className='w-full px-2 lg:w-1/2 flex flex-col gap-2'>

          <label htmlFor="" className='text-xl'>Enter Your Name:</label>
          <input type="text" required  onChange={(e) => setSubject(e.target.value)} placeholder='Enter Your Full Name' name="" className=' focus:border-2  rounded-lg p-2 text-white focus:outline-none bg-[rgba(51,50,128,0.95)]  border-white' id="" />


          <label htmlFor="" className='text-xl'>Enter Your Massage:</label>
          <textarea onChange={(e) => setMessage(e.target.value)} required placeholder='Enter Your Massage' className=' text-lg focus:border-2 border-white  rounded-xl h-[200px] text-white focus:outline-none bg-[rgba(51,50,128,0.95)] p-4' name="" id=""></textarea>
          <input type="submit" value={'Send'} className='bg-[rgba(0,177,200,0.86)] font-semibold text-xl   p-4 my-5' />
        </form>
        <form style={waform} onSubmit={sendwa} className='w-full px-2 lg:w-1/2  flex-col gap-2'>

          <label htmlFor="" className='text-xl'>Enter Your Massage:</label>
          <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Massage' className=' text-lg focus:border-2 border-white  rounded-xl h-[200px] text-white focus:outline-none bg-[rgba(51,50,128,0.95)] p-4' name="" id=""></textarea>
          <input type="submit" value={'Send'} className='bg-[rgba(0,177,200,0.86)] font-semibold text-xl   p-4 my-5' />
        </form>
      </div>
      <Whatsapp />
      <Footer></Footer>
    </>
  )
}

export default contactus
