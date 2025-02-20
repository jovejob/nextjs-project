'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { fetchUser } from '@/features/user/userSlice';

import CardsList from '@components/CardsList';
import styles from '@styles/Layout.module.scss';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        Welcome {username || '[Username]'}!
      </header>
      <CardsList />
    </>
  );
};

export default HomePage;

// 'use client';

// import React from 'react';
// import PrimaryCard from '@components/PrimaryCard';
// import SecondaryCard from '@components/SecondaryCard';
// import TertiaryCard from '@components/TertiaryCard';
// import styles from '@styles/Layout.module.scss';

// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/features/store';
// import { fetchCards } from '@/features/cards/cardsSlice';
// import { fetchUser } from '@/features/user/userSlice';

// import { useSelector } from 'react-redux';
// import { RootState } from '@/features/store';

// const HomePage: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const [isMounted, setIsMounted] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     dispatch(fetchUser());
//     dispatch(fetchCards());

//     // Apply smooth fade-in effect after mount
//     setTimeout(() => setLoaded(true), 300);
//   }, [dispatch]);

//   if (!isMounted) {
//     return <p className="text-center mt-20 text-gray-600">Loading...</p>;
//   }

//   // const { cards } = useSelector((state: RootState) => state.cards);

//   return (
//     <>
//       <header className={styles.header}>Welcome [Username]!</header>
//       <main className={styles.gridContainer}>
//         {/* First Card - Unique Design */}
//         <PrimaryCard
//           title="Card 1"
//           description="This is the first card."
//           image="https://via.placeholder.com/150"
//           labelTag="New"
//           buttonText="View More"
//           buttonLink="#"
//         />

//         {/* Second Card - Different layout */}
//         <SecondaryCard
//           title="Card 2"
//           description="Another example card."
//           image="https://via.placeholder.com/150"
//           buttonText="Explore"
//           buttonLink="#"
//         />

//         {/* Other Cards - Simpler layout */}
//         <TertiaryCard
//           title="Card 3"
//           description="This one has a label tag."
//           labelTag="Featured"
//         />
//       </main>
//     </>
//   );
// };

// export default HomePage;

// import React from 'react';
// import Card from '@components/Card';
// import styles from '@styles/Layout.module.scss';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <header className={styles.header}>Welcome [Username]!</header>
//       <main className={styles.gridContainer}>
//         <Card
//           title="Card 1"
//           description="This is the first card."
//           image="https://via.placeholder.com/150"
//           labelTag="New"
//           buttonText="View More"
//           buttonLink="#"
//         />
//         <Card
//           title="Card 2"
//           description="Another example card."
//           image="https://via.placeholder.com/150"
//           buttonText="Explore"
//           buttonLink="#"
//         />
//         <Card
//           title="Card 3"
//           description="This one has a label tag."
//           labelTag="Featured"
//         />
//         <Card title="Card 4" description="A simple card without an image." />
//       </main>
//     </>
//   );
// };

// export default HomePage;

// import React from 'react';
// import Card from '@components/Card';
// import '@styles/Layout.module.scss';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <header className="header">Welcome [Username]!</header>
//       <main className="grid-container">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </main>
//     </>
//   );
// };

// export default HomePage;

// import React from 'react';
// import Layout from '@components/Layout';
// import Card from '@components/Card';
// import '@styles/Layout.module.scss';
// // import RootLayout from './layout';

// const HomePage: React.FC = () => {
//   return (
//     <Layout>
//       <header className="header">Welcome [Username]!</header>
//       <main className="grid-container">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </main>
//     </Layout>
//   );
// };

// export default HomePage;

// 'use client';

// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/features/store';
// import Header from '@components/Header';
// import { fetchCards } from '@/features/cards/cardsSlice';
// import { fetchUser } from '@/features/user/userSlice';
// import CardList from './components/CardsList';

// export default function Home() {
//   const dispatch = useDispatch<AppDispatch>();

//   const [isMounted, setIsMounted] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     dispatch(fetchUser());
//     dispatch(fetchCards());

//     // Apply smooth fade-in effect after mount
//     setTimeout(() => setLoaded(true), 300);
//   }, [dispatch]);

//   if (!isMounted) {
//     return <p className="text-center mt-20 text-gray-600">Loading...</p>;
//   }

//   return (
//     <main
//       className={`bg-white min-h-screen transition-opacity duration-500 ${
//         loaded ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       <Header />
//       <CardList />
//     </main>
//   );
// }
