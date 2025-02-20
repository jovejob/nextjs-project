import React from 'react';
import styles from '@styles/Card.module.scss';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  labelTag?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Card: React.FC<CardProps> = ({
  title = 'Default Title',
  description = 'This is a placeholder description.',
  image,
  labelTag,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.card}>
      {/* ✅ Image (if provided) */}
      {image && <img src={image} alt={title} className={styles.cardImage} />}

      {/* ✅ Label Tag (if provided) */}
      {labelTag && <span className={styles.labelTag}>{labelTag}</span>}

      {/* ✅ Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        {/* ✅ Button (if provided) */}
        {buttonText && buttonLink && (
          <a href={buttonLink} className={styles.cardButton}>
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;

// import React from 'react';
// import '@styles/Card.module.scss';

// interface CardProps {
//   title?: string;
//   description?: string;
//   image?: string;
//   labelTag?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   cardIndex?: number;
// }

// const Card: React.FC<CardProps> = ({
//   title = '',
//   description = '',
//   image = '',
//   labelTag,
//   buttonText,
//   buttonLink,
//   cardIndex,
// }) => {
//   return (
//     <div className="card">
//       {image && <img src={image} alt={title} className="card-image" />}
//       {labelTag && <span className="label-tag">{labelTag}</span>}
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {buttonText && buttonLink && (
//           <a href={buttonLink} className="card-button">
//             {buttonText}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from 'react';
// import '@styles/Card.module.scss';

// const Card: React.FC = () => {
//   return <div className="card">Card Placeholder</div>;
// };

// export default Card;
