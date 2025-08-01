import React from 'react'
import Navbar from '../components/Navbar'
import Plan from '../components/Plans'
import Footer from '../components/footer'
import Whatsapp from '../components/Whatsapp'
// import { Helmet } from 'react-helmet';
import { Helmet } from 'react-helmet-async';
import { useState,useEffect } from 'react'
import url from '../components/serverurl'
import axios from 'axios'



const Plans = () => {
  const [country, setCountry] =useState(localStorage.getItem('country'))
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      const fetchDashboardData = async () => {
        
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
          localStorage.removeItem('country')
          setCountry(user.country)
          localStorage.setItem('country',user.country)
        }
      };
  
      fetchDashboardData();


      
    }else{
      
      setCountry(localStorage.getItem('country'))
      

    }
  }, [country])
  


  return (
    <>
      <Helmet>
        <title>IPTV Subscription Plans - Best IPTV Deals</title>
        <meta name="description" content="Explore the best IPTV subscription plans offering high-quality streaming, no buffering, 24/7 customer support, and compatibility with all devices. Choose your plan today!" />
        <meta name="keywords" content="IPTV subscription, best IPTV, IPTV deals, IPTV plans, IPTV for all devices, multi-device IPTV, IPTV streaming" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Plans - SuperSubofficials",
            "description": "IPTV subscription, best IPTV, IPTV deals, IPTV plans, IPTV for all devices, multi-device IPTV, IPTV streaming",
            "url": "https://supersubofficials.com/Plans"
          })}
        </script>
      </Helmet>
      <Whatsapp />
      <Navbar />
      <Plan selectedCountry={country} />

      <Footer></Footer>


    </>
  )
}

export default Plans
