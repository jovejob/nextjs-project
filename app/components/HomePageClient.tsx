'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { fetchUser } from '@/features/user/userSlice';
import { fetchCards } from '@/features/cards/cardsSlice';

import CardsList from '@components/CardsList';
import Header from '@components/Header';

const HomePageClient: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, status: userStatus } = useSelector(
    (state: RootState) => state.user
  );
  const { status: cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (userStatus !== 'loading' && cardsStatus !== 'loading') {
      setIsLoading(false);
    }
  }, [userStatus, cardsStatus]);

  return (
    <>
      {/* ✅ Loading Placeholder */}
      {isLoading ? (
        <h1 className="text-center text-gray-400 text-2xl mt-10">Loading...</h1>
      ) : (
        <>
          <Header username={username || '[Username]'} />
          <CardsList />
        </>
      )}
    </>
  );
};

export default HomePageClient;
