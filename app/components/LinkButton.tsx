'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import styles from '@styles/LinkButton.module.scss';

interface LinkButtonProps {
  text: string;
  link?: string;
  bgColor?: string;
  textColor?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  link = '#',
  bgColor,
  textColor,
}) => {
  return (
    <Link
      href={link}
      className={styles.linkButton}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation if it's just "#"
      }}
    >
      <span className={styles.textWrapper}>
        {text}
        {/* Replace <img> with <Image /> */}
        <Image
          src="/Verde.svg"
          alt="Arrow"
          className={styles.arrow}
          width={16} // Set explicit width
          height={16} // Set explicit height
        />
      </span>
    </Link>
  );
};

export default LinkButton;

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import styles from '@styles/LinkButton.module.scss';

// interface LinkButtonProps {
//   text: string;
//   link?: string;
//   bgColor?: string;
//   textColor?: string;
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   text,
//   link = '#',
//   bgColor,
//   textColor,
// }) => {
//   return (
//     <Link
//       href={link}
//       className={styles.linkButton}
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={(e) => {
//         e.preventDefault(); // Prevent navigation if it's just "#"
//       }}
//     >
//       <span className={styles.textWrapper}>
//         {text}
//         <img src="/Verde.svg" alt="Arrow" className={styles.arrow} />
//       </span>
//     </Link>
//   );
// };

// export default LinkButton;
