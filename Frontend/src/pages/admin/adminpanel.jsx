import React, { useState, useEffect } from 'react'
import logo from '../../../public/logo.png';


import search from '../../assets/images/search.png'
import cross from '../../assets/images/cross.png'
import { Link } from 'react-router-dom'

// import { NavLink } from 'react-router-dom';

import menu from '../../assets/svgs/menu.svg';

import url from '../../components/serverurl'
import axios from 'axios'
import TagInput from '../../components/Taginput';

const adminpanel = () => {
  const [paypal, setPaypal] = useState('')
  const [menuico, setMenuico] = useState(menu);

  const [binance, setBinance] = useState('')
  const [cont1, setCont1] = useState('flex')
  const [cont2, setCont2] = useState('none')
  const [cont3, setCont3] = useState('none')
  const [selid, setSelid] = useState()
  const [images, setImages] = useState()
  const [prices3, setPrices3] = useState()
  const [prices2, setPrices2] = useState()
  const [prices1, setPrices1] = useState()
  const [id, setLid] = useState()
  const [users, setUsers] = useState([])
  const [connection1, setConnection1] = useState([])
  const [connection2, setConnection2] = useState([])
  const [connection3, setConnection3] = useState([])
  const [country, setCountry] = useState('')
  const [cc1, setCc1] = useState([])
  const [cc2, setCc2] = useState([])
  const [cc3, setCc3] = useState([])
  const [data, setData] = useState([])


  const [newusers, setNewusers] = useState([])



  const [freeusers, setFreeUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [name, setName] = useState('')
  const [plan, setPlan] = useState('')
  const [profile1, setProfile1] = useState({ display: 'none' });

  const [refresh, setRefresh] = useState(false);
  const [formstyle, setFormstyle] = useState({ display: 'none' })
  const [loading, setLoading] = useState({ display: 'none' })
  const [error, setError] = useState('')

  const filterByCountry = (country) => {
    return users.filter(bank => bank.country === country);
  };
  const [email, setEmail] = useState('')
  const handelupdate = (name, email, plan, id) => {
    setFormstyle({ display: 'flex' })
    setName(name)
    setEmail(email)
    setPlan(plan)
    setSelid(id)
  }
  const dataupdate = (eve, id) => {
    eve.preventDefault();
    setLoading({ display: 'flex' })
    axios.put(`${url}/dataupdate` + id, { name, email, plan })
      .then(result => {
        setRefresh(prev => !prev);
      })
      .catch(err => { console.log(err) })
      .finally(() => setLoading({ display: 'none' }))
  }
  const handellogout = () => {
    localStorage.removeItem('admintoken')
    window.location.reload()




  }
  const handeldel = (id) => {
    setLoading({ display: 'flex' })

    axios.delete(`${url}/deletedata` + id)
      .then(result => {
        setRefresh(prev => !prev);



      })
      .catch(err => { console.log(err) })
      .finally(() => setLoading({ display: 'none' }))

  }
  useEffect(() => {
    axios.get(`${url}/getuser`)
      .then((result) => {
        setUsers(result.data)
      })
      .catch((error) => console.log(error))
  }, [refresh]);

  useEffect(() => {



    const freeuser = users.filter(item =>
      item.plan.toLowerCase().includes('free')


    )
    setFreeUsers(freeuser)

  }, [users])
  useEffect(() => {

    const newuser = users.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
      ||
      item.plan.toLowerCase().includes(searchQuery.toLowerCase())
      ||
      item.country === searchQuery



    )

    setNewusers(newuser)



  }, [searchQuery])

  function handelplans() {
    setCont1('none')
    setCont3('none')

    setCont2('flex')

  }
  function handelhome() {
    setCont1('flex')
    setCont2('none')
    setCont3('none')
  }
  function handelmethods() {
    setCont3('flex')
    setCont2('none')
    setCont1('none')

  }
  const handelcross = (e) => {

    e.preventDefault()
    setFormstyle({ display: 'none' })
  }
  const handelauth = (e) => {
    e.preventDefault()
    axios.post(`${url}/updateadminauth`, { id, paypal, binance, connection1, connection2, connection3 })
      .then(result => {
      })
      .catch(err => { console.log(err) })
  }
  const handelauth2 = (e) => {
    e.preventDefault()
    axios.post(`${url}/updatecountry`, { country, cc1, cc2, cc3 })
      .then(result => {
        console.log(result)
        setError("Prices updated successfully")
      })
      .catch(err => { console.log(err) })
  }

  const adminauth = () => {
    axios.get(`${url}/adminauth`)
      .then(res => {
        setPaypal(res.data[0].paypal)
        setBinance(res.data[0].binance)
        setConnection1(res.data[0].connection1)
        setConnection2(res.data[0].connection2)
        setConnection3(res.data[0].connection3)

        setLid(res.data[0]._id)


      })
      .catch((err) => { console.log(err) })
  }
  const adminauth2 = () => {
    axios.get(`${url}/getcountries`)
      .then(res => {
        console.log(res)
        setData(res.data)

      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    adminauth()
    adminauth2()
  }, [])

  useEffect(() => {
    const countryObj = data.find(item => item.country === country);
    if ( countryObj){


      setCc1(countryObj.connection1);
      setCc2(countryObj.connection2);
      setCc3(countryObj.connection3);
      console.log(countryObj)
    }

  }, [ data, country])

  // const handelcont3 = () => {

  //   connection3.push(prices3)

  //   setRefresh(prev => !prev);
  // }
  // const handelcont2 = () => {

  //   connection2.push(prices2)

  //   setRefresh(prev => !prev);
  // }
  // const handelcont1 = () => {

  //   connection1.push(prices1)

  //   setRefresh(prev => !prev);
  // }
  // const dellink3 = (index) => {
  //   const updatedLinks = connection3.filter((_, i) => i !== index);
  //   setConnection3(updatedLinks);
  //   // setRefresh(prev => !prev);

  // };
  // const dellink2 = (index) => {
  //   const updatedLinks = connection2.filter((_, i) => i !== index);
  //   setConnection2(updatedLinks);
  //   // setRefresh(prev => !prev);

  // };
  // const dellink1 = (index) => {
  //   const updatedLinks = connection1.filter((_, i) => i !== index);
  //   setConnection1(updatedLinks);
  //   // setRefresh(prev => !prev);

  // };
  const handelmenu = () => {
    if (profile1.display == 'none') {

      setProfile1({ display: 'flex' })

      setMenuico(cross)

    } else {
      setMenuico(menu)

      setProfile1({ display: 'none' })

    }
  }
  const countries = [
    "us", // United States
    "uk", // United Kingdom
    "ire", // Ireland
    "aus", // Australia
    "ca", // Canada
    "ger", // Germany
    "uae", // United Arab Emirates Dirham
    "qatar", // Qatari Riyal
    "malaysia", // Malaysian Ringgit
    "other" // Default for other countries
  ];
  const countriesname = { us: 'United States', uk: 'United Kingdom', ire: 'Ireland', aus: 'Australia', ca: 'Canada', ger: 'Germany', uae: 'United Arab Emirates ', qatar: 'Qatar', malaysia: 'Malaysia', other: 'other' }

  return (
    <>
      <div className='bg-[rgb(13,12,67)]  min-h-screen'>

        <nav className='nav flex text-white px-4 items-center justify-between h-[90px] mb-2 bg-[#00000060]'>
          <img src={logo} width={90} alt="" />
          <div className='hidden lg:flex gap-4'>

            <button onClick={handellogout} className='hover:bg-[#0098ac] px-4 font-normal text-lg border-[#0098ac] border transition-all duration-300 ease-in'> Logout</button>
            <Link className='px-5 flex py-6 w-full border border-[#0098ac] bg-[#0098ac] transition-all duration-300 ease-in hover:bg-transparent' to='/admincontroll'>Main Controll</Link>


          </div>
          <button onClick={handelmenu} className='w-10 h-10 lg:hidden active:rotate-[100deg]  transition-all duration-300 ease-in-out' ><img src={menuico} width={25} height={25} alt="" /></button>

          <div style={profile1} className='w-full lg:hidden   absolute  top-[90px] left-0 flex-col z-50 rounded-b-lg'>
            <button onClick={handelhome} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'>Home</button>
            <button onClick={handelplans} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Users</button>
            <button onClick={handelmethods} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'>Admin  Auth </button>
            {/* <Link to='/adminpanel'>Main</Link> */}
            <Link className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]' to='/admincontroll'>Main Controll</Link>


            <button onClick={handellogout} className='px-5 flex py-6 w-full bg-[rgb(13,12,67)] hover:bg-[#0098ac]'> Logout</button>


          </div>

        </nav>

        <div className='flex gap-1  '>


          <div className="hidden lg:block text-white sidebar m-1 space-y-4 px-4 py-10 bg-[#00000060] min-h-screen rounded-xl w-[400px]  ">
            <div className='border-b-2 w-full py-3  h-auto'>
              <button onClick={handelhome} className=' hover:bg-blue-400 rounded-md px-2 w-full text-left py-3'>Home</button>
            </div>
            <div>

              <button onClick={handelplans} className=' w-full py-3 hover:bg-blue-400 rounded-md px-2 h-auto text-left '> Users</button>

            </div>
            <div>

              <button onClick={handelmethods} className=' w-full py-3   hover:bg-blue-400 rounded-md px-2 h-auto text-left '>Admin  Auth </button>

            </div>

          </div>



          <div style={{ scrollbarWidth: 'none', display: cont1 }} className='bg-[#00000060] relative text-white p-2 flex lg:flex-row min-h-screen  flex-col gap-2 rounded-xl w-full m-2 '>
            <div style={loading} className='absolute top-0 left-0 w-full  items-center justify-center z-10 h-full bg-[#00000067]'>
              <img src={loading} alt="" />

            </div>
            <div className='grid grid-cols-1 h-1/2 md:grid-cols-2 lg:grid-cols-3 gap-3'>


              <div className='w-auto p-3 h-[180px] bg-yellow-500 rounded-xl'>
                <h1 className='text-3xl'>Total users</h1>
                <h2 className='text-5xl'>{users.length}</h2>

              </div>
              <div className='w-auto p-3 h-[180px] bg-blue-500 rounded-xl'>
                <h1 className='text-3xl'>Free Plan Users</h1>
                <h2 className='text-5xl'>{freeusers.length}</h2>

              </div>
              <div className='w-auto p-3 h-[180px] bg-blue-500 rounded-xl'>
                <h4 className='text-4xl'>
                  Hi, Admin Welcome to Admin Panel
                </h4>

              </div>

              {
                countries.map((country) => (



                  <div className='w-auto p-3 h-[180px] bg-blue-500 rounded-xl'>

                    <p className='text-2xl'>
                      {countriesname[country]} <span className='text-lg'>({country})</span>
                    </p>
                    <h4 className='text-4xl'>
                      {filterByCountry(country).length}
                    </h4>


                  </div>
                ))
              }


            </div>

          </div>

          <div style={{ scrollbarWidth: 'none', display: cont2 }} className='bg-[#00000060] text-white p-2 relative rounded-xl w-full m-2 '>
            <div style={loading} className='absolute top-0 left-0 w-full items-center justify-center z-10 h-full bg-[#00000067]'>
              <img src={loading} alt="" />
            </div>
            <div className='block w-full'>
              <nav>
                <div className="h-[50px] gap-2 w-full flex">
                  <div className="w-full h-full relative">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search User by Name and Email"
                      className="search w-full box-border p-3 pr-[50px] text-lg placeholder:text-[16px] bg-[rgb(32,126,121)] rounded-lg h-full"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img
                      src={search}
                      className="absolute rounded-lg p-2 bg-[rgb(41,173,167)] search -right-5 top-[50%] translate-x-[-50%] translate-y-[-50%]"
                      alt="Search Icon"
                    />
                  </div>
                </div>
              </nav>
              <form style={formstyle} className="flex gap-2 flex-col lg:flex-row p-2">
                <label>Email:</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 text-white bg-[rgb(13,12,67)] rounded-lg"
                  type="email"
                />
                <label>Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 text-white bg-[rgb(13,12,67)] rounded-lg"
                  type="text"
                />
                <label>Plan:</label>
                <input
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="p-2 text-white bg-[rgb(13,12,67)] rounded-lg"
                  type="text"
                />
                <div className="flex gap-2 flex-col lg:flex-row">
                  <input
                    type="submit"
                    value="Update"
                    onClick={(e) => dataupdate(e, selid)}
                    className="p-2 font-bold cursor-pointer hover:bg-green-400 bg-green-300 rounded-lg text-white"
                  />
                  <button onClick={(e) => handelcross(e)}>
                    <img src={cross} className="p-1 mx-auto bg-red-400 rounded-md" alt="Close Icon" />
                  </button>
                </div>
              </form>
              <table className='w-full border-separate border-spacing-y-5'>
                <thead>
                  <tr>
                    <th className='text-left py-2'>Name</th>
                    <th>Email</th>
                    <th>Plan</th>
                    <th>country</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {newusers.length >= 1 ? (
                    newusers.map((user) => (
                      <tr key={user._id} className='border-2'>
                        <td className='py-4'>{user.name}</td>
                        <td className='text-center'>{user.email}</td>
                        <td className='text-center'>{user.plan}</td>
                        <td className='text-center'>{user.country}</td>

                        <td onClick={() => handelupdate(user.name, user.email, user.plan, user._id)} className='cursor-pointer text-center bg-green-500'>Update</td>
                        <td onClick={() => handeldel(user._id)} className='text-center cursor-pointer bg-red-500'>Delete</td>
                      </tr>
                    ))
                  ) : (
                    users.map((user) => (
                      <tr key={user._id} className='border-2'>
                        <td className='py-4'>{user.name}</td>
                        <td className='text-center text-sm'>{user.email}</td>
                        <td className='text-center'>{user.plan}</td>
                        <td className='text-center uppercase'>{user.country}</td>

                        
                        <td onClick={() => handelupdate(user.name, user.email, user.plan, user._id)} className='cursor-pointer text-center bg-green-500'>Update</td>
                        <td onClick={() => handeldel(user._id)} className='text-center cursor-pointer bg-red-500'>Delete</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>



          <div style={{ display: cont3 }} className='bg-[#00000060]  relative  p-2 text-white w-full m-2 '>
            <div className='w-full   '>
              <h1 className='text-center text-2xl my-2  mb-4'>Basic Accounts </h1>
              <form onSubmit={handelauth} className='w-full   lg:w-1/2 mb-4  mx-auto gap-1  flex flex-col '>
                <label htmlFor=""> Admin paypal:</label>
                <input value={paypal} onChange={(e) => { setPaypal(e.target.value) }} type="text" className=' p-2 text-black rounded-sm bg-[#ffffffc9]' required />
                <label htmlFor="">Admin binance:</label>
                <input value={binance} onChange={(e) => { setBinance(e.target.value) }} type="text" className=' p-2 text-black rounded-sm bg-[#ffffffc9]' required />
                {/* <label htmlFor=""> Connection 1:</label>
                <div className="connection3 flex flex-col gap-3 items-center ">

                  <div className="relative  w-full ">
                    <input value={prices1} onChange={(e) => setPrices1(e.target.value)} className="p-2 bg-white text-black rounded-lg w-full" type="text" placeholder="Add prices in oder" />
                    <button type="button" onClick={handelcont1} className="p-1 absolute right-0 bg-black top-1/2  -translate-y-1/2" >
                      <img src={cross} className='rotate-45' alt="" />
                    </button>
                  </div>
                  <div className="bg-white text-black py-2 px -2   flex gap-3 flex-wrap  w-full h-auto">
                    {

                      connection1.map((link, index) => (

                        <div className="w-[100px] h-auto pl-2  flex rounded-2xl border-2 py-1 items-center px-2 gap-2 justify-between border-black bg-white">
                          <p className="overflow-x-hidden">{link}</p>
                          <button onClick={() => dellink1(index)} type="button" className=" h-full  rounded-full flex items-center justify-center  bg-black " >
                            <img src={cross} className=" " alt="" />
                          </button>
                        </div>
                      ))

                    }

                  </div>

                </div>

                <label htmlFor=""> Connection 2:</label>

                <div className="connection3 flex flex-col gap-3 items-center ">

                  <div className="relative  w-full ">
                    <input value={prices2} onChange={(e) => setPrices2(e.target.value)} className="p-2 bg-white text-black rounded-lg w-full" type="text" placeholder="Add Prices in same oder" />
                    <button type="button" onClick={handelcont2} className="p-1 absolute right-0 bg-black top-1/2  -translate-y-1/2" >
                      <img src={cross} className='rotate-45' alt="" />
                    </button>
                  </div>
                  <div className="bg-white text-black py-2 px -2   flex gap-3 flex-wrap  w-full h-auto">
                    {

                      connection2.map((link, index) => (

                        <div className="w-[100px] h-auto pl-2  flex rounded-2xl border-2 py-1 items-center px-2 gap-2 justify-between border-black bg-white">
                          <p className="overflow-x-hidden">{link}</p>
                          <button onClick={() => dellink2(index)} type="button" className=" h-full  rounded-full flex items-center justify-center  bg-black " >
                            <img src={cross} className=" " alt="" />
                          </button>
                        </div>
                      ))

                    }

                  </div>

                </div>
                <label htmlFor=""> Connection 3: {prices3}</label>
                <div className="connection3 flex flex-col gap-3 items-center ">

                  <div className="relative  w-full ">
                    <input value={prices3} onChange={(e) => setPrices3(e.target.value)} className="p-2 bg-white text-black rounded-lg w-full" type="text" placeholder="Add Prices in same oder" />
                    <button type="button" onClick={handelcont3} className="p-1 absolute right-0 bg-black top-1/2  -translate-y-1/2" >
                      <img src={cross} className='rotate-45' alt="" />
                    </button>
                  </div>
                  <div className="bg-white text-black py-2 px -2   flex gap-3 flex-wrap  w-full h-auto">
                    {

                      connection3.map((link, index) => (

                        <div className="w-[100px] h-auto pl-2  flex rounded-2xl border-2 py-1 items-center px-2 gap-2 justify-between border-black bg-white">
                          <p className="overflow-x-hidden">{link}</p>
                          <button onClick={() => dellink3(index)} type="button" className=" h-full  rounded-full flex items-center justify-center  bg-black " >
                            <img src={cross} className=" " alt="" />
                          </button>
                        </div>
                      ))

                    }

                  </div>

                </div> */}
                <input type="submit" value="UPDATE" className='p-2 cursor-pointer rounded-md font-normal text-lg border-green-500 border hover:bg-transparent transition-all duration-300 ease-in bg-green-500 my-3' />

              </form>
              <h1 className='text-center text-2xl my-2  mb-4'>Prices by Countries</h1>
              <form onSubmit={handelauth2} className='w-full   lg:w-[65%] mb-4  mx-auto gap-5  flex flex-col '>
              {error && <span className='text-red-500 text-sm font-light'>{error}</span>}
                <select name="" onChange={(e) => setCountry(e.target.value)} id="" className='bg-gray-200 rounded-md py-4 text-black p-2'>
                  <option value="">Select  Country </option>

                  <option value="us">United State</option>
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
                <div className='space-y-2'>

                  <label htmlFor="" className='font-light'>One Connection :</label>
                  <TagInput
                    initialTags={cc1}
                    onTagsChange={(updatedTags) => setCc1(updatedTags)}
                    placehold='Type & Hit Enter '

                  />
                </div>
                <div className='space-y-2'>

                  <label htmlFor="" className='font-light'>Two Connections :</label>
                  <TagInput
                    initialTags={cc2}
                    onTagsChange={(updatedTags) => setCc2(updatedTags)}
                    placehold='Type & Hit Enter '

                  />
                </div>
                <div className='space-y-2'>

                  <label htmlFor="" className='font-light'>Three Connections :</label>
                  <TagInput
                    initialTags={cc3}
                    onTagsChange={(updatedTags) => setCc3(updatedTags)}
                    placehold='Type & Hit Enter '

                  />
                </div>




                <input type="submit" value="UPDATE" className='p-2 cursor-pointer rounded-md font-normal text-lg border-green-500 border hover:bg-transparent transition-all duration-300 ease-in bg-green-500 my-3' />

              </form>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default adminpanel
