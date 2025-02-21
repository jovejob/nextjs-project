'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { fetchUser } from '@/features/user/userSlice';

import CardsList from '@components/CardsList';
import Header from '@components/Header';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <Header username={username || '[Username]'} />
      <CardsList />
    </>
  );
};

export default HomePage;
