'use client';

import React from 'react';
import styles from '@styles/CardWithImageFirst.module.scss';
import Link from 'next/link';
import Button from './Button';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  labelTag?: string;
  buttonText: string;
  buttonLink: string;
}

const CardWithImageFirst: React.FC<CardProps> = ({
  title,
  description,
  image,
  labelTag,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
        </div>
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {/* <Link href={buttonLink} className={styles.button}>
          {buttonText} →
        </Link> */}
      </div>
      <Button text={buttonText} link={buttonLink} />
    </div>
  );
};

export default CardWithImageFirst;
