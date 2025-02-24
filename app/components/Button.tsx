'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@styles/Button.module.scss';

interface ButtonProps {
  text: string;
  link: string | null;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevents navigation
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.textWrapper}>
        {text}
        {/* Use Next.js <Image /> for better performance */}
        <Image
          src="/Verde.svg"
          alt="Arrow"
          className={styles.arrow}
          width={16}
          height={16}
        />
      </span>
    </button>
  );
};

export default Button;
