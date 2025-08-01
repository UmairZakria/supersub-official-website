import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import bg from '../assets/images/bg.webp'
import { Link } from 'react-router-dom'
import Whatsapp from '../components/Whatsapp'
import { Helmet } from 'react-helmet-async'

const About = () => {

  return (
    <>
      <Helmet>
        <title>About Us - SuperSub Officials</title>
        <meta name="description" content="Learn about SuperSubofficials, your trusted IPTV service provider offering 16,000+ channels, 4K HD streaming, and no buffering. Over 5 years of experience in providing seamless entertainment." />
        <meta name="keywords" content="about supersubofficials, supersub, supersub officials, IPTV service, IPTV provider, 4K streaming, live channels, IPTV for sports" />
        <meta name="robots" content="index, nofollow" />
        <script type="application/ld+json">

          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Supersubofficials",
            "description": "Learn about Supersubofficials, your trusted IPTV service provider offering 16,000+ channels, 4K HD streaming, and no buffering. Over 5 years of experience in providing seamless entertainment.",
            "url": "https://supersubofficials.com/About"
          })}
        </script>
      </Helmet>
      <Navbar />

      <div className='my-5'>
        {/* About  */}


        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus ab aut dolor obcaecati velit mollitia omnis recusandae in iste facere dolorum exercitationem voluptate, iusto praesentium, neque veniam consectetur. Nisi provident illum voluptate tenetur consequuntur officiis? Maxime, nulla. Dignissimos aut iusto ex atque vitae repudiandae laborum numquam tempora asperiores mollitia quibusdam sunt earum impedit omnis maxime placeat, saepe enim, error fugiat explicabo consectetur architecto iste. Quidem, facilis? Officiis expedita natus porro quasi rerum voluptatum, consequuntur nam, laudantium corrupti quis sed repellendus quae sunt dignissimos dolore harum amet, mollitia cum nihil. A dolorum deleniti et dicta quod nostrum aliquam, vel non, amet necessitatibus odit numquam inventore fuga impedit, voluptatem delectus totam itaque veritatis. Modi a sapiente soluta corrupti, atque eum, quas reprehenderit odit aperiam aliquid, minus culpa tenetur sequi itaque distinctio fuga alias nesciunt similique incidunt? Aspernatur veniam minima perspiciatis aperiam commodi totam impedit, aliquam, voluptatem voluptate reprehenderit facilis quae nobis rerum dolore. Nulla quam vel sunt magnam ipsum fugit id et architecto maiores iusto? Odit error voluptatibus ea distinctio dolores iste unde dolor? Nihil saepe, aliquam reprehenderit optio facere qui? Dignissimos ab qui molestias facere expedita eligendi. Repudiandae vero soluta, eius eum optio beatae laborum id vel nemo natus minima consequuntur placeat, nihil dolor temporibus eaque deserunt cupiditate reprehenderit nisi veritatis? Aliquid, totam obcaecati voluptatum modi minus eveniet tenetur nostrum, laboriosam iste ipsa, maxime natus pariatur. Amet eum id ab adipisci perspiciatis qui, magni at odio consectetur aliquid laudantium, commodi quibusdam? Iure ea illum, veniam labore voluptate laudantium voluptatem officia a nam possimus eius nemo numquam optio animi quidem asperiores facilis corporis? Totam, eligendi vero tempore aspernatur sequi culpa voluptas quibusdam illum quaerat nesciunt. Dolor incidunt fugiat facilis, dicta laborum eos velit ab aliquid, culpa minima tempora delectus voluptas voluptate explicabo praesentium! Ad, animi quaerat ut vel culpa corporis quia, perspiciatis aperiam, cupiditate ab atque aspernatur dolores voluptatem perferendis numquam. Cum temporibus, accusamus debitis, sint iure veniam in cumque amet, illum eum ea maxime quos repudiandae rem error odit earum vel! Perspiciatis, adipisci! */}
        <h1 className='text-center text-5xl py-3 font-bold'>About Us</h1>
        <div className='px-8 ' >
          <h2 className='text-xl font-semibold'> Welcome to SuperSubOfficials,</h2>
          <div >
            <p>
              <img src={bg} alt="" className='object-cover lg:float-right h-[300px]' />
              <span className='font-bold text-lg'>Y</span>our trusted IPTV service provider, delivering exceptional entertainment for over 5 years. We are dedicated to offering a faster, better, and cheaper IPTV solution that gives you access to all your favorite streaming platforms in one spot. Our service provides an unbeatable experience with 16,000+ channels, 4K HD resolution, movies, series, and sports — all without any buffering or freezing.

            </p>
            <br />
            <p>

              At <Link to='/' className='font-semibold underline '>SuperSubOfficials</Link>, we believe that entertainment should be seamless and hassle-free. That’s why we’ve built a robust platform that caters to both casual viewers and serious streamers. Whether you’re looking for IPTV services to catch up on live TV or searching for a free IPTV trial to explore the possibilities, we’ve got you covered.

              Why Choose <Link to='/' className='font-semibold underline '>SuperSubOfficials</Link>
              Extensive Channel List: With over 16,000 channels from around the world, including sports, news, and entertainment, you’ll never miss out on the content you love.
              High-Quality Streaming: We prioritize quality, offering 4K HD resolution so you can enjoy every detail with stunning clarity.
              No Buffering, No Freezing: Our state-of-the-art technology ensures that your viewing experience is smooth, with zero interruptions.
              Affordable Plans: We provide flexible pricing to suit any budget, making premium IPTV services more accessible than ever.
              Our mission is simple: to offer a reliable IPTV solution that surpasses the competition. We understand that you want access to all your favorite channels and streaming services without delays or unnecessary costs. That’s why SuperSubOfficial is committed to bringing you the best IPTV services on the market.

              Join the thousands of satisfied customers who have made <Link to='/' className='font-semibold underline '>SuperSubOfficials</Link> their go-to IPTV provider. Whether you’re looking for a premium IPTV service or exploring a free IPTV option, our platform is designed to offer an unmatched experience at unbeatable prices.

              Start your journey with <Link to='/Plans' className='font-semibold underline '>SuperSubOfficials</Link> today and transform the way you watch TV.
            </p>
          </div>


        </div>
      </div>
      <Whatsapp></Whatsapp>

      <Footer></Footer>
    </>
  )
}

export default About
