import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Contact, FormEmail, Container, SocialLink } from './styles';

const Contacto = () => {
  return (
    <Contact>
      <Container>
        <FormEmail>
          <h3>¿Consultas?</h3>
          <input type='text' placeholder='Dejanos tu email!' id='email' />
          <button type='submit'>Enviar</button>
        </FormEmail>
        <div className='social'>
          <SocialLink>
            <a href='https://m.facebook.com/El-M%C3%A9dano-Turismo-104405281269092/' target='_blank'>
            <FaFacebook size='32px' />
            </a>
          </SocialLink>
          <SocialLink>
            <a href='https://instagram.com/elmedanoturismo' target='_blank'>
              <FaInstagram size='32px' />
            </a>
            
          </SocialLink>
        </div>
      </Container>
    </Contact>

  );
};

export default Contacto;
