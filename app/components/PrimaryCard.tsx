import React from 'react';
import Image from 'next/image';
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
      {/* Image & Label */}
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={327} // Set width based on design
            height={164.87} // Set height based on design
            priority // Ensures it loads faster
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.placeholderImage}>Image Not Available</div>
        )}
        {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        {buttonText && buttonLink && (
          <Button text={buttonText} link={buttonLink} />
        )}
      </div>
    </div>
  );
};

export default PrimaryCard;

// import React from 'react';
// import Image from 'next/image'; // ✅ Use Next.js Image component
// import styles from '@styles/PrimaryCard.module.scss';
// import Button from '@components/Button';

// interface PrimaryCardProps {
//   title: string;
//   description: string;
//   image?: string;
//   labelTag?: string;
//   buttonText?: string;
//   buttonLink?: string;
// }

// const PrimaryCard: React.FC<PrimaryCardProps> = ({
//   title,
//   description,
//   image,
//   labelTag,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.primaryCard}>
//       {/* ✅ Image & Label */}
//       <div className={styles.imageContainer}>
//         {image ? (
//           <Image
//             src={image}
//             alt={title}
//             width={327} // ✅ Set width based on design
//             height={165} // ✅ Set height based on design
//             priority // ✅ Ensures it loads faster
//             className={styles.cardImage}
//           />
//         ) : (
//           <div className={styles.placeholderImage}>Image Not Available</div>
//         )}
//         {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
//       </div>

//       {/* ✅ Content */}
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>

//         {/* ✅ Button Component */}
//         {buttonText && buttonLink && (
//           <Button text={buttonText} link={buttonLink} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default PrimaryCard;

// import React from 'react';
// import styles from '@styles/PrimaryCard.module.scss';
// import Button from '@components/Button';

// interface PrimaryCardProps {
//   title: string;
//   description: string;
//   image?: string;
//   labelTag?: string;
//   buttonText?: string;
//   buttonLink?: string;
// }

// const PrimaryCard: React.FC<PrimaryCardProps> = ({
//   title,
//   description,
//   image,
//   labelTag,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.primaryCard}>
//       {/* ✅ Image & Label */}
//       <div className={styles.imageContainer}>
//         <img src={image} alt={title} />
//         {labelTag && <span className={styles.labelTag}>{labelTag}</span>}
//       </div>

//       {/* ✅ Content */}
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>

//         {/* ✅ Button Component */}
//         {buttonText && buttonLink && (
//           <Button text={buttonText} link={buttonLink} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default PrimaryCard;
