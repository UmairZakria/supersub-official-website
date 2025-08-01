import React, { useState, useEffect } from 'react';
import drop from '../assets/images/drop.png';
import chk from '../assets/images/chk.png';
import { Link, useNavigate } from 'react-router-dom';
import url from '../components/serverurl'


import axios from 'axios';
const Plans = (Props) => {
  const exchangeRates = {
    us: 1, // United States
    uk: 0.76, // United Kingdom
    ire: 0.92, // Ireland
    aus: 1.55, // Australia
    ca: 1.27, // Canada
    ger: 0.93, // Germany
    uae: 3.67, // United Arab Emirates Dirham
    qatar: 3.64, // Qatari Riyal
    malaysia: 4.1, // Malaysian Ringgit

    other: 1, // Default for other countries

  };
  const curancyname = {
    pk: 'PKR',
    us: 'USD', // United States
    uk: 'GBP', // United Kingdom
    ire: 'EUR', // Ireland
    aus: 'AUD', // Australia
    ca: 'CAD', // Canada
    ger: 'EUR', // Germany
    uae: 'AED', // United Arab Emirates Dirham
    qatar: 'QAR', // Qatari Riyal
    malaysia: 'MYR', // Malaysian Ringgit
    other: 'USD' // Default for other countries
  };
  const [bgconnect, setBgconnect] = useState({ backgroundColor: 'gray' });
  const [bgconnect2, setBgconnect2] = useState({ backgroundColor: 'gray' });
  const [bgconnect3, setBgconnect3] = useState({ backgroundColor: 'gray' });

  const [data, setData] = useState([])
  const [price1, setPrice1] = useState();
  const [price2, setPrice2] = useState();
  const [price3, setPrice3] = useState();
  const [price4, setPrice4] = useState();
  const [connection1, setConnection1] = useState([])
  const [connection2, setConnection2] = useState([])
  const [connection3, setConnection3] = useState([])
  // const [country, setCountry] = useState(localStorage.getItem('country') || 'us'); // Default to 'us'
  const [exchangeRate, setExchangeRate] = useState(exchangeRates[Props.selectedCountry]);
  const [symbolt, setSymbolt] = useState(curancyname[Props.selectedCountry]);


  const [selectedOption, setSelectedOption] = useState('connection1');
  const navi = useNavigate();

  const handelbuy = (price) => {


    navi('/buynow', { state: { id: price + symbolt } });

  };

  const adminauth2 = () => {
    axios.get(`${url}/getcountries`)
      .then(res => {
        console.log(res)
        setData(res.data)

      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    adminauth2()
  }, [])

  useEffect(() => {

    const countryObj = data.find(item => item.country === Props.selectedCountry);
    if (countryObj) {


      setConnection1(countryObj.connection1);
      setConnection2(countryObj.connection2);
      setConnection3(countryObj.connection3);
      setExchangeRate(1);
      setSymbolt(curancyname[Props.selectedCountry]);
      setSelectedOption('connection1'); // Set the default selected option

      console.log(countryObj)
    }

  }, [Props.selectedCountry, data]);


  useEffect(() => {
    if (Props.selectedCountry === 'malaysia' || Props.selectedCountry === 'qatar' || Props.selectedCountry === 'uae' || Props.selectedCountry === 'pk') {
      if (selectedOption === 'connection1') {
        setBgconnect2({ backgroundColor: 'gray' });
        setBgconnect3({ backgroundColor: 'gray' });
        setBgconnect({ backgroundColor: '#00b2c8' });

        setPrice1(connection1[0]);
        setPrice2(connection1[1]);
        setPrice3(connection1[2]);
        setPrice4(connection1[3]);
      } else if (selectedOption === 'connection2') {
        setBgconnect2({ backgroundColor: '#00b2c8' });
        setBgconnect({ backgroundColor: 'gray' });
        setBgconnect3({ backgroundColor: 'gray' });
        setPrice1(connection2[0]);
        setPrice2(connection2[1]);
        setPrice3(connection2[2]);
        setPrice4(connection2[3]);
      } else if (selectedOption === 'connection3') {
        setBgconnect3({ backgroundColor: '#00b2c8' });
        setBgconnect({ backgroundColor: 'gray' });
        setBgconnect2({ backgroundColor: 'gray' });
        setPrice1(connection3[0]);
        setPrice2(connection3[1]);
        setPrice3(connection3[2]);
        setPrice4(connection3[3]);
      } else {
        window.location.reload();
      }

    } else {

      if (selectedOption === 'connection1') {
        setBgconnect2({ backgroundColor: 'gray' });
        setBgconnect3({ backgroundColor: 'gray' });
        setBgconnect({ backgroundColor: '#00b2c8' });

        setPrice1((connection1[0] * exchangeRate).toFixed(0));
        setPrice2((connection1[1] * exchangeRate).toFixed(0));
        setPrice3((connection1[2] * exchangeRate).toFixed(0));
        setPrice4((connection1[3] * exchangeRate).toFixed(0));
      } else if (selectedOption === 'connection2') {
        setBgconnect2({ backgroundColor: '#00b2c8' });
        setBgconnect({ backgroundColor: 'gray' });
        setBgconnect3({ backgroundColor: 'gray' });
        setPrice1((connection2[0] * exchangeRate).toFixed(0));
        setPrice2((connection2[1] * exchangeRate).toFixed(0));
        setPrice3((connection2[2] * exchangeRate).toFixed(0));
        setPrice4((connection2[3] * exchangeRate).toFixed(0));
      } else if (selectedOption === 'connection3') {
        setBgconnect3({ backgroundColor: '#00b2c8' });
        setBgconnect({ backgroundColor: 'gray' });
        setBgconnect2({ backgroundColor: 'gray' });
        setPrice1((connection3[0] * exchangeRate).toFixed(0));
        setPrice2((connection3[1] * exchangeRate).toFixed(0));
        setPrice3((connection3[2] * exchangeRate).toFixed(0));
        setPrice4((connection3[3] * exchangeRate).toFixed(0));
      } else {
        window.location.reload();
      }
    }

  }, [selectedOption, Props.selectedCountry, connection1, connection2, connection3, exchangeRate]);

  useEffect(() => {
    if (connection1.length > 0) {
      setSelectedOption('connection1');
    }
  }, [connection1]);
  const [features, setFeatures] = useState(['High-Quality Streaming', 'No Buffering', 'Regular Updates', ' Multi-Device Compatibility', '24/7 Customer Support', ' 7 Days Money Back Guarantee', ' +54,000 TV Channels, Movies & Series', ' All Devices are Supported'])

  return (
    <div className='w-full max-h-full min-h-auto h-auto mt-5 py-10 bg-white'>

      <div className='m-5'>
        <h1 className='text-2xl lg:text-4xl 2xl:text-8xl text-center font-bold text-[rgb(13,12,67)]'>
          IPTV SUBSCRIPTION PLANS
        </h1>
      </div>
      <div className='mb-3 w-full h-auto gap-2 lg:h-[60px] md:h-[60px] flex lg:flex-row md:flex-row flex-col items-center justify-center px-5'>
        <div className='flex flex-grow lg:flex-grow-0 md:flex-grow-0 justify-center'>
          <div
            style={bgconnect}

            onClick={() => setSelectedOption('connection1')}
            className="mx-4 px-4 py-3 w-full lg:w-auto md:w-auto flex items-center gap-2 justify-center bg-[#00b2c8] cursor-pointer hover:bg-[#228d9b] text-white rounded-full shadow-md whitespace-nowrap"
          >
            1 connection
          </div>
          <div
            style={bgconnect2}
            onClick={() => setSelectedOption('connection2')}
            className="mx-4 px-4 py-3 w-full lg:w-auto md:w-auto flex items-center gap-2 justify-center bg-[#00b2c8] cursor-pointer hover:bg-[#228d9b] text-white rounded-full shadow-md whitespace-nowrap"
          >
            2 connections
          </div>
        </div>

        <div
          style={bgconnect3}
          onClick={() => setSelectedOption('connection3')}
          className="mx-4 px-4 py-3 w-full lg:w-auto md:w-auto flex items-center gap-2 justify-center bg-[#00b2c8] cursor-pointer hover:bg-[#228d9b] text-white rounded-full shadow-md whitespace-nowrap"
        >
          3 connections
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2 w-[95%] mx-auto'>
        <PlanCard
          price={price1}
          symbol={symbolt}
          title="1 Month"
          features={features}
          originalPrice={null}
          onBuy={() => handelbuy(price1)}
        />
        <PlanCard
          price={price2}
          features={features}

          symbol={symbolt}

          title="3 Months"
          originalPrice={null}
          onBuy={() => handelbuy(price2)}
        />
        <PlanCard
          price={price3}
          symbol={symbolt}
          features={features}


          title="6 Months"
          originalPrice={(Number(price3) + Number(price1)).toFixed(2)}
          onBuy={() => handelbuy(price3)}
        />
        <PlanCard
          price={price4}
          symbol={symbolt}
          features={features}


          title="1 Year"
          originalPrice={(Number(price4) + Number(price2)).toFixed(2)}
          onBuy={() => handelbuy(price4)}
        />
      </div>
    </div>
  );
};

const PlanCard = ({ price, title, originalPrice, onBuy, symbol, features }) => (
  <div className='shadow-2xl shadow-black group bg-[#00b2c8] flex flex-col gap-3 rounded-xl px-6 py-5 text-white'>
    <p className='text-2xl font-bold underline'>{title} </p>

    <h1 className='text-5xl font-bold'>
      {price} <span className='text-3xl'>{symbol}</span> {originalPrice && <span className='line-through text-2xl font-normal'>{originalPrice}{symbol}</span>}
    </h1>
    {features.map((feature) => (


      <PlanFeatures feature={feature} />
    ))
    }
    <button onClick={onBuy} className='bg-white mt-2 group-hover:bg-[#00b2c8] text-[#00b2c8] flex justify-around group-hover:text-white transition-all duration-700 text-lg ease-in-out border-2 border-white p-3 font-semibold'>
      Buy Now
      <img src={drop} className='rotate-[270deg] p-[2px] rounded-full bg-[#00b2c8]' alt="" />
    </button>
  </div>
);

const PlanFeatures = (Props) => (

  <>


    <p className='flex gap-3 font-semibold items-center'>
      <img src={chk} width={28} alt="" />
      {Props.feature}

    </p>






  </>
);

export default Plans;
