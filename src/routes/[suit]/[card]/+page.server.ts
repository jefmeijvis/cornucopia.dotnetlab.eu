import type { PageServerLoad } from './$types';
 
export const load = (({ params }) => {
  return {
    info: 
    {
      suit: params.suit,
      card: params.card
    }
  };
}) satisfies PageServerLoad;