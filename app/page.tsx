'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { fetchUser } from '@/store/userSlice';
import { fetchCards } from '@/store/cardsSlice';
import Header from '@components/Header';
import CardList from '@components/CardList';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const [isMounted, setIsMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    dispatch(fetchUser());
    dispatch(fetchCards());

    // Apply smooth fade-in effect after mount
    setTimeout(() => setLoaded(true), 300);
  }, [dispatch]);

  if (!isMounted) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  return (
    <main
      className={`bg-white min-h-screen transition-opacity duration-500 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header />
      <CardList />
    </main>
  );
}
