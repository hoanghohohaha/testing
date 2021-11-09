import React from 'react';
import withLayout from '../../layout/withLayout';
import Featured from '../../widgets/HomePage/Featured';
import HeroSection from '../../widgets/HomePage/Hero';
import MissionSection from '../../widgets/HomePage/Mission';

function HomePage() {
  return (
    <div>
      {/* <HeroSection /> */}
      <MissionSection />
      <Featured />
    </div>
  )
}

export default withLayout(HomePage);