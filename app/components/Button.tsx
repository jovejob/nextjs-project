import React from 'react';
import styles from '@styles/Button.module.scss';

interface ButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, link, variant = 'primary' }) => {
  return (
    <a
      href={link}
      className={`${styles.button} ${
        variant === 'secondary' ? styles.secondary : ''
      }`}
    >
      {text} <span className={styles.arrow}>→</span>
    </a>
  );
};

export default Button;

// import React from 'react';
// import styles from '@styles/Button.module.scss';

// interface ButtonProps {
//   text: string;
//   link: string;
// }

// const Button: React.FC<ButtonProps> = ({ text, link }) => {
//   return (
//     <a href={link} className={styles.button}>
//       {text} <span className={styles.arrow}>→</span>
//     </a>
//   );
// };

// export default Button;
