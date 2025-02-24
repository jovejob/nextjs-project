'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { fetchUser } from '@/features/user/userSlice';
import { setCards } from '@/features/cards/cardsSlice'; // ✅ Add this

import CardsList from '@components/CardsList';
import Header from '@components/Header';

interface Card {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  labelTag?: string | null;
  buttonText?: string;
  buttonLink?: string;
}

interface HomePageClientProps {
  username: string;
  cards: Card[]; // Accept cards as a prop from SSR
}

const HomePageClient: React.FC<HomePageClientProps> = ({ username, cards }) => {
  const dispatch = useDispatch<AppDispatch>();

  const reduxCards = useSelector((state: RootState) => state.cards.cards);
  const userStatus = useSelector((state: RootState) => state.user.status);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    dispatch(fetchUser());

    // Hydrate Redux with fetched cards (only once)
    if (reduxCards.length === 0 && cards.length > 0) {
      dispatch(setCards(cards));
    }
  }, [dispatch, cards, reduxCards.length]);

  if (!isHydrated)
    return <div style={{ visibility: 'hidden', height: '100vh' }} />;

  return (
    <>
      <Header username={username} />
      {userStatus === 'loading' ? (
        <h1 className="text-center text-gray-400 text-2xl mt-10">Loading...</h1>
      ) : (
        <CardsList cards={reduxCards} />
      )}
    </>
  );
};

export default HomePageClient;
