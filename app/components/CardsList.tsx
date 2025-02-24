import React from 'react';
import PrimaryCard from '@components/PrimaryCard';
import SecondaryCard from '@components/SecondaryCard';
import TertiaryCard from '@components/TertiaryCard';

import styles from '@styles/CardsList.module.scss';

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
      {/* ✅ Primary Card (Large) */}
      {cards[0] && (
        <div className={styles.largeCard}>
          <PrimaryCard
            title={cards[0].title}
            description={cards[0].description}
            image={cards[0].image || undefined}
            labelTag={
              cards[0].image ? cards[0].labelTag ?? undefined : undefined
            }
            buttonText={cards[0].buttonText}
            buttonLink={cards[0].buttonLink}
          />
        </div>
      )}

      {/* ✅ Secondary & Tertiary Cards in a flex wrapper */}
      <div className={styles.smallCards}>
        {cards[1] && (
          <SecondaryCard
            title={cards[1].title}
            description={cards[1].description}
            buttonText={cards[1].buttonText}
            buttonLink={cards[1].buttonLink}
          />
        )}

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
      </div>
    </main>
  );
};

export default CardsList;
