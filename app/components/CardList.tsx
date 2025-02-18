import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Card from '@components/Card';

const CardList = () => {
  const { cards } = useSelector((state: RootState) => state.cards);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          labelTag={card.labelTag}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
          isFirstCard={index === 0}
        />
      ))}
    </section>
  );
};

export default CardList;

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import Card from '@components/Card';

// const CardList = () => {
//   const { cards } = useSelector((state: RootState) => state.cards);

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {cards.map((card, index) => (
//         <Card
//           key={card.id}
//           title={card.title}
//           description={card.description}
//           image={card.image}
//           labelTag={card.labelTag}
//           buttonText={card.buttonText}
//           buttonLink={card.buttonLink}
//           isFirstCard={index === 0} //First card gets priority image loading
//         />
//       ))}
//     </section>
//   );
// };

// export default CardList;

// 'use client';

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import Card from '@components/Card';

// const CardList = () => {
//   const { cards } = useSelector((state: RootState) => state.cards);

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           title={card.title}
//           description={card.description}
//           image={card.image}
//           labelTag={card.labelTag}
//           buttonText={card.buttonText}
//           buttonLink={card.buttonLink}
//         />
//       ))}
//     </section>
//   );
// };

// export default CardList;
