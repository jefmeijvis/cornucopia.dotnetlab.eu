import { getCardBySuitAndName } from '../../../domain/card/cardController';
import { getSuits } from '../../../domain/suit/suitController';
import type { PageServerLoad } from './$types';
 
export const load = (({ params }) => {
  return {
    info: 
    {
      suit: params.suit,
      card: params.card
    },
    card : getCardBySuitAndName(params.suit, params.card),
    suits : getSuits(),
  };
}) satisfies PageServerLoad;