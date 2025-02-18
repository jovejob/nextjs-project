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
  isFirstCard?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  labelTag,
  buttonText,
  buttonLink,
  isFirstCard = false,
}) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg md:h-[220px] lg:h-[250px]"
            priority={isFirstCard}
          />

          {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
        </div>
      )}
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button text={buttonText} link={buttonLink} />
      </div>
    </div>
  );
};

export default Card;

// import React from 'react';
// import Image from 'next/image';
// import styles from '@styles/Card.module.scss';

// interface CardProps {
//   title: string;
//   description: string;
//   image?: string | null;
//   labelTag?: string | null;
//   buttonText: string;
//   buttonLink: string;
//   isFirstCard?: boolean; // NEW: To prioritize first card image
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   image,
//   labelTag,
//   buttonText,
//   buttonLink,
//   isFirstCard = false, // Default false
// }) => {
//   return (
//     <div className={styles.card}>
//       {image && (
//         <div className={styles.imageContainer}>
//           <Image
//             src={image}
//             alt={title}
//             width={400} // Adjust based on Figma design
//             height={250}
//             layout="responsive"
//             objectFit="cover"
//             priority={isFirstCard} // Ensure first card loads faster
//             className={styles.image}
//           />
//           {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
//         </div>
//       )}
//       <div className={styles.cardContent}>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <a href={buttonLink} className={styles.button}>
//           {buttonText} <span className={styles.arrow}>→</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from 'react';
// import styles from '@styles/Card.module.scss';

// interface CardProps {
//   title: string;
//   description: string;
//   image?: string | null;
//   labelTag?: string | null;
//   buttonText: string;
//   buttonLink: string;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   image,
//   labelTag,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.card}>
//       {image && (
//         <div className={styles.imageContainer}>
//           <img src={image} alt={title} className={styles.image} />
//           {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
//         </div>
//       )}
//       <div className={styles.cardContent}>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <a href={buttonLink} className={styles.button}>
//           {buttonText} <span className={styles.arrow}>→</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;
