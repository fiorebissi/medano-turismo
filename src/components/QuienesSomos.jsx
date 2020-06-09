import React from 'react';
import Foto from '../assets/static/IMG-20190617-WA0049.jpg';

const style = {
  height: '400px',
  with: '300px',
};

const QuienesSomos = () => {
  return (
    <section id='QuienesSomos' className='grid grid-cols-2 flex justify-center w-screen'>
      <div className='px-4 py-3'>
        <img style={style} className='object-contain' src={Foto} alt='Foto' />
      </div>
      <div>
        <h1 className='text-3xl p-3'>¿Quiénes somos?</h1>
        <p className='text-justify p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat repellendus quos quis voluptatum eligendi exerc</p>
        <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, esse, dolore molestias minus laboriosam a illo tempora hic neque aut rem laborum repellendus quod deserunt veritatis </p>
        <button type='button' className='py-2 px-4 bg-transparent hover:bg-blue-500 border-blue-700 border-2 hover:border-blue-500 rounded-full'>Leer más</button>
      </div>

    </section>

  );
};

export default QuienesSomos;
