'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Header = () => {
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <header className="flex justify-between items-center p-4 bg-darkGray text-white">
      <h1 className="text-lg font-bold">Welcome, {username || 'Guest'}!</h1>
    </header>
  );
};

export default Header;
