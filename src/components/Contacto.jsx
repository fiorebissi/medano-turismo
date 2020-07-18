import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../assets/styles/home.css';

const Contacto = () => {
  return (
    <section className='contact'>
      <div className='cont'>
        <form action='/' className='form-email'>
          <h3>¿Consultas?</h3>
          <input type='text' placeholder='Dejanos tu email!' id='email' />
          <button type='submit'>Enviar</button>
        </form>
        <div className='social'>
          <div className='social-link'>
            <FaFacebook size='32px' />
          </div>
          <div className='social-link'>
            <FaInstagram size='32px' />

          </div>
        </div>
      </div>

    </section>

  );
};

export default Contacto;
