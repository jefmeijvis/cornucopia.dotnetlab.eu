import type { CardMapping } from "../../domain/card/CardMapping";

export function addToMapping(cardName: string, index: number, mapping: CardMapping) {
  const key = cardName.toLowerCase();
  if (!mapping[key]) {
    mapping[key] = [];
  }
  mapping[key].push(index);
}
