import React from 'react';
import Navbar from '../components/common/Navbar';
import SoloHome from '../components/allprojects/SoloHome';
import SoloInfo from '../components/allprojects/SoloInfo';
import Footer from '../components/common/Footer';
import BlankSolo from '../components/allprojects/BlankSolo';
import SoloFeatures from '../components/allprojects/SoloFeatures';
import NextProject from '../components/allprojects/NextProject';


const Projectsolo = () => {
  const project = {
    name: "PROJECT NAME",
    location: "LOCATION",
    image: "https://via.placeholder.com/1200x800?text=Project+Background"
  };

  return (
    <div className='relative'>
      <Navbar />
      <SoloHome />
      <SoloInfo />
      <BlankSolo />
      <SoloFeatures />
       <NextProject />
      <Footer />
    </div>
  );
};

export default Projectsolo;
