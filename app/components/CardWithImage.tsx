import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import styles from '@styles/CardWithImage.module.scss';

interface CardWithImageProps {
  title: string;
  description: string;
  image?: string | null;
  labelTag?: string | null;
  buttonText?: string;
  buttonLink?: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  title,
  description,
  image,
  labelTag,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.card}>
      {/* Only render the image if it's not null */}
      {image ? (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={718}
            height={450}
            objectFit="cover"
          />
          {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
        </div>
      ) : (
        <div className={styles.imagePlaceholder}></div> // Empty div to maintain spacing
      )}

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        {/* Button if available */}
        {/* {buttonText && buttonLink && (
          <Button text={buttonText} link={buttonLink} />
        )} */}
      </div>
    </div>
  );
};

export default CardWithImage;
