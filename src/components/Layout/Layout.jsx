import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../styles/global.css';

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    { children }
    <Footer/>
    </>
    
  )
}

export default Layout;
