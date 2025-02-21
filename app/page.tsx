import type { Metadata } from 'next';
import HomePageClient from '@components/HomePageClient';

/** Fetch Cards Data on the Server */
async function fetchCards() {
  const res = await fetch(
    'https://run.mocky.io/v3/c8927342-2c6f-40d7-9ff4-9eee6c02b691',
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  return data.cards; // Extract `cards` array
}

/* Fetch JSON-LD Data on the Server */
async function getJsonLD(username: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: username,
    description: `User profile for ${username}`,
  });
}

/* Dynamic Metadata with JSON-LD */
export async function generateMetadata(): Promise<Metadata> {
  const user = await fetch(
    'https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a'
  ).then((res) => res.json());

  const jsonLd = await getJsonLD(user.username); // Fetch JSON-LD properly

  return {
    title: `Welcome ${user.username} - Next.js SPA`,
    description: `Explore a Next.js single-page app fetching dynamic card data for ${user.username}.`,
    openGraph: {
      title: `Welcome ${user.username} - Next.js SPA`,
      description: `Explore a Next.js single-page app fetching dynamic card data.`,
      images: [{ url: 'https://yourdomain.com/preview.jpg' }],
    },
    other: {
      jsonLd, // JSON-LD is now properly passed
    },
  };
}

/** Fetch JSON-LD Once on the Server */
export default async function Page() {
  const metadata = await generateMetadata(); // Fetch metadata once
  const jsonLd = metadata.other?.jsonLd ?? '{}'; // Extract JSON-LD
  const cards = await fetchCards(); // Fetch cards here

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <HomePageClient cards={cards} />
    </>
  );
}

// import type { Metadata } from 'next';
// import HomePageClient from '@components/HomePageClient';

// /** Fetch JSON-LD data */
// async function getJsonLD() {
//   const response = await fetch(
//     'https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a'
//   );
//   const user = await response.json();

//   return JSON.stringify({
//     '@context': 'https://schema.org',
//     '@type': 'Person',
//     name: user.username,
//     description: `User profile for ${user.username}`,
//   });
// }

// /** ✅ Dynamic Metadata with JSON-LD */
// export async function generateMetadata(): Promise<Metadata> {
//   const user = await fetch(
//     'https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a'
//   ).then((res) => res.json());

//   const jsonLd = await getJsonLD(); // ✅ Fetch JSON-LD here

//   return {
//     title: `Welcome ${user.username} - Next.js SPA`,
//     description: `Explore a Next.js single-page app fetching dynamic card data for ${user.username}.`,
//     openGraph: {
//       title: `Welcome ${user.username} - Next.js SPA`,
//       description: `Explore a Next.js single-page app fetching dynamic card data.`,
//       images: [{ url: 'https://yourdomain.com/preview.jpg' }],
//     },
//     other: {
//       jsonLd,
//     },
//   };
// }

// export default function Page() {
//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: generateMetadata().then((meta) => meta.other?.jsonLd ?? '{}'),
//         }}
//       />
//       <HomePageClient />
//     </>
//   );
// }

// import type { Metadata, ResolvingMetadata } from 'next';
// import HomePageClient from '@components/HomePageClient';

// /** ✅ Dynamic Metadata Generation */
// export async function generateMetadata(
//   { params }: { params: { id?: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // ✅ Fetch Dynamic Data for Metadata (e.g., Page Title)
//   const response = await fetch(
//     'https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a'
//   );
//   const user = await response.json();

//   return {
//     title: `Welcome ${user.username} - Next.js SPA`,
//     description: `Explore a Next.js single-page app fetching dynamic card data for ${user.username}.`,
//     openGraph: {
//       title: `Welcome ${user.username} - Next.js SPA`,
//       description: `Explore a Next.js single-page app fetching dynamic card data.`,
//       images: [{ url: 'https://yourdomain.com/preview.jpg' }],
//     },
//   };
// }

// export default function Page() {
//   return <HomePageClient />;
// }

// import type { Metadata } from 'next';
// import HomePageClient from '@components/HomePageClient';

// /* Use Next.js Metadata API for SEO */
// export const metadata: Metadata = {
//   title: 'Next.js SPA - Card Display',
//   description:
//     'A Next.js single-page app fetching dynamic card data from an API.',
//   keywords: 'Next.js, SPA, SEO, Cards, Mock API',
//   openGraph: {
//     title: 'Next.js SPA - Card Display',
//     description:
//       'A Next.js single-page app fetching dynamic card data from an API.',
//     type: 'website',
//     url: 'https://funzz.com',
//     images: [
//       {
//         url: 'https://funzz.com/preview.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Next.js SPA Preview',
//       },
//     ],
//   },
// };

// export default function Page() {
//   return <HomePageClient />;
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/features/store';
// import { fetchUser } from '@/features/user/userSlice';
// import { fetchCards } from '@/features/cards/cardsSlice';

// import CardsList from '@components/CardsList';
// import Header from '@components/Header';

// const HomePage: React.FC = () => {
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

// export default HomePage;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/features/store';
// import { fetchUser } from '@/features/user/userSlice';
// import { fetchCards } from '@/features/cards/cardsSlice';

// import CardsList from '@components/CardsList';
// import Header from '@components/Header';

// const HomePage: React.FC = () => {
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
//       {/* todo skeleton for better user expirience */}
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

// export default HomePage;
