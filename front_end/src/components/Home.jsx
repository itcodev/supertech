import React, { useState, useEffect } from 'react';
import Disclaimer from './Disclaimer';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    // This effect runs only once when the component mounts
    setShowDisclaimer(true); // Hide the disclaimer after initial load
  }, []);

  return (
    <>
      <Navbar />
      {showDisclaimer && <Disclaimer />}
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
