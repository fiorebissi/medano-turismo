import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Foot, Container, FooterContacto } from './styles';
import '../../styles/home.css';

const Footer = () => {
  return (
    <Foot>
      <Container>
        <FooterContacto>
          <p>Contactanos</p>
          <p>
            <FaEnvelope />
            {' '}
            <a href='mailto:elmedanoturismo@info.com.ar'>elmedanoturismo@info.com.ar</a>
          </p>
          <p>
            <FaPhone />
            <a href='tel:+549297465812'>+54 9 297 465812</a>
          </p>

        </FooterContacto>
        <div>
          <p>
            Designed with
            <span role='img' aria-label='heart'> 💗 </span>
            by
            {' '}
            <a href='mailto:fiorellabissi@hotmail.com'>Fiorella Bissi</a>
          </p>
        </div>
      </Container>

    </Foot>

  );
};

export default Footer;

{ /* <footer className='grid grid-cols-3'>
      <div>
        Lorem ipsum dolor
        <br />
        sit amet consectetur adipisicing elit!
      </div>
      <div>
        Seguinos
        <FaFacebook />
        <FaInstagram />
      </div>
      <div>
        Contactanos
        <FaEnvelope />
        {' '}
        <a href='mailto:elmedanoturismo@info.com.ar'>elmedanoturismo@info.com.ar</a>
        <FaPhone />
        {' '}
        <a href='tel:+549297465812'>+54 9 297 465812</a>
      </div>
      <hr />
      <div className='flex flex-row'>
        <div className='text-sm'>
          <MdCopyright />
          {' '}
          Este sitio es propiedad de El Médano Turismo
        </div>
        <div className='text-xs'>
          Hecho por Fiorella Bissi
          <a href='mailto:fiorellabissi@hotmail.com'>fiorellabissi@hotmail.com</a>
        </div>
      </div>

    </footer> */ }
