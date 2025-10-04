
                // *****************************************
                //              WAR CARD GAME
                // *****************************************


// Deck class representing a full deck of 52 cards
class Deck {
    constructor() {
        this.cards = []; // Will hold all card objects
        this.cardRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]; 
        this.cardSuits = ["Hearts", "Diamonds", "Spades", "Clubs"]; 
    }

    // Create all 52 cards by combining each suit with each rank
    buildDeck() {
        for (let suit of this.cardSuits) {
            for (let i = 0; i < this.cardRanks.length; i++) {
                let rank = this.cardRanks[i];
                this.cards.push({
                    name: `${rank} of ${suit}`, 
                    // Assign numeric value: Ace = 1, 2 = 2, ..., Jack = 11, Queen = 12, King = 13
                    value: i + 1  
                });
            }
        }
    }

    // Shuffle cards
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Pick a random index between 0 and i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap cards[i] with cards[j]
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}


// Class representing the game (2 players)
class Game {
    constructor() {
        // Create two players with score and empty hand
        this.player1 = { name: 'Player 1', score: 0, hand: [] };
        this.player2 = { name: 'Player 2', score: 0, hand: [] };
    }

    start() {
        // Step 1: Create a deck and shuffle it
        const deck = new Deck();
        deck.buildDeck();   // Create all 52 cards
        deck.shuffle();     // Shuffle the deck randomly

        // Step 2: Deal cards equally to both players
        for (let card of deck.cards) {
            if (this.player1.hand.length <= this.player2.hand.length) {
                this.player1.hand.push(card); // Give card to Player 1
            } else {
                this.player2.hand.push(card); // Give card to Player 2
            }
        }

        // Step 3: Play rounds
        const rounds = this.player1.hand.length; // Each has 26 cards
        for (let i = 0; i < rounds; i++) {
            const p1Card = this.player1.hand[i]; // Player 1's card
            const p2Card = this.player2.hand[i]; // Player 2's card

            // Compare values
            if (p1Card.value > p2Card.value) {
                this.player1.score++; // Player 1 gets a point
                console.log(`
                    P1 Card: ${p1Card.name}
                    P2 Card: ${p2Card.name}
                    Player 1 wins the round!
                    Current Score:
                    P1: ${this.player1.score}
                    P2: ${this.player2.score}
                `);
            } else if (p2Card.value > p1Card.value) {
                this.player2.score++; // Player 2 gets a point
                console.log(`
                    P1 Card: ${p1Card.name}
                    P2 Card: ${p2Card.name}
                    Player 2 wins the round!
                    Current Score:
                    P1: ${this.player1.score}
                    P2: ${this.player2.score}
                `);
            } else {
                // If both cards are equal...Tie
                console.log(`
                    P1 Card: ${p1Card.name}
                    P2 Card: ${p2Card.name}
                    Round tied!
                `);
            }
        }

        // Step 4: Show the Winner
        this.displayWinner();
    }

    //Compare the total score of Player1 and Player2
    displayWinner() {
        const points = this.player1.score - this.player2.score;
        
        if ( points > 0) {
            console.log(`
                Player 1 Wins the Game!
                Final Score:
                P1: ${this.player1.score}
                P2: ${this.player2.score}
            `);
        } else if ( points < 0) {
            console.log(`
                Player 2 Wins the Game!
                Final Score:
                P1: ${this.player1.score}
                P2: ${this.player2.score}
            `);
        } else {
            console.log('Tie!');
        }
    }
}

// Step 5: Create a new game and start it
const game = new Game();
game.start()

