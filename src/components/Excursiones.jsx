import React, { Component } from 'react';
import Cards from './Cards';
import dataExcursiones from '../Excursion';
import '../assets/styles/home.css';

class Excursiones extends Component {
  constructor(props) {
    super(props);
    this.state = { exc: dataExcursiones };
  }

  render() {
    const { exc } = this.state;
    return (
      <section className='excursiones'>
        <h1 className='text-2xl text-center text-gray-700'> Descubrí todas nuestras excursiones </h1>
        <section className='event-list'>
          <div className='cont'>
            {exc.map((images) => <Cards key={images.id} {...images} />)}
          </div>
        </section>
      </section>
    );
  }
}

export default Excursiones;

// asi estaba original
{ /* <section className='w-screen h-screen p-6'>
      <h1 className='text-2xl text-center text-gray-700'> Descubrí todas nuestras excursiones </h1>
      <Cards />
      <div className='text-center'>
        <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-bold py-2 px-4 rounded-full border-blue-700 border-2 hover:border-blue-500'>Ver todas las Excursiones</button>
      </div>
    </section> */ }
