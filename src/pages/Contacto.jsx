import React from 'react';
import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import { Section, Title, SecTitle } from '../styles/globalStyles';

const Contacto = () => {
  return (
    <Layout>
      <Section>
        <div className='text-center'>
          <Title>Deseas contactarte con nosotros?</Title>
          <SecTitle>Completá el formulario y nos comunicaremos!</SecTitle>
            <Form />
        </div>    
      </Section>
    </Layout>
  )
}

export default Contacto
