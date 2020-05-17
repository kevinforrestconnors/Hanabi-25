export const HANABI_COLORS = {
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
  WHITE: 'white',
  YELLOW: 'yellow',
};

export const HANABI_CARDS = (() => {
  const cards = [];

  Object.keys(HANABI_COLORS).forEach((color) => {
    cards.push({ color, rank: 1 });
    cards.push({ color, rank: 1 });
    cards.push({ color, rank: 1 });
    cards.push({ color, rank: 2 });
    cards.push({ color, rank: 2 });
    cards.push({ color, rank: 3 });
    cards.push({ color, rank: 3 });
    cards.push({ color, rank: 4 });
    cards.push({ color, rank: 4 });
    cards.push({ color, rank: 5 });
  });

  return cards;
})();

export function createDeck() {
  const cards = [];
}
