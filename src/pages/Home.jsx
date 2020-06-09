import React from 'react';
import Excursiones from '../components/Excursiones';
import PtoMadryn from '../assets/static/Puerto_Madryn.jpg';
import QuienesSomos from '../components/QuienesSomos';
import Footer from '../components/Footer';

const styles = {
  backgroundImage: `url(${PtoMadryn})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};

const Home = () => {
  return (
    <main className='w-screen h-screen'>
      <section className='w-screen bg-auto bg-center flex items-center justify-center pb-8' style={styles} id='Carousel'>
        <h1 className='uppercase text-2xl text-gray-700 opacity-50 p-2'>Puerto Madryn</h1>
      </section>
      <section className='w-auto h-auto' id='Excursiones'>
        <Excursiones />
      </section>
      <section id='QuienesSomos'>
        <QuienesSomos />
      </section>
      <Footer />
    </main>

  );
};

export default Home;
