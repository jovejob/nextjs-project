import type { Metadata } from 'next';
import HomePageClient from '@components/HomePageClient';
import { store } from '@/features/store';
import { fetchCards } from '@/features/cards/cardsSlice';
import { fetchUser } from '@/features/user/userSlice';

/** Fetch Data on the Server */
async function fetchData() {
  // Fetch Cards & User on the server
  await store.dispatch(fetchCards()).unwrap();
  await store.dispatch(fetchUser()).unwrap();

  // Extract Redux State
  return {
    cards: store.getState().cards.cards,
    user: store.getState().user,
  };
}

/** Dynamic Metadata with JSON-LD */
export async function generateMetadata(): Promise<Metadata> {
  const { user } = await fetchData();
  return {
    title: `Welcome ${user.username} - Next.js SPA`,
    description: `Explore Next.js with ${user.username}.`,
    openGraph: {
      title: `Welcome ${user.username}`,
      description: `Explore a Next.js single-page app.`,
    },
    other: {
      jsonLd: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: user.username,
        description: `User profile for ${user.username}`,
      }),
    },
  };
}

/** Hydrate Redux and Render Page */
export default async function Page() {
  const { user, cards } = await fetchData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(user) }}
      />
      <HomePageClient username={user.username} cards={cards} />
    </>
  );
}
