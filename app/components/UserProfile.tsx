'use client';

import { useSelector } from 'react-redux';
import styles from '@styles/Header.module.scss';
import { RootState } from '../store';

const UserProfile = () => {
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <header className="flex justify-between items-center text-white">
      <h1 className={styles.welcome}>Welcome, {username || 'Guest'} !</h1>
    </header>
  );
};

export default UserProfile;
