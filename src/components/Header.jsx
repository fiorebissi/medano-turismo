import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/static/Medano-color.png';
import '../assets/styles/home.css';

const Header = () => {
  return (
    <div className='Home__header flex items-center mx-auto text-white border-b-2 border-gray-700 border-opacity-75 relative '>
      <div className='w-full flex'>
        <div className='relative flex w-1/4'>
          <div className='text-center'>
            <a href='https://elmedanoturismo.com.ar'>
              <img className='object-contain' src={Logo} alt='Logo' />
            </a>
          </div>
        </div>
        <div className='relative flex w-3/5'>
          <div className='w-full relative flex items-center'>
            <nav className='text-base font-normal uppercase'>
              <ul className='justify-center mx-auto flex flex-wrap'>
                <li className='mr-2 relative block list-none p-6 hover:text-teal-600 hover:border-b-2 border-teal-600 cursor-pointer transition duration-300 ease-in-out'>
                  Excursiones
                </li>
                <li className='mr-2 relative block list-none p-6 hover:text-teal-600 hover:border-b-2 border-teal-600 cursor-pointer transition duration-300 ease-in-out'>
                  ¿Quiénes Somos?
                </li>
                <li className='mr-2 relative block list-none p-6 hover:text-teal-600 hover:border-b-2 border-teal-600 cursor-pointer transition duration-300 ease-in-out'>
                  Contacto
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='w-1/12 relative flex'>
          <a href='https://facebook.com/elmedanoturismo'>
            <FaFacebook size='32px' />
          </a>
          <a href='https://instagram.com/elmedanoturismo'>
            <FaInstagram size='32px' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
