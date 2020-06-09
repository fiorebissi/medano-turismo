import React from 'react';
import Cards from './Cards';

const Excursiones = () => {

  return (
    <section className='w-screen h-screen p-6'>
      <h1 className='text-2xl text-center text-gray-700'> Descubrí todas las excursiones que tenemos para vos </h1>
      <Cards />
      <div className='text-center'>
        <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-bold py-2 px-4 rounded-full border-blue-700 border-2 hover:border-blue-500'>Ver todas las Excursiones</button>
      </div>
    </section>

  );
};

export default Excursiones;
