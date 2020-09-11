import React, { useState } from 'react';
// import dataExcursiones from '../Excursion';
import Modal from '../Modal/Modal';
import '../../styles/home.css';

const Cards = ({ id, img, alt, title, description }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Hola');
    setIsOpen(true);
  }
  return (
    <article className='event' key={id}>
      <figure className='event-imageCont'>
        <img className='object-contain' src={img} alt={alt} />
      </figure>
      <div className='event-detail'>
        <h3 className='event-title'>{title}</h3>
        <p className='event-description'>{description}</p>
        <button onClick={e => handleClick(e)} type='button' className='px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent'>
          Reservar!
        </button>
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} title={title} />
      )}
    </article>
  );
};

export default Cards;

// class Cards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { exc: dataExcursiones };

//   }

//   render() {
//     const { exc } = this.state;
//     return (
//       <article className='event'>
//         {exc.map((images) => (
//           <div key={images.id}>
//             <figure className='event-imageCont'>
//               <img className='object-contain' src={images.img} alt={images.alt} />
//             </figure>
//             <div className='event-detail'>
//               <h3 className='event-title'>{images.title}</h3>
//               <p className='event-description'>{images.description}</p>
//               <button type='button' className='event-url'>
//                 Reservar!
//               </button>
//             </div>
//           </div>

//         ))}

//       </article>
//     );
//   }
// }

{ /* <section className='flex flex-row items-center justify-between p-4 pt-8'>
        {exc.map((s, index) => (
          <div className='max-w-sm p-2 overflow-hidden rounded shadow-xl' tabIndex={index} key={index}>
            <img className='object-contain' src={s.img} alt={s.alt} />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>{s.title}</div>
              <p className='text-base text-gray-700'>
                {s.description}
              </p>
            </div>
            <div className='text-center'>
              <button type='button' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>
                Reservar!
              </button>
            </div>
          </div>
        ))}
      </section> */ }
