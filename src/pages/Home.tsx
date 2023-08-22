import React from 'react';
import HeroSection from '../components/HeroSection';

import HowItWork from '../components/HowItWork';
// import FeaturedSection from '../components/FeaturedSection';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/*<FeaturedSection />*/}
      <HowItWork />
    </div>
  );
};

export default HomePage;
