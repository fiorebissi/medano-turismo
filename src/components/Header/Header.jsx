import React, { useState } from 'react';
import Logo from '../../static/Medano-color.png';
import { Image, Navbar, Link, Container, Menu } from './styles';
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
    <MdMenu open={open} onClick={handleClick} className='burger-button' id='burger-menu' size={SIZE} />
    <Navbar>
      <Container>
         <div className='p-1 m-0 text-center bg-white bg-opacity-25 rounded-full logo xl:w-56 lg:w-56 md:w-44 sm:w-36'>
           <Image src={Logo} alt='Logo' />
         </div>
         <Menu className='menu'>
           <ol>
            <Link to='/'>Home</Link>
            <Link to='/excursiones'>Excursiones</Link>
            <Link to='/quienesSomos'>Quienes Somos</Link>
            <Link to='/contacto'>Contacto</Link>
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