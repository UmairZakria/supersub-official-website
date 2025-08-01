import React from 'react';
import Marquee from 'react-fast-marquee';
// import fdsf from '../assets/images'
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'
import c5 from '../assets/images/c5.jpg'
import c6 from '../assets/images/c6.webp'
import c7 from '../assets/images/c7.jpg'
import c8 from '../assets/images/c8.png'

import g1 from '../assets/images/g1.avif'
import g2 from '../assets/images/g2.jpeg'
import g3 from '../assets/images/g3.webp'
import g4 from '../assets/images/g4.webp'
import g5 from '../assets/images/g5.jpg'
import g6 from '../assets/images/g6.jpg'


const Items = [
  '4k HD Resolution',
  'Movies & Series',
  'No Buffering',
  'No Freezing',
  'Live Sports Coverage',
  'Multi-Device Compatibility',
  '24/7 Customer Support',
  'On-Demand Content',
  'Free Trial',
  'Iptv Server',
  'Iptv Provider',
  'SuperSubOfficials IPTV Server',
  'SuperSubOfficials IPTV Provider',
  'Best IPTV Server SuperSubOfficials',

  'SuperSub IPTV Streaming Service',

];
const Images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8
];



const reviews = [

  {
    name: "Camila J.",
    text: "I was skeptical at first, but Supersubofficials really impressed me! The IPTV service is smooth, with no buffering issues, and the channel lineup is amazing. Customer service is top-notch too!",
    rating: 5
  },
  {
    name: "Audrey M.",
    text: "Supersubofficials offers fantastic value for money. The picture quality is great, and I love how easy it is to navigate through the channels. Highly recommend it for anyone looking for a reliable IPTV service!",
    rating: 5
  },
  {
    name: "Isabel K.",
    text: "The best IPTV service I’ve tried so far. Supersubofficials has a massive library of channels and movies, and it works perfectly on all my devices. Their customer support is always responsive and helpful.",
    rating: 4
  },
  {
    name: "David L.",
    text: "I’ve tried other services, but Supersubofficials stands out. The service is consistent, and I never miss my favorite sports events anymore. It's been a game changer!",
    rating: 5
  },
  {
    name: "Amir R.",
    text: "Supersubofficials has been my go-to IPTV provider for over a year now. The pricing is fair, and the streaming quality is crystal clear. I highly recommend it for families!",
    rating: 4
  },
  {
    name: "Emma T.",
    text: "I love Supersubofficials! The variety of channels, movies, and shows is endless. Whether it’s live TV or on-demand content, I always find what I’m looking for.",
    rating: 5
  }


];

const ReviewSection = () => {
  // Function to generate star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((star, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>⭐</span>
    ));
  };

  return (
    <div className="    p-6">
      <h1 className="text-5xl font-bold text-center mb-8 ">Customer Reviews</h1>

      <div className='grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3'>

        {reviews.map((review, index) => (
          <div key={index} className="review-item p-4  my-4   border-gray-200 text-center">
            <p className="text-lg  italic text-gray-700">"{review.text}"</p>
            <div className="flex justify-center items-center mt-4">
              {renderStars(review.rating)}
            </div>
            <p className="text-lg font-semibold mt-2">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



const Rev = () => {
  return (
    <div className="h-auto  py-3 mb-2  bg-gray-100 w-full  ">
      <Marquee speed={60} pauseOnHover={true} className="text-white h-full py-4 text-md">



        {Items.map((item, index) => (
          <span
            key={index}
            className="mx-4 px-4 py-3 bg-[#00b2c8] cursor-pointer hover:bg-[#228d9b] text-white rounded-full shadow-md whitespace-nowrap"
          >
            {item}
          </span>
        ))}

      </Marquee>


    </div>
  );
};

const Revimage = () => {
  return (
    <div className="h-auto  py-1 my-9  bg-white w-full  ">
      <h2 className='w-full text-center text-4xl font-semibold  text-black my-2 '>Unlimited Entertainment to Watch</h2>
      <Marquee speed={30} direction='right' className="text-white h-full py-4 mt-8 text-md">



        {Images.map((item, index) => (
          <div className='bg-transparent rounded-xl w-[180px]  mx-5  flex justify-center items-center h-[160px]'>

            <img
              key={index}
              src={item}
              className="mx-4 w-full hover:shadow-2xl hover:shadow-black cursor-pointer h-full p-1 object-fit   "


            />
          </div>
        ))}

      </Marquee>


    </div>
  );
};

import { useState, useEffect } from 'react';
const Slideshow = () => {
  const images = [
    g1,
    g2,
    g3,
    g4,
    g5,
    "https://cdn.pixabay.com/photo/2024/12/25/09/19/sylvester-9289766_960_720.jpg",
    g6,
    "https://www.baltana.com/files/wallpapers-26/KGF-Chapter-2-Yash-HD-Desktop-Wallpaper-72159.jpg",
    "https://cdn.pixabay.com/photo/2024/09/25/07/48/man-9073116_1280.png",
    "https://wallpapercave.com/wp/wp4092812.jpg",
    "https://images.alphacoders.com/107/1072652.jpg",
    "https://i.ytimg.com/vi/n39Ey7Yrv_k/maxresdefault.jpg",
    "https://images5.alphacoders.com/119/thumb-1920-1195470.jpg",
    "http://www.pixelstalk.net/wp-content/uploads/2016/04/Kung-Fu-Panda-HD-Wallpapers-Movie.jpg",
    "https://wallpapercave.com/wp/wp3723778.jpg",
    "https://cdn.pixabay.com/photo/2016/12/23/11/25/font-1927171_960_720.jpg",
    "https://images4.alphacoders.com/113/thumb-1920-1134176.jpg",
    "https://cdn.pixabay.com/photo/2023/12/23/16/09/ai-generated-8465863_960_720.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const nextSlide = () => {
    setOpacity(0); // start fade out

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setOpacity(1); // fade in new image
    }, 600); // duration matches CSS transition
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[90vh] text-center w-full my-24 relative overflow-hidden">
      <h1 className="text-4xl font-semibold my-2">Non Stop Entertainment</h1>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      />
    </div>
  );
}

export { Rev, Revimage, ReviewSection, Slideshow };
