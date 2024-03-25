export interface ProactiveControl {
  id: number;
  value: string;
}
export interface ProactiveControlRelation {
  index: number;
  cards: CardCategories;
}
export interface CardCategories {
  [category: string]: string[]; // This says each category is a key with an array of strings as its value
}
