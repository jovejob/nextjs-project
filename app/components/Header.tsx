import React from 'react';
import styles from '@styles/Header.module.scss';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return <h1 className={styles.header}>Welcome {username} !</h1>;
};

export default Header;
