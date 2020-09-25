import React, { Component } from 'react';
import Cards from '../components/Cards/Cards';
import dataExcursiones from '../database/Excursion';
import { Section, EventList, Container } from '../styles/globalStyles';
import Layout from '../components/Layout/Layout';

class Excursiones extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      exc: dataExcursiones,
      isPage: true
    };
  }
  render() {
    const { exc, isPage } = this.state;
    
    return (
      <Layout>
        <Section>
          <EventList>
            <Container>
              {exc.map((images) => <Cards key={images.id} {...images} isPage={isPage} />)}
            </Container>
          </EventList>
        </Section>
      </Layout>
    );
  }
}

export default Excursiones;