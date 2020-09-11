import React from 'react';
import HeroImage from '../../static/medano1.jpg';

const Hero = () => {

  return (
    <section className='w-full h-10'>
        <img className='object-cover w-full h-64' src={HeroImage} alt='El Medano Turismo' />
    </section>
  );
};

export default Hero;
