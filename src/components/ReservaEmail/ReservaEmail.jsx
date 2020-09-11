import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

const ReservaEmail = ({ title }) => {
  const frmContact = { userName: '', useEmail: '', userPhone:'', nameExcursion:`${title}`, cantidad: ''};
  const [contact, setContact] = useState(frmContact);
  const [ showMessage, setShowMessage] = useState(false);
  const handleChange = e => {
    const { name, value} = e.target;
    setContact({ ...contact,[name]:value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('service_pct4tyq','template_beuclkp', contact, 'user_euzQfJT6ZuwmXUxRCz4Jh')
    .then((response) => {
        Swal.fire('', 'Enviado!', 'success');
        setContact(frmContact);
        setShowMessage(true);
    }, (err) => {
      Swal.fire('', 'Hubo un error, intenta de nuevo mas tarde', 'error');
    });
  }
  return (
    <div className='container pt-2 text-center'>
      { showMessage ? <div className="mx-auto alert alert-success col-md-5" role="alert">Email Send Success!!</div> : ``}
      <form onSubmit={handleSubmit}>
      <div className="pt-3">
        <h3 className="font-weight-bold"> Datos de Reserva </h3>
        </div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Nombre y Apellido</b> <br/>
						<input required type="text" value={contact.userName} name="userName" onChange={handleChange} className="form-control" placeholder="Nombre y apellido" />
					</div>
			</div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Tu Email</b> <br/>
						<input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="email" />
					</div>
			</div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Telefono</b> <br/>
						<input required type='text' value={contact.userPhone} name="userPhone" onChange={handleChange} className="form-control" placeholder="Telefono" />
					</div>
			</div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Excursion</b> <br/>
						<p>{title}</p>
					</div>
			</div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Cantidad de Personas</b> <br/>
						<select  required className="form-control" value={contact.cantidad} onChange={handleChange} name="cantidad">
						    <option value='' >Seleccionar</option>
							<option value="1" >1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
              <option value="5">5</option>
						</select>
					</div>
			  </div>
      <div className="pt-3 pb-3 mx-auto text-center col-md-5">
					<button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent">Enviar</button>
			  </div>
      
      </form>
    </div>
  )
}

export default ReservaEmail