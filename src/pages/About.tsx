import React from 'react';
import HeroAbout from '@/components/About/HeroAbout';
import MissionSection from '@/components/About/MissionSection';
import SustainabilitySection from '@/components/About/SustainabilitySection';
import TeamSection from '@/components/About/TeamSection';


const About: React.FC = () =>
{
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <MissionSection />
      <SustainabilitySection />
      <TeamSection />
    </div>
  );
};

export default About;