import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import dataExcursiones from '../../database/Excursion';
import { Section, Title, EventList, Container, Link } from './styles';

class Excursiones extends Component {
  constructor(props) {
    super(props);
    this.state = { exc: dataExcursiones };
  }

  render() {
    const { exc } = this.state;
    return (
      <Section>
        <Title> Descubrí todas nuestras excursiones </Title>
        <EventList>
          <Container>
            {exc.map((images) => <Cards key={images.id} {...images} />)}
          </Container>
        </EventList>
        <div className='px-4 py-4 text-center '>
        <Link to='/'>Ver todas las excursiones</Link>

        </div>
      </Section>
    );
  }
}

export default Excursiones;

// asi estaba original
{ /* <section className='w-screen h-screen p-6'>
      <h1 className='text-2xl text-center text-gray-700'> Descubrí todas nuestras excursiones </h1>
      <Cards />
      <div className='text-center'>
        <button type='button' className='px-4 py-2 font-bold text-blue-700 bg-transparent border-2 border-blue-700 rounded-full hover:bg-blue-500 hover:border-blue-500'>Ver todas las Excursiones</button>
      </div>
    </section> */ }
