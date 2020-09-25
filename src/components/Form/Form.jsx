import React from 'react';
import { Input, Label, Button, Text, Column, Row } from './styles';
import Image1 from '../../static/medano3.jpg';

const Form = () => {
  return (
    <div className='flex flex-row flex-wrap'>
      <div className='p-3'>
        <img width='500' className='rounded-lg' src={Image1} alt='Image' />
      </div>
      <div className='p-6'>
        <form>
          <div className='mb-4'>
            <Label htmlFor='username'>
            Nombre y Apellido
            <Input type="text" placeholder="Nombre Apellido" required/>
            </Label>
          </div>
          <div className='mb-4'>
          <Label htmlFor='country'>
           Provincia
           <Input type="text" placeholder="Provincia" required/>
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
