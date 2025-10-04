const expect = chai.expect;

describe('War Card Game', function() {

  it('Deck.buildDeck() creates 52 cards', function() {
    const deck = new Deck();
    deck.buildDeck();
    expect(deck.cards.length).to.equal(52);
  });

  it('Game.displayWinner()', function() {
    const game = new Game();
    game.player1.score = 3;
    game.player2.score = 1;
    game.displayWinner();
  });

});
