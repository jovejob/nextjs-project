import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Card from '@components/Card';
import CardFirst from './CardFirst';
import styles from '@styles/CardList.module.scss'; // Import SCSS module

const CardList = () => {
  const { cards } = useSelector((state: RootState) => state.cards);

  return (
    <div className={styles.container}>
      <section className={styles.cardList}>
        {/* ✅ First Card - Large Card (Left) */}
        {cards[0] && (
          <div className={styles.largeCard}>
            <CardFirst
              title={cards[0].title}
              description={cards[0].description}
              image={cards[0].image ?? ''}
              labelTag={
                cards[0].image ? cards[0].labelTag ?? undefined : undefined
              }
              buttonText={cards[0].buttonText}
              buttonLink={cards[0].buttonLink}
            />
          </div>
        )}

        {/* ✅ Second Card - Small Card (Top Right) */}
        {cards[1] && (
          <div className={styles.smallCard}>
            <Card
              title={cards[1].title}
              description={cards[1].description}
              image={cards[1].image}
              labelTag={cards[1].labelTag}
              buttonText={cards[1].buttonText}
              buttonLink={cards[1].buttonLink}
              cardIndex={1}
            />
          </div>
        )}

        {/* ✅ Third Card - Small Card (Bottom Right) */}
        {cards[2] && (
          <div className={styles.smallCard}>
            <Card
              title={cards[2].title}
              description={cards[2].description}
              image={cards[2].image}
              labelTag={cards[2].labelTag}
              buttonText={cards[2].buttonText}
              buttonLink={cards[2].buttonLink}
              cardIndex={2}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default CardList;

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import Card from '@components/Card';
// import CardWithImage from '@components/CardWithImage';
// import CardWithImageFirst from './CardWithImageFirst';
// import CardFirst from './CardFirst';

// const CardList = () => {
//   const { cards } = useSelector((state: RootState) => state.cards);

//   return (
//     // px-6 → Adds 24px padding (6 * 4px = 24px) on small screens.
//     // lg:px-24 → Increases padding to 96px for lg screens and above.
//     // <section className="relative grid grid-cols-1 lg:grid-cols-[718px_500px] grid-rows-[auto_auto] gap-6 px-6 lg:px-24">
//     // <section className="relative grid grid-cols-1 lg:grid-cols-[718px_506px] gap-6 px-6 lg:px-24 max-w-[1248px] mx-auto w-full">
//     // <section className="relative grid grid-cols-1 lg:[grid-template-columns:718px_506px] gap-6 px-6 lg:px-24 max-w-[1248px] mx-auto w-full">
//     // <section className="relative grid grid-cols-1 lg:grid-cols-[718px_506px] lg:grid-rows-[700px_338px] gap-6 px-4 sm:px-6 lg:px-[96px] max-w-[1440px] mx-auto w-full">
//     <section
//       className="relative grid grid-cols-1 lg:grid-cols-[718px_506px] lg:grid-rows-[700px_338px] gap-6
//   px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] 2xl:px-[96px]
//   max-w-[1440px] mx-auto w-full"
//     >
//       {/* ✅ First Card - Uses `CardWithImage` (Large on the left) */}
//       {cards[0] && (
//         <div className="row-span-2">
//           <CardFirst
//             title={cards[0].title}
//             description={cards[0].description}
//             image={cards[0].image ?? ''}
//             labelTag={
//               cards[0].image ? cards[0].labelTag ?? undefined : undefined
//             }
//             buttonText={cards[0].buttonText}
//             buttonLink={cards[0].buttonLink}
//           />
//         </div>
//       )}

//       {/* ✅ Second Card - Top Right */}
//       {cards[1] && (
//         // <div>
//         <Card
//           title={cards[1].title}
//           description={cards[1].description}
//           image={cards[1].image}
//           labelTag={cards[1].labelTag}
//           buttonText={cards[1].buttonText}
//           buttonLink={cards[1].buttonLink}
//           cardIndex={1}
//         />
//         // </div>
//       )}

//       {/* ✅ Third Card - Bottom Right */}
//       {cards[2] && (
//         // <div>
//         <Card
//           title={cards[2].title}
//           description={cards[2].description}
//           image={cards[2].image}
//           labelTag={cards[2].labelTag}
//           buttonText={cards[2].buttonText}
//           buttonLink={cards[2].buttonLink}
//           cardIndex={2}
//         />
//         // </div>
//       )}
//     </section>
//   );
// };

// export default CardList;
