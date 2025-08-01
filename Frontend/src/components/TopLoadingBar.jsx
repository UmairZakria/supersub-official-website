// src/components/TopLoadingBar.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // For routing in React apps
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the NProgress styles

const TopLoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); 
    setTimeout(() => {
        NProgress.done(); 
        
    }, 500);

    return () => {
      NProgress.done(); 
    };
  }, [location.pathname]); 

  return null; 
};

export default TopLoadingBar;
