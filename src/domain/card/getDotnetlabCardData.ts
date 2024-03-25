import type { ProactiveControl } from "./ProactiveControl";
import type { CardMapping } from "./CardMapping";
import { top10relations } from "./top10relations";
import { proactiveControls } from "./proactiveControls";
import { proactiveControlRelations } from "./proactiveControlRelations";
import { addToMapping } from "../../lib/filesystem/addToMapping";


// code for card to proactive control mapping:
function processProactiveControls() :CardMapping {
  // for each proactive control, we have a list of cards that are related to it
  const cardToProactiveControls: CardMapping = {};
  proactiveControlRelations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(
          `${category} ${cardNumber}`,
          index,
          cardToProactiveControls
        );
      });
    });
  });
  return cardToProactiveControls;
}


// code for card to top10 mapping:
function processTop10():CardMapping {
  const cardToTop10: CardMapping = {};
  top10relations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(`${category} ${cardNumber}`, index, cardToTop10);
      });
    });
  });
  return cardToTop10;
}

export function getTop10IndexesForCard(cardName: string): number[] {
  var cardToTop10 = processTop10();
  const key = cardName.toLowerCase();
  return cardToTop10[key];
}
export function getProactiveControlsForCard(
  cardName: string
): ProactiveControl[] {
  var cardToProactiveControls = processProactiveControls();
  var key = cardName.toLowerCase();
 var relatedControls = cardToProactiveControls[key] || [];
  var result = proactiveControls.filter((x) => relatedControls.includes(x.id));
  return result;
}


