import React from 'react';
// import dataExcursiones from '../Excursion';
import '../assets/styles/home.css';

const Cards = ({ id, img, alt, title, description }) => {
  return (
    <article className='event' key={id}>
      <figure className='event-imageCont'>
        <img className='object-contain' src={img} alt={alt} />
      </figure>
      <div className='event-detail'>
        <h3 className='event-title'>{title}</h3>
        <p className='event-description'>{description}</p>
        <button type='button' className='event-url'>
          Reservar!
        </button>
      </div>
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

{ /* <section className='flex flex-row items-center pt-8 justify-between p-4'>
        {exc.map((s, index) => (
          <div className='max-w-sm rounded overflow-hidden shadow-xl p-2' tabIndex={index} key={index}>
            <img className='object-contain' src={s.img} alt={s.alt} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{s.title}</div>
              <p className='text-gray-700 text-base'>
                {s.description}
              </p>
            </div>
            <div className='text-center'>
              <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Reservar!
              </button>
            </div>
          </div>
        ))}
      </section> */ }
