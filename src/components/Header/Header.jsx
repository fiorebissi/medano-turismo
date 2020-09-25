import React, { useState } from 'react';
import Logo from '../../static/Medano-color.png';
import { Navbar, Link, Container, Menu , Div, Image } from './styles';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const SIZE = '24px';
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
    } else {

      menu.classList.add('is-active');
    }
  };

  return (
    <>
    <Div>
      <MdMenu onClick={handleClick} className='burger-button' size={SIZE} />
    </Div>
    <Navbar>
      <Container>
        <figure className='logo'>
          <Image className='bg-white bg-opacity-50 border border-white rounded-full' height='50' src={Logo} alt='Logo'/>
        </figure>
         <Menu className='menu'>
           <ol>
             <li>
              <Link to='/'>Home</Link>
             </li>
             <li>
              <Link to='/excursiones'>Excursiones</Link>
             </li>
             <li>
             <Link to='/quienesSomos'>Quienes Somos</Link>
             </li>
             <li>
              <Link to='/contacto'>Contacto</Link>
             </li>
           </ol>
         </Menu>
      </Container>
    </Navbar>
    </>
   
  );
};

export default Header;

{/* <i className='icon-menu burger-button' open={open} onClick={handleClick} role='button' id='burger-menu' tabIndex={0} aria-label='burger' />
      <header className='header'>
        <div className='cont'>
          <figure className='logo'>
            <img src={Logo} height='50' alt='Logo' />
          </figure>
          <nav className='menu'>
            <ol>
              <li>
                <a className='link' href='#excursiones'>Excursiones</a>
              </li>
              <li>
                <a className='link' href='#quienessomos'>¿Quiénes Somos?</a>
              </li>
              <li>
                <a className='link' href='#contacto'>Contacto</a>
              </li>
            </ol>

          </nav>

        </div>

      </header> */}