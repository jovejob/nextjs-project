'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { fetchUser } from '@/features/user/userSlice';

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
  cards: Card[]; // Cards are passed from server
}

const HomePageClient: React.FC<HomePageClientProps> = ({ cards }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, status: userStatus } = useSelector(
    (state: RootState) => state.user
  );

  // Prevent Hydration Mismatch: Ensure UI matches before & after hydration
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsHydrated(true); // Ensures consistent content before/after hydration
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (userStatus !== 'loading') {
      setIsLoading(false);
    }
  }, [userStatus]);

  // Prevent UI from changing before/after hydration
  if (!isHydrated) {
    return <div style={{ visibility: 'hidden', height: '100vh' }} />;
  }

  return (
    <>
      {isLoading ? (
        <h1 className="text-center text-gray-400 text-2xl mt-10">Loading...</h1>
      ) : (
        <>
          <Header username={username || '[Username]'} />
          <CardsList cards={cards} />
        </>
      )}
    </>
  );
};

export default HomePageClient;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/features/store';
// import { fetchUser } from '@/features/user/userSlice';
// import { fetchCards } from '@/features/cards/cardsSlice';

// import CardsList from '@components/CardsList';
// import Header from '@components/Header';

// const HomePageClient: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { username, status: userStatus } = useSelector(
//     (state: RootState) => state.user
//   );
//   const { status: cardsStatus } = useSelector(
//     (state: RootState) => state.cards
//   );
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     dispatch(fetchUser());
//     dispatch(fetchCards());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userStatus !== 'loading' && cardsStatus !== 'loading') {
//       setIsLoading(false);
//     }
//   }, [userStatus, cardsStatus]);

//   return (
//     <>
//       {/* Later: Replace with a Skeleton Loader for better UX */}
//       {isLoading ? (
//         <h1 className="text-center text-gray-400 text-2xl mt-10">Loading...</h1>
//       ) : (
//         <>
//           <Header username={username || '[Username]'} />
//           <CardsList />
//         </>
//       )}
//     </>
//   );
// };

// export default HomePageClient;
