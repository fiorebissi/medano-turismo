import React, { useState } from 'react';
import Logo from '../assets/static/Medano-color.png';
import '../assets/styles/home.css';

const Header = () => {
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
      <i className='icon-menu burger-button' open={open} onClick={handleClick} role='button' id='burger-menu' tabIndex={0} aria-label='burger' />
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

      </header>
    </>
  );
};

export default Header;

