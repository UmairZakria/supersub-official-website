import React, { useState, useEffect } from 'react'
import menu from '../../assets/svgs/menu.svg';
import cross from '../../assets/images/cross.png'

import logo from '../../../public/logo.png';
import axios from 'axios'
import url from '../../components/serverurl'
import loading from '../../assets/images/loading.gif'
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom'




const admincashy = () => {
  const [refresh, setRefresh] = useState(false);

  const [loadings, setLoadings] = useState({ display: 'none' })
  const [error, setError] = useState({ display: 'none' })
  const [error2, setError2] = useState({ display: 'none' })


  const [menuico, setMenuico] = useState(menu);
  const [bname, setBname] = useState('');
  const [delbname, setDelbname] = useState('');

  const [accountno, setAccount] = useState('')
  const [accountholder, setHolder] = useState('')
  const [iban, setIban] = useState('')
  const [country, setCountry] = useState('')
  const [bid, setBid] = useState('')

  const [email, setEmail] = useState('');
  const [contactid, setContactid] = useState();
  const [phonenumber, setNumber] = useState();

  const [listbank, setBanklist] = useState([])

  const [profile1, setProfile1] = useState({ display: 'none' });

  const [uae, setConnections] = useState({
    connection1: [0, 0, 0, 0],  // Initial values for each input
    connection2: [0, 0, 0, 0],
    connection3: [0, 0, 0, 0]
  });
  const [qatar, setQatar] = useState({
    connection1: [0, 0, 0, 0],  // Initial values for each input
    connection2: [0, 0, 0, 0],
    connection3: [0, 0, 0, 0]
  });
  const [malaysia, setMalaysia] = useState({
    connection1: [0, 0, 0, 0],  // Initial values for each input
    connection2: [0, 0, 0, 0],
    connection3: [0, 0, 0, 0]
  });

  const handellogout = () => {
    setLoadings({ display: 'flex' })

    localStorage.removeItem('admintoken')
    window.location.reload()
    // setLoadings({ display: 'none' })





  }
  // Admin bank details
  const handelmenu = () => {
    if (profile1.display == 'none') {

      setProfile1({ display: 'flex' })

      setMenuico(cross)

    } else {
      setMenuico(menu)

      setProfile1({ display: 'none' })

    }
  }
  const handelbank = (e) => {
    setLoadings({ display: 'flex' })

    e.preventDefault();
    axios.post(`${url}/adminbank`, { bname, accountno, accountholder, iban, country })
      .then((res) => {
        setLoadings({ display: 'none' })
        setError2({ display: 'block' })

        setTimeout(() => {
          setError2({ display: 'none' })

        }, 3000);
        setRefresh(prev => !prev);
        setLoadings({ display: 'none' })



      })
      .catch((err) => {
        setLoadings({ display: 'none' })

      })


  }
  const handelbankdel = (e) => {
    setLoadings({ display: 'flex' })

    e.preventDefault();

    const bname = delbname
    axios.post(`${url}/adminbankdel`, { bname })
      .then((res) => {
        setLoadings({ display: 'none' })

        setRefresh(prev => !prev);

        


      })
      .catch((err) => { console.log(err) })
  }
  // admin email
  const handelsubmit1 = (e) => {
    e.preventDefault();
    setLoadings({ display: 'flex' })
    axios.post(`${url}/admincontact`, { email, phonenumber })
      .then((res) => {
        setLoadings({ display: 'none' })
        setError({ display: 'block' })
        setTimeout(() => {
          setError({ display: 'none' })

        }, 3000);

      })
      .catch((err) => {
        setLoadings({ display: 'none' })

      })

  }
  const handelsubmit1update = (e) => {
    e.preventDefault();
    const id = contactid
    setLoadings({ display: 'flex' })
    axios.put(`${url}/admincontact`, { email, phonenumber, id })
      .then((res) => {
        setLoadings({ display: 'none' })
        setError({ display: 'block' })
        setTimeout(() => {
          setError({ display: 'none' })

        }, 3000);

      })
      .catch((err) => {
        setLoadings({ display: 'none' })

      })

  }
  // gets for page
  const admincontacts = () => {
    axios.get(`${url}/admincontact`)
      .then((res) => {
        setEmail(res.data[0].email)
        setNumber(res.data[0].phonenumber)
        setContactid(res.data[0]._id)

      }).catch((err) => { console.log(err) })
  }
  const adminbanks = () => {
    axios.get(`${url}/adminbank`)
      .then((res) => {
        setBanklist(res.data[0].banks)

      }).catch((err) => { console.log(err) })
  }
  const adminconnection = () => {
    axios.get(`${url}/adminconnection`)
      .then((res) => {

        setConnections(res.data[0].uae)
        setQatar(res.data[0].qatar)
        setMalaysia(res.data[0].malaysia)


      }).catch((err) => { console.log(err) })
  }



  useEffect(() => {
    setLoadings({ display: 'flex' })
    
    adminconnection()
    admincontacts()
    adminbanks()
    setLoadings({ display: 'none' })

  }, [refresh])

  const handelqatar = (connectionName, index, value) => {
    setQatar(prevConnections => ({
      ...prevConnections,
      [connectionName]: prevConnections[connectionName].map((item, idx) =>
        idx === index ? Number(value) : item
      )
    }));
  };
  const handelmalaysia = (connectionName, index, value) => {
    setMalaysia(prevConnections => ({
      ...prevConnections,
      [connectionName]: prevConnections[connectionName].map((item, idx) =>
        idx === index ? Number(value) : item
      )
    }));
  };
  const handleChange = (connectionName, index, value) => {
    setConnections(prevConnections => ({
      ...prevConnections,
      [connectionName]: prevConnections[connectionName].map((item, idx) =>
        idx === index ? Number(value) : item
      )
    }));
  };
  const handelconnections = (e) => {
    e.preventDefault();

    axios.post(`${url}/adminconnection`, { uae, qatar, malaysia })
      .then((res) => {


      })
      .catch((err) => {
        console.log(err)
        setLoadings({ display: 'none' })

      })
  }

  return (
    <>
      <nav className='nav flex text-white px-4 items-center border-b-2 justify-between h-[90px]   bg-[rgb(13,12,67)]'>
        <img src={logo} width={90} alt="" />
        <div className='hidden lg:flex gap-4'>

          <button onClick={handellogout}> Logout</button>
          <Link className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' to='/adminpanel'>Main Panel</Link>


        </div>
        <button onClick={handelmenu} className='w-10 h-10 lg:hidden' ><img src={menuico} width={25} height={25} alt="" /></button>

        <div style={profile1} className='w-full lg:hidden   absolute  top-[90px] left-0 flex-col z-50 rounded-b-lg'>

          <button onClick={handellogout} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout</button>
          <Link className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' to='/adminpanel'>Main</Link>



        </div>

      </nav>
      <div className='bg-[rgb(13,12,67)] relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2  '>
        <div style={loadings} className='absolute top-0 left-0 rounded-2xl w-full h-full flex items-center justify-center z-50 bg-[#0000004d]'>
          <img src={loading} alt="" />
        </div>
        <div className='  w-full h-full py-8 '>

          <form onSubmit={handelbank} className='flex flex-col gap-2 h-full items-center w-full justify-center text-white'>
            <label style={error2} htmlFor="" className="text-red-600 font-medium">Done</label>

            <label htmlFor="">Bank Name</label>
            <input value={bname} onChange={(e) => setBname(e.target.value)} className='p-2 text-black w-3/4' type="text" name="" id="" />
            <label htmlFor="">Account Number </label>
            <input value={accountno} onChange={(e) => setAccount(e.target.value)} className='p-2  text-black w-3/4' type="text" name="" id="" />
            <label htmlFor="">Account Holder name </label>
            <input value={accountholder} onChange={(e) => setHolder(e.target.value)} className='p-2  text-black w-3/4' type="text" name="" id="" />
            <label htmlFor="">Account IBAN (optional)</label>
            <input value={iban} onChange={(e) => setIban(e.target.value)} className='p-2  text-black w-3/4' type="text" name="" id="" />

            <label htmlFor="Email" className='text-white font-medium text-md' >Choose for which country</label>

            <select name="" onChange={(e) => setCountry(e.target.value)} id="" className=' text-black w-3/4    py-3'>
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
              <option value="pk">Pakistan</option>

              <option value="other">other</option>

            </select>

            <input className='p-2 bg-green-400 w-3/4' type="submit" value={'Add'} name="" id="" />


          </form>
        </div>
        <div className='  w-full h-full py-8 '>


          <form onSubmit={handelsubmit1update} className='flex flex-col gap-2 h-full items-center w-full justify-center text-white'>

            <label style={error} htmlFor="" className="text-red-600 font-medium">Done</label>
            <label htmlFor="">Email</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} className='p-2  text-black w-3/4' type="text" name="" id="" />
            <label htmlFor="">PhoneNumber</label>
            <input required value={phonenumber} onChange={(e) => setNumber(e.target.value)} className='p-2   text-black w-3/4' type="text" name="" id="" />
            <input className='p-2 bg-green-400 w-3/4' type="submit" value={'Update'} name="" id="" />


          </form>
        </div>
        <div className=' w-full h-full py-8 items-center gap-2  justify-center flex flex-col '>
          <form onSubmit={handelbankdel} >

            <select name="" onChange={(e) => setDelbname(e.target.value)} className='p-2' id="">
              <option value="">Select Your Bank to Delete </option>
              {
                listbank.length >= 1 ? (
                  listbank.map((bank) =>
                    <option key={bank.bname} value={bank.bname}>{bank.bname}</option>
                  )
                ) : ('')
              }

            </select>

            <input type="submit" value="DELETE" className='bg-red-400  px-3 p-2' />
            {/* <button onClick={handelbankdel} className='bg-red-400  px-3 p-2'>Delete</button> */}
          </form>
        </div>
        <div className='uae w-full py-4  '>
          <form onSubmit={handelconnections} className='flex gap-2 flex-col'>
            <label htmlFor="" className='text-center text-xl font-bold text-white'>Dubai Connections</label>
            <div>
              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection1:</label>
              <div className='flex gap-2  px-2   w-full'>
                {uae.connection1.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handleChange('connection1', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection2:</label>
              <div className='flex gap-2  px-2   w-full'>
                {uae.connection2.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handleChange('connection2', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection3:</label>
              <div className='flex gap-2  px-2   w-full'>
                {uae.connection3.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handleChange('connection3', idx, e.target.value)}
                  />
                ))}
              </div>

            </div>
            <input type="submit" value={'update'} className='bg-green-400 text-white font-semibold mx-2 p-3' />
          </form>

        </div>
        <div className='qatar w-full py-4  '>
          <form onSubmit={handelconnections} className='flex gap-2 flex-col'>
            <label htmlFor="" className='text-center text-xl font-bold text-white'>Qatar Connections</label>
            <div>
              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection1:</label>
              <div className='flex gap-2  px-2   w-full'>
                {qatar.connection1.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelqatar('connection1', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection2:</label>
              <div className='flex gap-2  px-2   w-full'>
                {qatar.connection2.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelqatar('connection2', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection3:</label>
              <div className='flex gap-2  px-2   w-full'>
                {qatar.connection3.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelqatar('connection3', idx, e.target.value)}
                  />
                ))}
              </div>

            </div>
            <input type="submit" value={'update'} className='bg-green-400 text-white mx-2 font-semibold p-3' />
          </form>

        </div>
        <div className='malaysia w-full py-4  '>
          <form onSubmit={handelconnections} action="" className='flex gap-2 flex-col'>
            <label htmlFor="" className='text-center text-xl font-bold text-white'>Malaysia Connections</label>
            <div>
              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection1:</label>
              <div className='flex gap-2  px-2   w-full'>
                {malaysia.connection1.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelmalaysia('connection1', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection2:</label>
              <div className='flex gap-2  px-2   w-full'>
                {malaysia.connection2.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelmalaysia('connection2', idx, e.target.value)}
                  />
                ))}
              </div>

              <label htmlFor="" className=' text-lg text-white font-semibold px-2'>connection3:</label>
              <div className='flex gap-2  px-2   w-full'>
                {malaysia.connection3.map((val, idx) => (
                  <input
                    key={idx}
                    placeholder={idx + 1}
                    type="number"
                    className='w-1/2 p-2'
                    value={val}
                    onChange={(e) => handelmalaysia('connection3', idx, e.target.value)}
                  />
                ))}
              </div>

            </div>
            <input type="submit" value={'update'} className='bg-green-400 text-white mx-2 font-semibold p-3' />
          </form>

        </div>






      </div>
    </>
  )
}

export default admincashy
