import React from 'react';
import Hero from '../components/Hero';
import Excursiones from '../components/Excursiones';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
// import QuienesSomos from '../components/QuienesSomos';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className='w-screen h-screen'>
      <Hero />
      <section className='w-auto h-auto' id='Excursiones'>
        <Excursiones />
      </section>
      <Contacto />
      <Footer />
      {/* <section id='QuienesSomos'>
        <QuienesSomos />
      </section>
      <Footer /> */}
    </main>

  );
};

export default Home;
