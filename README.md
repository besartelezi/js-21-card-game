# Blackjack, the Jack Black of card games
[Play the game here!](https://besartelezi.github.io/js-21-card-game/)

## Rules
In order to recreate the game, we should first learn what the rules are. After playing the game online a few times and using the ancient divine art of all programmers before me (Googling stuff), I have written down all the rules, everything you need, and how you should play the game in the list under this text. [This website](https://bicyclecards.com/how-to-play/blackjack/) helped me understand the rules. </br>

### Necessities
* We need a standard 52-card pack:
  * I will try to make an array that will be used as the deck (const DeckOfCards = ["One", "1"], ["King", "10"],...)
### Objective of the game
* The player attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.
### Value of cards
* Every card is its own value, (Hearts of two = 2, Spade of Nine = 9)
* Each individual player chooses themselves if the Ace card is worth 1 or 11,  in all the games I've played the card had a value of 11, so that's what I'm gonna do
  * I think adding an option where the player can decide for themselves what the value of the ace should be would be extremely fun.
  * Face cards (King, Queen, Jack) are worth 10 points
### Betting Mechanic
* I won't be implementing this for now, however, if I have some time left I'd definitely like to do this
  * I'm thinking I should just create a let variable with the amount of chips in it, and then let the player choose between different buttons that will be used as chips to raise the amount they'd like to gamble.
### The Deal
* Once the bet has been placed (Which won't be relevant in this game for now), the dealer gives one card face up to the player and then one card face up to themselves. The player then gets a second face-up card, but the dealer gets his card face down.
* If the player gets a natural 21 (a card with a value of 10 and an ace), then they immediately win. If both the player and the dealer get a natural 21, then it's a tie.
  * In case of a tie when gambling is involved, the player gets their own chips back.
* If the player wins, he gets his own chips and those of the dealer.
* If the dealer wins, he gets his own chips and those of the player.
### The Play
* The player goes first, and they'll have to decide weather they want to "stand" or "hit"
  * ~~Stand = A Stand is an entity psychically generated by its owner, referred to as a Stand User (??????????????????, Sutando Tsukai). It generally presents itself as a figure hovering over or near the user and possesses abilities beyond that of an ordinary human, which, depending on the Stand User, can be wielded for good or evil.~~
  * Stand = To not ask for another card, the higher the value of your current cards is, the more likely you are to press on this button
  * Hit = Ask the dealer for another card in an attempt to get closer to a count of 21 or get 21 exactly.
    * The higher your current value of cards is, the less likely you are to click this button.
### The Dealers Play
* This one is extremely important, because the dealer has some rules he must follow no matter what. This means it is very easy to program. 
* When the dealer has served every player (just a single player in this case), the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand.
  * The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.

#### There's a ton of gambling related rules, that I will try to implement and then write out as well if I have the time.

## Rules are just boneless programming scripts 
With all the rules written down and a couple of L's taken by me from the Blackjack games I've found online, I am a **HUUUUGE** step closer to creating my very own Blackjack game:
My current objectives are (I did not write the list in chronological order):
* Creating a HTML, CSS, and JS page
* Creating an array of objects in JS that will serve as the deck of cards
* Write out a function of the way I see the dealer hitting once the player presses the "stand" button cards (if his current value of cards is 16 or less, let him hit cards until he gets a value higher than 21)
* Create let variables for the current hand that the player has, and one of the dealer
* Write out a card hitting function, whenever a specific card has been hit, it needs to be removed from the deck. And once the game is done, all cards should be added back to the deck.
  * The function needs to be called out when:
    * The player presser the hit button
    * At the very start, when both the player and the dealer get two cards each.
    * The computer hits a card
* Creating a function that gives out two cards respectively to the player and the dealer, with one card of the dealer being face down
  * I might have to add a "Backside" value and a "front-side" value to the card objects. 
    * Or this Won't be needed, and I'll just add one jpeg of the back of a card that will be used by every second card of the dealer.

#### That's all I got for now, planning is one thing but actually coding is another one entirely.

## Some Thoughts
At first, I thought I had to remove the cards that will be used from the deck entirely, but now I'm thinking it might be better to put them in another array.
I'm thinking of creating two new arrays, one will be called 'PlayersHand' and the other will be 'ComputersHand'. </br>

When a card had been taken from the deck/it has been hit, I want the card itself to move to the other array. Then, I want to use that array to take out the links to the card images and show them on the webpage.

Thanks to some help of the coaches, I was able to do this the way I wanted. At this point, I have finished the startup of the game. </br>

At the very start, both the player and the dealer get two cards, both cards of the player can be seen while one card of the dealer is hidden.
If the dealer has a blackjack, he immediately wins. I have found some bugs with the Ace card however, and I intend to fix them once I have the chance:
* The issue was that when the dealer won with a blackjack, the cards he shows were just both a copy of the same card, instead of two different cards. This issue was resolved luckily.

Now that the play function is working, I'll have to focus on the player's options of hitting and standing, and then the actions the dealer has to commit. I already have a clear vision of how the dealer will act. 
I will also have to move the "blackjack" part of my play function to the dealers and the players side of actions.

## When in Doubt, Write it Out
I am struggling a bit on how to go further with the game, that's why I am going to write out everything I have and everything I have yet to achieve and cross out whatever I've finished 

I have a function that gives out two cards at the beginning to the player and the dealer. All cards are a part of an array, so when the cards are in the hands of the player and dealer, they're taken out of the deck.

- [x] The starting Process is working as intended, I just want to add an option that if the total amount of the cards their value = 21, the player can't hit and skips straight to standing without having to press anything else. If the dealer also has a 21 after that without drawing any extra cards, it's a draw and the game resets, or if the dealer doesn't have a 21, the game ends and the player wins.
- [x] I want to create the hitting function, that the player can keep using until he goes over the limit of a 21 cardvalue in their hands. 
- [x] I want to create a stand function, that will be used as the dealer's actions. So once the player clicks "stand", it goes to the dealers turn.
- [x] if the dealer has a cardvalue of 16 or less, he will keep hitting until he gets a cardvalue of above 17.~~ If during the hitting process, the dealer gets a higher cardvalue than 21, they lose.
- [x] Once the dealer gets a cardvalue of higher than 17, there will be an if function that:
  - [x] When players cards > dealers cards = player wins (when gambling, you get all the money in the wager)
  - [x] When player cards > dealers cards = dealer wins (when gambling, the dealer get all the money in the wager)
  - [x] When player cards = dealers cards = push = a tie (when gambling, nobody loses their money)


Most importantly, I need to make sure the user experience goes smoothly, this means, to automate anything that can be automated, remove buttons when they aren't needed anymore, etc.
- [x] The Hit and Stand buttons are hidden until the game has started and it's the player's turn, once he stands, the buttons are removed again. 
- [x] After game is finished, the start button needs to transform into a "restart" button
- [x] If the player hits and they get over 21, the game needs to be over, they shouldn't be able to hit anymore and their only option should be to play again.
  - [x] When this happens, the dealer's second card needs to be flipped over, and an alert/text should appear that says "dealer won" and that your score was too high.
- [x] The task description mentioned something about using prompts when needed, double-check if I have met those requirements.
- [x] Styling (this can be done at the end)

Checklist with different results that can happen in blackjack
- [x] Player > Dealer && Player < 21 && Dealer < 21 = Player Wins
- [x] Player < Dealer && Player < 21 && Dealer < 21 = Dealer Wins
- [x] Player = Dealer = Tie
- [x] Player > 21 = Player Busts = Dealer Wins
- [x] Dealer > 21 = Dealer Busts = Player Wins

These are the things that should be checked in the start game function
- [ ] Player gets 21 with only 2 cards && Dealer has 2 cards, but they aren't valued together at 21 = Player Wins
- [ ] Dealer gets 21 with only 2 cards && Player has 2 cards, but they aren't valued together at 21 = Dealer Wins
- [ ] Player gets 21 with only 2 cards && Dealer has 2 cards that **are** valued together at 21 = Draw of BlackJacks- 

### Fun Features I could add if I had the time
- [ ] Let the player know when they win with a natural 21 at Blackjack, or when the dealer wins with a natural 21.
  - [ ] The way I will do this is by adding '&&' to my if statements, so that when the player has a natural 21, the computer can check that by looking at the value of the cards AND the amount of cards in the player's hands (by checking the length of the array that contains all the cards the player currently has).
- [ ] Let the Ace be worth 1 point if the player or dealer hits this card and if the total of the cards will be valued at above 21 if the ace is counted as having a value of 11
- [ ] A gambling mechanic
- [ ] Create custom players in the game (computers)
- [ ] Make the styling look better than it is right now
- [ ] Add a card-counter, showing the player how many cards there are currently in the deck
- [ ] Have the dealer be D'Arby from the popular anime JoJo's Bizarre Adventure, and while playing, let him sometimes say one of his famous quotes
    * I created a similar mechanic like this for my cookie clicker game [that you can play here!](https://besartelezi.github.io/coockie-clicker/)
- [x] When the player wins with a natural 21, that it's shown on the screen that they won by Blackjack! This also counts for the dealer. And if both parties have a natural 21, that it ends up in a draw.

## What time? Reflection Time!
Something I could definitely work on in the future, is making my HTML more SEO-friendly by focussing more on the semantics. I have used a lot of divs at places where I could certainly place another element. </br>

Something that helped me out a **TON** in making this project, was a previous assignment I had to make for BeCode, [Here's a link to the assignment in question!](https://github.com/besartelezi/js-complete-course/tree/main/07-fetch/02-details). In this assignment, we had to use an external array and fetch it. </br>

For this project, I started out with creating my own array of objects, the array being the card deck and each single card being an object. I added the card name, the value of the card, and a link to the image file to it. I liked doing the project this way, because even though creating the array was time-consuming, it eventually saved me much more time on other parts of the project. </br>

I also learned that the equations we used to do in high school math class actually helped me understand javascript a lot, so show your old math teachers some love party people.