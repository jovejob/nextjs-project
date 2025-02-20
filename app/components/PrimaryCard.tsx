import React from 'react';
import styles from '@styles/PrimaryCard.module.scss';
import Button from '@components/Button';

interface PrimaryCardProps {
  title: string;
  description: string;
  image?: string;
  labelTag?: string;
  buttonText?: string;
  buttonLink?: string;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({
  title,
  description,
  image,
  labelTag,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.primaryCard}>
      {/* ✅ Image & Label */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
      </div>

      {/* ✅ Content */}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        {/* ✅ Button Component */}
        {buttonText && buttonLink && (
          <Button text={buttonText} link={buttonLink} />
        )}
      </div>
    </div>
  );
};

export default PrimaryCard;
