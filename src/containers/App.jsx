import React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/Home';
import Contacto from '../pages/Contacto';
import Excursiones from '../pages/Excursiones';
import QuienesSomos from '../pages/QuienesSomos';

const App = () => {
  return (

   <Router>
     <Home path='/' />
     <Contacto path='/contacto' />
     <Excursiones path='/excursiones'/>
     <QuienesSomos path='/quienesSomos' />
   </Router>

  );
};

export default App;