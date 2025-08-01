import React, { useState } from 'react';
import drop from '../assets/images/drop.png';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What is the maximum number of devices I may use at once with a subscription?",
      answer: "One device can stream content at once with a single subscription. However, if you want to utilize many devices at once, you can buy more connections."
    },
    {
      question: "What Kinds of Devices Work with Supersubofficials IPTV Provider?",
      answer: "Supersubofficials IPTV Provider works on a variety of devices, including smartphones, tablets, smart TVs, computers, and set-top boxes."
    },
    {
      question: "Do You Cover Pay-Per-View (PPV) And Live Sports Events?",
      answer: "Yes, we offer PPV events and live sports as part of our service."
    },
    {
      question: "Will Your Personal Information Remain Private?",
      answer: "Absolutely, we prioritize your privacy and never share your personal information with third parties."
    },
    {
      question: "Does Supersubofficials IPTV Provider Require a VPN to Operate?",
      answer: "No, a VPN is not required to use Supersubofficials IPTV Provider, but you can use one for added security if you prefer."
    },
    {
      question: "How Can I Begin Using Supersubofficials IPTV Provider?",
      answer: "Simply purchase a subscription, download our app, and start streaming. No technical knowledge is required!"
    },
    {
      question: "Is There A Trial Period Available?",
      answer: "Yes, we offer a trial period to allow you to test the service before committing to a full subscription."
    },
    {
      question: "How many channels and films is Supersubofficials IPTV Provider able to provide?",
      answer: "Supersubofficials IPTV Provider provides access to thousands of live TV channels and a large library of films and series."
    },
    {
      question: "Supersubofficials IPTV Provider Is Different From Other Services In What Ways?",
      answer: "We provide more content at a better value, with superior customer service and fewer interruptions."
    },
    {
      question: "How Frequently Do You Update Your Collection Of Films And Series?",
      answer: "Our collection is updated weekly to ensure you have access to the latest content."
    },
    {
      question: "Can My Channel List Or Package Be Customized?",
      answer: "Yes, you can customize your package to include the channels and features that suit your preferences."
    },
    {
      question: "Are Parental controls available?",
      answer: "Yes, we offer parental control settings to restrict content for younger viewers."
    },
    {
      question: "What About Refunds?",
      answer: "Absolutely. Customer satisfaction is a top priority at Iptv Supersubofficials. You have the option to ask for a refund if you discover that our service is unsatisfactory or inadequate for your needs. We provide a 7-day money-back guarantee to make sure you’re happy with your choice of us. If you have any problem with the quality or freeze time, just let us know."
    },
    {
      question: "Do I Need Fast Internet for IPTV?",
      answer: "Yes, a stable internet connection with at least 10 Mbps speed is recommended for smooth streaming on IPTV."
    },
    {
      question: "Can I watch international channels with Supersubofficials IPTV Provider?",
      answer: "Yes, Supersubofficials IPTV Provider provides access to thousands of channels from across the globe, including international sports, movies, and news."
    }
  ];
 
  return (
    <div className="faq-container max-w-4xl mx-auto p-4">
      {/* Meta Tags for SEO */}


      {/* FAQ Page Content */}
      <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions (FAQ)</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-4">
            <h2
              className="cursor-pointer text-lg flex justify-between font-semibold text-blue-600 hover:text-blue-800"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <img src={drop} alt="" className='hidden lg:block md:block rounded-lg bg-[rgb(13,12,67)]' />
            </h2>
            {openQuestion === index && (
              <p className="text-lg mt-2 text-gray-700">{faq.answer}</p>
            )}
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
