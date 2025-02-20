import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import styles from '@styles/Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  image?: string | null;
  labelTag?: string | null;
  buttonText: string;
  buttonLink: string;
  cardIndex: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  labelTag,
  buttonText,
  buttonLink,
  cardIndex,
}) => {
  return (
    <div className={`${styles.card} ${styles[`card-${cardIndex}`]}`}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={718}
            height={700}
            objectFit="cover"
            className={styles.image}
          />
          {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
        </div>
      )}
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        {/* <Button text={buttonText} link={buttonLink} /> */}
      </div>
    </div>
  );
};

export default Card;
