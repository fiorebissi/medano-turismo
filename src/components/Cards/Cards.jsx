import React, { useState } from 'react';
import InfoModal from '../InfoModal/InfoModal';
import Modal from '../Modal/Modal';
import { Event, EventDetail, Button }from './styles';
import db from '../../database/Excursion';


const Cards = ({ id, img, alt, title, description, isPage, info, condiciones }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const masInfo = db.forEach((info) => {
  <li key={info.id}>{info.id} </li>
  });

  // const masInfo = db.map((info) => <li key={info.id}>{info.condiciones}</li>);

  const handleClick = (e) => {
    e.preventDefault();
    
    setIsOpen(true);
  }

  const handleClickInfo = (e) => {
    e.preventDefault();
    console.log(masInfo);
    console.log(db);
    setIsOpenInfo(true);
  }
  return (
    <Event key={id}>
      <div>
        <img className='object-contain' src={img} alt={alt} />
      </div>
      <EventDetail>
        <h3 className='event-title'>{title}</h3>
        <p className='p-1 text-left'>{description}</p>
        <Button onClick={e => handleClick(e)} type='button'>
          Reservar!
        </Button>
        {isPage && (
          <Button onClick={e => handleClickInfo(e)} className='ml-2' type='button'>
            Más Info
          </Button>
        )}
      </EventDetail>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} title={title} />
      )}
      {isOpenInfo && (
        <InfoModal setIsOpenInfo={setIsOpenInfo} title={title} info={info} masInfo={masInfo} />
      )}
    </Event>
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
