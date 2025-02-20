import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
import Card from '@/app/components/Card';
// import CardFirst from './CardFirst';
import styles from '@styles/CardsList.module.scss';
// import { RootState } from '../store';
import CardFirst from '@/app/components/CardFirst';
import { RootState } from '@/features/store';

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
