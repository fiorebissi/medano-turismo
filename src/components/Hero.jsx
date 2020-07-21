import React from 'react';
import HeroImage from '../assets/static/medano1.jpg';
import '../assets/styles/home.css';

const Hero = () => {

  return (
    <section className='hero'>
      <div className='cont'>
        {/* <h1>Puerto Madryn</h1> */}
        <img className='hero-image' src={HeroImage} width='500' height='300' alt='El Medano Turismo' />
      </div>

    </section>
  );
};

export default Hero;
