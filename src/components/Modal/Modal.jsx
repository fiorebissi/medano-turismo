import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ setIsOpen}) => {
  const handleClick = () => {
     setIsOpen(false);
  }
  return createPortal((
    <div className='absolute top-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50'>
      <div className='p-2 bg-white rounded-lg'>
        <p>Hola</p>
       <button onClick={handleClick} className='px-4 py-2 font-semibold text-black bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent'>Cerrar</button>
      </div>
    </div>
  ), (document.querySelector('#modal')));
}

export default Modal;
