import { getCardBySuitAndName } from '../../../domain/card/cardController';
import type { PageServerLoad } from './$types';
 
export const load = (({ params }) => {
  return {
    info: 
    {
      suit: params.suit,
      card: params.card
    },
    card : getCardBySuitAndName(params.suit, params.card),
  };
}) satisfies PageServerLoad;