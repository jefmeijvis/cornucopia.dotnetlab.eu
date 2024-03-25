import type { ProactiveControl } from "./ProactiveControl";
import type { CardMapping } from "./CardMapping";
import { top10relations } from "./top10relations";
import { proactiveControls } from "./proactiveControls";
import { proactiveControlRelations } from "./proactiveControlRelations";
import { addToMapping } from "../../lib/filesystem/addToMapping";

const CardToProactiveControls: CardMapping = {};
const CardToTop10: CardMapping = {};

// code for card to proactive control mapping:
function processProactiveControls() {
  // for each proactive control, we have a list of cards that are related to it
  proactiveControlRelations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(
          `${category} ${cardNumber}`,
          index,
          CardToProactiveControls
        );
      });
    });
  });
}


// code for card to top10 mapping:
function processTop10() {
  top10relations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(`${category} ${cardNumber}`, index, CardToTop10);
      });
    });
  });
}


export function getTop10IndexesForCard(cardName: string): number[] {
  processTop10();
  const key = cardName.toLowerCase();
  return CardToTop10[key];
}
export function getProactiveControlsForCard(
  cardName: string
): ProactiveControl[] {
  processProactiveControls();
  var key = cardName.toLowerCase();

 var relatedControls = CardToProactiveControls[key] || [];

  var result = proactiveControls.filter((x) => relatedControls.includes(x.id));
  
  return result;
  //return proactiveControls?.filter((x) =>CardToProactiveControls[key].includes(x?.id)) ?? [];
}


