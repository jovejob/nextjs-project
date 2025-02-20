import type React from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from '@styles/CardFirst.module.scss';

interface CardFirstProps {
  title: string;
  description: string;
  image?: string;
  labelTag?: string;
  buttonText: string;
  buttonLink: string;
}

const CardFirst: React.FC<CardFirstProps> = ({
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
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            layout="responsive"
            width={718}
            height={362}
            className={styles.image}
          />
          {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
        </div>
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Button text={buttonText} link={buttonLink} />
      </div>
    </div>
  );
};

export default CardFirst;
