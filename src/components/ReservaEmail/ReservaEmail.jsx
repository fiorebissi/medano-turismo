import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

const ReservaEmail = ({ title }) => {
  const frmContact = { userName: '', useEmail: '', userPhone:'', nameExcursion:''};
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
        Swal.fire(response, 'Enviado!', 'success');
        setContact(frmContact);
        setShowMessage(true);
    }, (err) => {
      Swal.fire(err, 'Hubo un error, intenta de nuevo mas tarde', 'error');
    });
  }
  return (
    <div className='container pt-2 text-center'>
      { showMessage ? <div className="mx-auto alert alert-success col-md-5" role="alert">Email Send Success!!</div> : ``}
      <form onSubmit={handleSubmit}>
      <div className="pt-3"><h3 className="font-weight-bold"> Datos de Reserva </h3></div>
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
						<input required type="text" value={contact.userPhone} name="userPhone" onChange={handleChange} className="form-control" placeholder="Telefono" />
					</div>
			</div>
      <div className="pt-3 mx-auto col-md-5">
					<div className="text-left form-group"> <b>Excursion</b> <br/>
						<p onChange={handleChange} value={contact.nameExcursion}>{title}</p>
					</div>
			</div>
      <div className="pt-3 mx-auto text-left col-md-5">
					<button className="btn btn-primary">Submit</button>
			  </div>
      
      </form>
    </div>
  )
}

export default ReservaEmail
