import React , {useEffect , useState} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar2'
import Plans from '../components/Plans'
import { Link } from 'react-router-dom'
import drop from '../assets/images/drop.png'
import url from '../components/serverurl'


const dashboard = () => {
    const [userdata, setUserdata] = useState({})
    useEffect(() => {
        const fetchDashboardData = async () => {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${url}/dashboard`, {
            headers: {
              Authorization: token,
            },
          });
          const userdata = response.data
          if (userdata.Status === 'fail2') {
            localStorage.removeItem('token');
            window.location.reload(true)
    
            console.log('token expire')
    
          } else {
            const user = userdata.user.user
            setUserdata(user)
            localStorage.removeItem('country')
            localStorage.setItem('country',user.country)
          }
        };
    
        fetchDashboardData();
    
    
      }, []);

    
  return (
    <>
    <div>
      <Navbar
       name = {userdata.name}
       />
      <div className='w-full h-[90vh] bg-indigo-100 '>
        <div className="container mx-auto py-16 flex justify-evenly flex-col items-center w-full h-full">
          <div className='w-full px-2'>
          <h1 className='text-2xl lg:text-4xl mb-5'>Hi, <span className="underline">{userdata.name}</span> You are using <span className='underline'>{userdata.plan}</span> plan want to upgrade it. </h1>
          <p className='text-xl lg:text-2xl text-gray-500'> Click on below button to Choose a right plan for your account</p>

          </div>
          <div className='flex justify-center w-full '>

          <Link to="/plans" className=' text-white w-1/7 flex bg-[rgb(13,12,67)]  p-3 '>Click now
          <img src={drop} className='rotate-[270deg]  rounded-full ' alt="" />
          </Link>
          </div>

        </div>

      </div>
      
    </div>

    
    </>
  )
}

export default dashboard
