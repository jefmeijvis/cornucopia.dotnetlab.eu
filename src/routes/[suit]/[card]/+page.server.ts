import { getCardBySuitAndName, getCardsFlat } from '../../../domain/card/cardController';
import type { PageServerLoad } from './$types';
 
export const load = (({ params }) => {
  return {
    card : getCardBySuitAndName(params.suit, params.card),
    cards : getCardsFlat(),
  };
}) satisfies PageServerLoad;