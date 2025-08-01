import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FAQs from '../components/FAQ';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
const FAQ = () => {




    return (
        <>
            <Helmet>
                <title>Frequently Asked Questions - Supersubofficials IPTV Service</title>
                <meta name="description" content="Get answers to all your questions about Supersubofficials IPTV service, including device compatibility, VPN requirements, and more." />
                <meta name="keywords" content="Supersubofficials IPTV FAQ, IPTV subscription, device compatibility, VPN IPTV, pay-per-view, international channels, IPTV refund policy" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Navbar />
            <FAQs />
            <Footer />
        </>

    );
};

export default FAQ;
