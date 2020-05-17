import { HANABI_CARDS, HANABI_COLORS, createDeck } from '../src/deck-generator';

describe('Deck Generator', () => {
  it('should export const HANABI_COLORS', () => {
    expect(HANABI_COLORS).toEqual({
      BLUE: 'blue',
      GREEN: 'green',
      RED: 'red',
      WHITE: 'white',
      YELLOW: 'yellow',
    });
  });

  it('should export const HANABI_CARDS with 5 suits and 5 numbers with correct distributions', () => {
    const expectedNumberOfCardsOfRank = {
      1: 3,
      2: 2,
      3: 2,
      4: 2,
      5: 1,
    };

    const foundCards = {};
    Object.keys(HANABI_COLORS).forEach((color) => {
      foundCards[color] = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
    });

    HANABI_CARDS.forEach((card) => {
      foundCards[card.color][card.rank] += 1;
    });

    Object.values(foundCards).forEach((foundCardsOfColor) => {
      expect(foundCardsOfColor).toEqual(expectedNumberOfCardsOfRank);
    });
  });

  it('createDeck shuffles the HANABI_CARDS constant and returns a new array of cards', () => {
    function sortHanabiDeck(a, b) {
      return a.color.compareTo(b.color) + a.rank.compareTo(b.rank);
    }

    const shuffledDeck = createDeck();
    const otherShuffledDeck = createDeck();

    expect(shuffledDeck).not.toEqual(otherShuffledDeck);
    expect(shuffledDeck).not.toEqual(HANABI_CARDS);
    expect(otherShuffledDeck).not.toEqual(HANABI_CARDS);
    expect(shuffledDeck.sort(sortHanabiDeck)).toEqual(
      HANABI_CARDS.sort(sortHanabiDeck),
    );
    expect(otherShuffledDeck.sort(sortHanabiDeck)).toEqual(
      HANABI_CARDS.sort(sortHanabiDeck),
    );
  });
});
