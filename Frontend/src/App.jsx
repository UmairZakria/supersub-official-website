import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buynow from './pages/buynow';
import Plans from './pages/Plans';
import About from './pages/About';
import Signup from './pages/Signup';
import Contactus from './pages/contactus';
import Login from './pages/Login';
import Trail from './pages/trail';
import FAQ from './pages/FAQ';
import { Homechk, ProtectedRoute, Adminchk, Admincash } from './pages/Protectedroutes';
import TopLoadingBar from './components/TopLoadingBar';
// import Lenis from '@studio-freight/lenis';
import Lenis from 'lenis'
// import Lenis from

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // speed of smooth scroll (default 1.2)
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: scroll to top on route change
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <TopLoadingBar />
        <Routes>
          <Route path="/" element={<Homechk />} />
          <Route path="/About" element={<About />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Faqs" element={<FAQ />} />
          <Route path="/Trail" element={<Trail />} />
          <Route path="/adminpanel" element={<Adminchk />} />
          <Route path="/admincontroll" element={<Admincash />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
