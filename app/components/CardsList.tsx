'use client';

import React from 'react';
import PrimaryCard from '@components/PrimaryCard';
import SecondaryCard from '@components/SecondaryCard';
import TertiaryCard from '@components/TertiaryCard';

import styles from '@styles/Layout.module.scss';

interface Card {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  labelTag?: string | null;
  buttonText?: string;
  buttonLink?: string;
}

interface CardsListProps {
  cards: Card[];
}

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return null; // Later: Replace with a Skeleton Loader for better UX
  }

  return (
    <main className={styles.gridContainer}>
      {cards[0] && (
        <PrimaryCard
          title={cards[0].title}
          description={cards[0].description}
          image={cards[0].image || undefined}
          labelTag={cards[0].image ? cards[0].labelTag ?? undefined : undefined}
          buttonText={cards[0].buttonText}
          buttonLink={cards[0].buttonLink}
        />
      )}

      {cards[1] && (
        <SecondaryCard
          title={cards[1].title}
          description={cards[1].description}
          buttonText={cards[1].buttonText}
          buttonLink={cards[1].buttonLink}
        />
      )}

      {/* ✅ Ensure `cards.slice(2)` is only used if `cards.length > 2` */}
      {cards.length > 2 &&
        cards
          .slice(2)
          .map((card, index) => (
            <TertiaryCard
              key={card?.id || index}
              title={card?.title}
              description={card?.description}
              buttonText={card?.buttonText}
              buttonLink={card?.buttonLink}
            />
          ))}
    </main>
  );
};

export default CardsList;

// ('use client');

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/features/store';

// import PrimaryCard from '@components/PrimaryCard';
// import SecondaryCard from '@components/SecondaryCard';
// import TertiaryCard from '@components/TertiaryCard';

// import styles from '@styles/Layout.module.scss';

// const CardsList: React.FC = () => {
//   const { cards, status } = useSelector((state: RootState) => state.cards);

//   // Show nothing (or a Skeleton Loader) while data is loading
//   if (status === 'loading') {
//     return null; // Later: Replace with a Skeleton Loader for better UX
//   }

//   return (
//     <main className={styles.gridContainer}>
//       {cards[0] && (
//         <PrimaryCard
//           title={cards[0].title}
//           description={cards[0].description}
//           image={cards[0].image || undefined}
//           labelTag={
//             cards[0].image && cards[0].labelTag ? cards[0].labelTag : undefined
//           }
//           buttonText={cards[0].buttonText}
//           buttonLink={cards[0].buttonLink}
//         />
//       )}

//       {cards[1] && (
//         <SecondaryCard
//           title={cards[1].title}
//           description={cards[1].description}
//           buttonText={cards[1].buttonText}
//           buttonLink={cards[1].buttonLink}
//         />
//       )}

//       {cards.slice(2).map((card, index) => (
//         <TertiaryCard
//           key={card.id || index}
//           title={card.title}
//           description={card.description}
//           buttonText={card.buttonText}
//           buttonLink={card.buttonLink}
//         />
//       ))}
//     </main>
//   );
// };

// export default CardsList;

// 'use client';

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/features/store';

// import PrimaryCard from '@components/PrimaryCard';
// import SecondaryCard from '@components/SecondaryCard';
// import TertiaryCard from '@components/TertiaryCard';

// import styles from '@styles/Layout.module.scss';

// const CardsList: React.FC = () => {
//   const { cards } = useSelector((state: RootState) => state.cards);

//   /** Show "No cards available" only AFTER HomePage.tsx has finished loading */
//   if (cards.length === 0) {
//     return;
//     // todo Show "No cards available" or skeleton maybe
//   }

//   const image = cards[0]?.image || undefined;
//   const labelTag = image ? cards[0]?.labelTag || undefined : undefined;

//   return (
//     <main className={styles.gridContainer}>
//       <>
//         {cards[0] && (
//           <PrimaryCard
//             title={cards[0].title}
//             description={cards[0].description}
//             image={image}
//             labelTag={labelTag}
//             buttonText={cards[0].buttonText}
//             buttonLink={cards[0].buttonLink}
//           />
//         )}

//         {cards[1] && (
//           <SecondaryCard
//             title={cards[1].title}
//             description={cards[1].description}
//             buttonText={cards[1].buttonText}
//             buttonLink={cards[1].buttonLink}
//           />
//         )}

//         {cards.slice(2).map((card, index) => (
//           <TertiaryCard
//             key={card.id || index}
//             title={card.title}
//             description={card.description}
//             buttonText={card.buttonText}
//             buttonLink={card.buttonLink}
//           />
//         ))}
//       </>
//     </main>
//   );
// };

// export default CardsList;

// 'use client';

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/features/store';
// import { fetchCards } from '@/features/cards/cardsSlice';

// import PrimaryCard from '@components/PrimaryCard';
// import SecondaryCard from '@components/SecondaryCard';
// import TertiaryCard from '@components/TertiaryCard';

// import styles from '@styles/Layout.module.scss';

// const CardsList: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { cards, status } = useSelector((state: RootState) => state.cards);

//   useEffect(() => {
//     dispatch(fetchCards());
//   }, [dispatch]);

//   if (status === 'loading') {
//     return <p className="text-center mt-20 text-gray-600">Loading cards...</p>;
//   }

//   if (status === 'failed') {
//     return (
//       <p className="text-center mt-20 text-red-500">Failed to load cards.</p>
//     );
//   }

//   return (
//     <main className={styles.gridContainer}>
//       {cards.length > 0 ? (
//         <>
//           {/* Render first card with PrimaryCard */}
//           <PrimaryCard
//             title={cards[0].title}
//             description={cards[0].description}
//             image={cards[0].image}
//             labelTag={cards[0].labelTag}
//             buttonText={cards[0].buttonText}
//             buttonLink={cards[0].buttonLink}
//           />

//           {/* Render second card with SecondaryCard */}
//           {cards[1] && (
//             <SecondaryCard
//               title={cards[1].title}
//               description={cards[1].description}
//               buttonText={cards[1].buttonText}
//               buttonLink={cards[1].buttonLink}
//             />
//           )}

//           {/* Render remaining cards with TertiaryCard */}
//           {cards.slice(2).map((card, index) => (
//             <TertiaryCard
//               key={card.id || index} // ✅ Use a unique key (preferably `id`, fallback to `index`)
//               title={card.title} // ✅ Use `card`, not `cards[2]`
//               description={card.description}
//               buttonText={card.buttonText}
//               buttonLink={card.buttonLink}
//             />
//           ))}
//         </>
//       ) : (
//         <p className="text-center mt-20 text-gray-500">No cards available</p>
//       )}
//     </main>
//   );
// };

// export default CardsList;
