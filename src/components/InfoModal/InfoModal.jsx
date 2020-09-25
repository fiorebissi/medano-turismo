import React from 'react';
import { createPortal } from 'react-dom';
import { Title } from './styles';

const InfoModal = ({ setIsOpenInfo, title, info, masInfo }) => {
  const handleClick = () => {
    setIsOpenInfo(false);
 }
  return createPortal((
    <div className='fixed inset-0 z-auto flex items-center justify-center w-screen h-screen overflow-auto bg-gray-900 bg-opacity-50'>
      <div className='w-6/12 h-auto px-6 py-8 bg-white rounded-lg'>
          <Title> {title}</Title>
          <p>{info}</p>
          <ul>{masInfo}</ul>
          <div className='text-center'>
            <button onClick={handleClick} className='px-4 py-2 font-semibold text-black bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent'>Cerrar</button>
          </div>
        </div>
    </div>
    
  ), (document.querySelector('#modal')));
}

export default InfoModal;
