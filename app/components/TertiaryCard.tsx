import React from 'react';
import styles from '@styles/TertiaryCard.module.scss';
import LinkButton from './LinkButton';

interface TertiaryCardProps {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

const TertiaryCard: React.FC<TertiaryCardProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.tertiaryCard}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonText && buttonLink && (
          <LinkButton
            text={buttonText}
            link={buttonLink}
            bgColor="#5DC266" /* ✅ Green Button */
            textColor="#2E2E2E" /* ✅ Black Text */
          />
        )}
      </div>
    </div>
  );
};

export default TertiaryCard;
