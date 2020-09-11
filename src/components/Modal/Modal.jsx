import React from 'react'
import { createPortal } from 'react-dom'
import ReservaEmail from '../ReservaEmail/ReservaEmail';
import { Title } from './styles';

const Modal = ({ setIsOpen, title }) => {
  const handleClick = () => {
     setIsOpen(false);
  }
  return createPortal((
    <div className='absolute top-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50'>
      <div className='px-6 py-8 bg-white rounded-lg'>
        <Title>Reserva para {title}</Title>
        <ReservaEmail title={title} />
        <div className='text-center'>
        <button onClick={handleClick} className='px-4 py-2 font-semibold text-black bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent'>Cerrar</button>
      </div>
        </div>
        
    </div>
  ), (document.querySelector('#modal')));
}

export default Modal;
