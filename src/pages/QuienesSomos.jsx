import React from 'react';
import Layout from '../components/Layout/Layout';
import { Title, SecTitle, Info } from '../styles/globalStyles';
import Logo  from '../static/Medano-color.png';


const QuienesSomos = () => {
  return (
   <Layout>

     <Title>Sobre Nosotros</Title>
     <Info>Somos una empresa de espíritu jóven, integrada por tres amigos y profesionales del turismo, en aprendizaje constante, apasionados y comprometidos en la innovación del sector turístico de manera responsable, consciente y sustentable.</Info>
       <SecTitle>Visión:</SecTitle>
       <Info>Creemos necesarios los cambios, buscamos ver más allá del producto ofrecido, pudiendo distinguirnos en la exclusividad de cada pasajero haciendo realidad una experiencia inolvidable y acompañándolos en su aventura llamada viaje.</Info>
      <Info>Somos como un Médano, estamos en constante movimiento, retroalimentándonos de la naturaleza para así poder avanzar. Por ello es que es indispensable para nosotros interpretar los tiempos y distancias de cada lugar para poder generar una experiencia en conexión con el medio ambiente escapando del impacto y poder transmitirles esto a quienes nos elijan.</Info>
       <SecTitle>Misión:</SecTitle>
       <Info>Apuntamos a un turismo profesional, al buen manejo de los servicios, a la satisfacción no solo de los visitantes, sino también al entorno, pudiendo colaborar con las economías locales y respetando el ambiente en el cual vivimos</Info>
       
       <div className='container w-full mx-auto'>
         <img className='mx-auto' height='50' width='400' src={Logo} alt='Logo' />
        </div>
   </Layout>

  );
};

export default QuienesSomos;
