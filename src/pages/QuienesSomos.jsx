import React from 'react';
import Layout from '../components/Layout/Layout';


const QuienesSomos = () => {
  return (
   <Layout>
     <div className='pt-4 text-center'>
       <h1 className='text-5xl'>Sobre Nosotros</h1>
     </div>
     <p>Somos una empresa de espíritu jóven, integrada por tres amigos y profesionales del turismo, en aprendizaje constante, apasionados y comprometidos en la innovación del sector turístico de manera responsable, consciente y sustentable.</p>
     <div className='pt-3 text-center'>
       <h1>Visión:</h1>
       <p>Creemos necesarios los cambios, buscamos ver más allá del producto ofrecido, pudiendo distinguirnos en la exclusividad de cada pasajero haciendo realidad una experiencia inolvidable y acompañándolos en su aventura llamada viaje.</p>
      <p>Somos como un Médano, estamos en constante movimiento, retroalimentándonos de la naturaleza para así poder avanzar. Por ello es que es indispensable para nosotros interpretar los tiempos y distancias de cada lugar para poder generar una experiencia en conexión con el medio ambiente escapando del impacto y poder transmitirles esto a quienes nos elijan.</p>
     </div>
     <div className='pt-3 text-center'>
       <h1>Misión:</h1>
       <p>Apuntamos a un turismo profesional, al buen manejo de los servicios, a la satisfacción no solo de los visitantes, sino también al entorno, pudiendo colaborar con las economías locales y respetando el ambiente en el cual vivimos</p>
     </div>
   </Layout>

  );
};

export default QuienesSomos;
