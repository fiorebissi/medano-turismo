import React from 'react';
import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import { Section } from '../styles/globalStyles';

const Contacto = () => {
  return (
    <Layout>
      <Section>
        <div className='text-center'>
          <h1 className='text-4xl'>Deseas contactarte con nosotros?</h1>
          <h3 className='text-2xl'>Llena el formulario y nos comunicaremos!</h3>
          <div className='container mx-auto'>
            <Form />
          </div>
        </div>    
      </Section>
    </Layout>
  )
}

export default Contacto
