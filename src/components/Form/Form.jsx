import React from 'react';
import { Button, Div } from './styles';
import Image from '../../static/medano3.jpg';

const Form = () => {
  return (
    <div className='flex flex-wrap content-around justify-center h-screen'>
      <Div>
        <img className='object-cover rounded-lg' src={Image} alt='Image' />
      </Div>
      <div>
        <form className='mb-6 ml-4'>
          <label htmlFor='userName' className='block mb-2 mb-4 text-lg font-bold text-gray-700'>
            Nombre y Apellido
            <input className='w-full py-2 rounded shadow-md' required/>
          </label>
          <label htmlFor='email' className='block mb-2 mb-4 text-lg font-bold text-gray-700'>
            Email
            <input className='w-full py-2 rounded shadow-md' required/>
          </label>
          <textarea className='w-full rounded shadow-md ' rows='5' placeholder='Mensaje'/>
          <Button type='button'>Enviar</Button>

        </form>
      </div>
    </div>
    
    

  )
}

export default Form;

{/* <div className='flex justify-center w-auto'>
      <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md'>
        <div className='mb-4'>
          <Label htmlFor='username'>
           Nombre y Apellido
           <Input type="text" placeholder="Nombre Apellido" required/>
          </Label>

        </div>
        <div className='mb-6'>
          <Label htmlFor='email'>
            Email
            <Input type='text' placeholder='email' required/>
          </Label>
        </div>
        <div className='mb-4'>
         <Text rows='5' placeholder='Mensaje' />
        </div>
        <div className='text-center'>
          <Button>Enviar</Button>
        </div>
      </form>

    </div> */}
