import React, { Component } from 'react';
import dataExcursiones from '../Excursion';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { exc: dataExcursiones };

  }

  render() {
    const { exc } = this.state;
    return (
      <section className='flex flex-row items-center pt-8 justify-between p-4'>
        {exc.map((s, index) => (
          <div className='max-w-sm rounded overflow-hidden shadow-xl p-2' tabIndex={index} key={index}>
            <img className='object-contain' src={s.img} alt={s.alt} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{s.title}</div>
              <p className='text-gray-700 text-base'>
                {s.description}
              </p>
            </div>
            <div className='text-center'>
              <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Reservar!
              </button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Cards;

