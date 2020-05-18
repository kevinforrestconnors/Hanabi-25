import { chance } from '../src/globals';

describe('Deck Generator', () => {
  it('should export a chance instance', () => {
    // can't think of a way to test this more comprehensively atm
    // but it's also not important
    expect(chance.bool).toBeDefined();
  });
});
