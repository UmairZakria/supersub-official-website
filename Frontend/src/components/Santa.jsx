import React from 'react'
import sant from '../../public/santa.gif'
import Marquee from 'react-fast-marquee';

const Santa = () => {
  return (
    <div className='w-full fixed bottom-0  left-0 z-[100]'>
      <Marquee speed={60} direction='right' pauseOnHover={true} className="text-white h-full py-4 text-md">

        <img src={sant} alt="" className='h-[100px]'  />
      </Marquee>

    </div>

  )
}

export default Santa
