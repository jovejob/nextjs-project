'use client';

import React from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image component
import styles from '@styles/Button.module.scss';

interface ButtonProps {
  text: string;
  link: string | null;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // ✅ Prevents navigation
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.textWrapper}>
        {text}
        {/* ✅ Use Next.js <Image /> for better performance */}
        <Image
          src="/Verde.svg"
          alt="Arrow"
          className={styles.arrow}
          width={16} // ✅ Set width explicitly
          height={16} // ✅ Set height explicitly
        />
      </span>
    </button>
  );
};

export default Button;

// 'use client';

// import React from 'react';
// import styles from '@styles/Button.module.scss';

// interface ButtonProps {
//   text: string;
//   link: string | null;
// }

// const Button: React.FC<ButtonProps> = ({ text }) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault(); // ✅ Prevents navigation
//   };

//   return (
//     <button className={styles.button} onClick={handleClick}>
//       <span className={styles.textWrapper}>
//         {text}
//         <img src="/Verde.svg" alt="Arrow" className={styles.arrow} />
//       </span>
//     </button>
//   );
// };

// export default Button;
