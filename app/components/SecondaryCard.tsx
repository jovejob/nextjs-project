import React from 'react';
import styles from '@styles/SecondaryCard.module.scss';
import LinkButton from './LinkButton';

interface SecondaryCardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const SecondaryCard: React.FC<SecondaryCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.secondaryCard}>
      <div className={styles.content}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {buttonText && buttonLink && (
          <LinkButton
            text={buttonText}
            link={buttonLink}
            bgColor="#F0F2EC"
            textColor="#2E2E2E"
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryCard;

// import React from 'react';
// import styles from '@styles/SecondaryCard.module.scss';
// import LinkButton from './LinkButton';

// interface SecondaryCardProps {
//   title: string;
//   description: string;
//   image?: string;
//   buttonText?: string;
//   buttonLink?: string;
// }

// const SecondaryCard: React.FC<SecondaryCardProps> = ({
//   title,
//   description,
//   image,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.secondaryCard}>
//       {image && (
//         <div className={styles.imageContainer}>
//           <img src={image} alt={title} />
//         </div>
//       )}
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {buttonText && buttonLink && (
//           <LinkButton
//             text={buttonText}
//             link={buttonLink}
//             bgColor="#F0F2EC"
//             textColor="#2E2E2E"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SecondaryCard;

// import React from 'react';
// import styles from '@styles/SecondaryCard.module.scss';
// import LinkButton from './LinkButton';

// interface SecondaryCardProps {
//   title: string;
//   description: string;
//   image?: string;
//   buttonText?: string;
//   buttonLink?: string;
// }

// const SecondaryCard: React.FC<SecondaryCardProps> = ({
//   title,
//   description,
//   image,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.secondaryCard}>
//       {image && (
//         <div className={styles.imageContainer}>
//           <img src={image} alt={title} />
//         </div>
//       )}
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {buttonText && buttonLink && (
//           <LinkButton
//             text={buttonText}
//             link={buttonLink}
//             bgColor="white"
//             textColor="#5DC266"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SecondaryCard;

// import React from 'react';
// import styles from '@styles/SecondaryCard.module.scss';
// import LinkButton from './LinkButton';

// interface SecondaryCardProps {
//   title: string;
//   description: string;
//   buttonText?: string;
//   buttonLink?: string;
// }

// const SecondaryCard: React.FC<SecondaryCardProps> = ({
//   title,
//   description,
//   buttonText,
//   buttonLink,
// }) => {
//   return (
//     <div className={styles.secondaryCard}>
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {buttonText && buttonLink && (
//           <LinkButton text={buttonText} link={buttonLink} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SecondaryCard;
