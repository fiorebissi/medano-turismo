import React, { useState } from 'react';
import Logo from '../../static/Medano-color.png';
import { Image, Navbar, Link } from './styles';
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
    <MdMenu onClick={handleClick} className='burger-button' size={SIZE} />
    <Navbar className='flex items-center justify-between w-full'>
      <div className='p-2 m-0 text-center xl:w-56 lg:w-56 md:w-44 sm:w-36'>
      <Image src={Logo} alt='Logo' />
      </div>
      <div className='flex flex-wrap p-5'>
        <Link to='/'>Home</Link>
        <Link to='/excursiones'>Excursiones</Link>
        <Link to='/quienesSomos'>Quienes Somos</Link>
        <Link to='/contacto'>Contacto</Link>
      </div>
      <div id='menu' className='flex-col menu'>
        <Link to='/'>Home</Link>
        <Link to='/excursiones'>Excursiones</Link>
        <Link to='/quienesSomos'>Quienes Somos</Link>
        <Link to='/contacto'>Contacto</Link>
      </div>
    </Navbar>
    </>
   
  );
};

export default Header;

{/* <>
<i className='icon-menu burger-button' open={open} onClick={handleClick} role='button' id='burger-menu' tabIndex={0} aria-label='burger' />
<Navbar className='block'>
  <Container>
    <figure className='text-center'>
      <img src={Logo} height='50' alt='Logo' />
    </figure>
    <Menu>
      <ol>
        <li>
          <Link to='/excursiones'>Excursiones</Link>
        </li>
        <li>
          <Link to='quienes'>¿Quiénes Somos?</Link>
        </li>
        <li>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ol>

    </Menu>

  </Container>

</Navbar>
</> */}
