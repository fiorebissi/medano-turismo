import React from 'react';
import Hero from '../components/Hero/Hero';
import Excursiones from '../components/Excursiones/Excursiones';
import Contacto from '../components/Contacto/Contacto';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout className='w-screen h-screen'>
      <Hero />
      <section className='w-auto h-auto' id='Excursiones'>
        <Excursiones />
      </section>
      <Contacto />
    </Layout>
  );
};

export default Home;
