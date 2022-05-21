(function () {
    //The CardDeck array
        let CardDeck = [
            {
                card: "TwoOfClubs",
                cardvalue: 2,
                imgFile: "images/cards/2_of_clubs.svg"
            },
            {
                card: "TwoOfDiamonds",
                cardvalue: 2,
                imgFile: "images/cards/2_of_diamonds.svg"
            },
            {
                card: "TwoOfHearts",
                cardvalue: 2,
                imgFile: "images/cards/2_of_hearts.svg"
            },
            {
                card: "TwoOfSpades",
                cardvalue: 2,
                imgFile: "images/cards/2_of_spades.svg"
            },
            {
                card: "ThreeOfClubs",
                cardvalue: 3,
                imgFile: "images/cards/3_of_clubs.svg"
            },
            {
                card: "ThreeOfDiamonds",
                cardvalue: 3,
                imgFile: "images/cards/3_of_diamonds.svg"
            },
            {
                card: "ThreeOfHearts",
                cardvalue: 3,
                imgFile: "images/cards/3_of_hearts.svg"
            },
            {
                card: "ThreeOfSpades",
                cardvalue: 3,
                imgFile: "images/cards/3_of_spades.svg"
            },
            {
                card: "FourOfClubs",
                cardvalue: 4,
                imgFile: "images/cards/4_of_clubs.svg"
            },
            {
                card: "FourOfDiamonds",
                cardvalue: 4,
                imgFile: "images/cards/4_of_diamonds.svg"
            },
            {
                card: "FourOfHearts",
                cardvalue: 4,
                imgFile: "images/cards/4_of_hearts.svg"
            },
            {
                card: "FourOfSpades",
                cardvalue: 4,
                imgFile: "images/cards/4_of_spades.svg"
            },
            {
                card: "FiveOfClubs",
                cardvalue: 5,
                imgFile: "images/cards/5_of_clubs.svg"
            },
            {
                card: "FiveOfDiamonds",
                cardvalue: 5,
                imgFile: "images/cards/5_of_diamonds.svg"
            },
            {
                card: "FiveOfHearts",
                cardvalue: 5,
                imgFile: "images/cards/5_of_hearts.svg"
            },
            {
                card: "FiveOfSpades",
                cardvalue: 5,
                imgFile: "images/cards/5_of_spades.svg"
            },
            {
                card: "SixOfClubs",
                cardvalue: 6,
                imgFile: "images/cards/6_of_clubs.svg"
            },
            {
                card: "SixOfDiamonds",
                cardvalue: 6,
                imgFile: "images/cards/6_of_diamonds.svg"
            },
            {
                card: "SixOfHearts",
                cardvalue: 6,
                imgFile: "images/cards/6_of_hearts.svg"
            },
            {
                card: "SixOfSpades",
                cardvalue: 6,
                imgFile: "images/cards/6_of_spades.svg"
            },
            {
                card: "SevenOfClubs",
                cardvalue: 7,
                imgFile: "images/cards/7_of_clubs.svg"
            },
            {
                card: "SevenOfDiamonds",
                cardvalue: 7,
                imgFile: "images/cards/7_of_diamonds.svg"
            },
            {
                card: "SevenOfHearts",
                cardvalue: 7,
                imgFile: "images/cards/7_of_hearts.svg"
            },
            {
                card: "SevenOfSpades",
                cardvalue: 7,
                imgFile: "images/cards/7_of_spades.svg"
            },
            {
                card: "EightOfClubs",
                cardvalue: 8,
                imgFile: "images/cards/8_of_clubs.svg"
            },
            {
                card: "EightOfDiamonds",
                cardvalue: 8,
                imgFile: "images/cards/8_of_diamonds.svg"
            },
            {
                card: "EightOfHearts",
                cardvalue: 8,
                imgFile: "images/cards/8_of_hearts.svg"
            },
            {
                card: "EightOfSpades",
                cardvalue: 8,
                imgFile: "images/cards/8_of_spades.svg"
            },
            {
                card: "NineOfClubs",
                cardvalue: 9,
                imgFile: "images/cards/9_of_clubs.svg"
            },
            {
                card: "NineOfDiamonds",
                cardvalue: 9,
                imgFile: "images/cards/9_of_diamonds.svg"
            },
            {
                card: "NineOfHearts",
                cardvalue: 9,
                imgFile: "images/cards/9_of_hearts.svg"
            },            {
                card: "NineOfSpades",
                cardvalue: 9,
                imgFile: "images/cards/9_of_spades.svg"
            },
            {
                card: "TenOfClubs",
                cardvalue: 10,
                imgFile: "images/cards/10_of_clubs.svg"
            },
            {
                card: "TenOfDiamonds",
                cardvalue: 10,
                imgFile: "images/cards/10_of_diamonds.svg"
            },
            {
                card: "TenOfHearts",
                cardvalue: 10,
                imgFile: "images/cards/10_of_hearts.svg"
            },
            {
                card: "TenOfSpades",
                cardvalue: 10,
                imgFile: "images/cards/10_of_spades.svg"
            },
            {
                card: "AceOfSpades",
                cardvalue: 11,
                imgFile: "images/cards/ace_of_clubs.svg"
            },
            {
                card: "AceOfDiamonds",
                cardvalue: 11,
                imgFile: "images/cards/ace_of_diamonds.svg"
            },
            {
                card: "AceOfSpades",
                cardvalue: 11,
                imgFile: "images/cards/ace_of_hearts.svg"
            },
            {
                card: "AceOfSpades",
                cardvalue: 11,
                imgFile: "images/cards/ace_of_spades.svg"
            },
            {
                card: "JackOfClubs",
                cardvalue: 10,
                imgFile: "images/cards/jack_of_clubs.svg"
            },
            {
                card: "JackOfDiamonds",
                cardvalue: 10,
                imgFile: "images/cards/jack_of_diamonds.svg"
            },
            {
                card: "JackOfHearts",
                cardvalue: 10,
                imgFile: "images/cards/jack_of_hearts.svg"
            },
            {
                card: "JackOfSpades",
                cardvalue: 10,
                imgFile: "images/cards/jack_of_spades.svg"
            },
            {
                card: "QueenOfClubs",
                cardvalue: 10,
                imgFile: "images/cards/queen_of_clubs.svg"
            },
            {
                card: "QueenOfDiamonds",
                cardvalue: 10,
                imgFile: "images/cards/queen_of_diamonds.svg"
            },
            {
                card: "QueenOfHearts",
                cardvalue: 10,
                imgFile: "images/cards/queen_of_hearts.svg"
            },
            {
                card: "QueenOfSpades",
                cardvalue: 10,
                imgFile: "images/cards/queen_of_spades.svg"
            },
            {
                card: "KingOfClubs",
                cardvalue: 10,
                imgFile: "images/cards/king_of_clubs.svg"
            },
            {
                card: "KingOfDiamonds",
                cardvalue: 10,
                imgFile: "images/cards/king_of_diamonds.svg"
            },
            {
                card: "KingOfHearts",
                cardvalue: 10,
                imgFile: "images/cards/king_of_hearts.svg"
            },
            {
                card: "KingOfSpades",
                cardvalue: 10,
                imgFile: "images/cards/king_of_spades.svg"
            },
        ]
    console.log(CardDeck)


    let CurrentHandPlayerArray = []
    let CurrentHandDealerArray = []


    let FirstCardsGivenToPlayerIndexNumber
    let FirstCardsGivenToComputerIndexNumber

    let CurrentHandDealerValue = 0;
    let CurrentHandPlayerValue = 0;

    let FirstCardsPlayer
    let FirstCardsDealer

    const Result = document.getElementById("Result");
    const StartButton = document.getElementById("StartGame");
    const HitButton = document.getElementById("Hit");
    const StandButton = document.getElementById("Stand");
    const PlayerScore = document.getElementById("PlayersScore");
    const DealersScore = document.getElementById("DealersScore");

    //Added this so the Hit and Stand buttons aren't visible untill the game has started
    StandButton.style.display = "none"
    HitButton.style.display = "none"


    //The function that starts the game
        const StartGameGivingOutPlayerCards = () => {
            //letting the code run twice
            for (let i=0; i<2; i++) {
                //This part is all about the player getting their first two cards
                //picks out a index number of one of the cards from the array
                FirstCardsGivenToPlayerIndexNumber = Math.floor(Math.random()*CardDeck.length)
                //picks out the card by the index number
                FirstCardsPlayer = CardDeck[FirstCardsGivenToPlayerIndexNumber];
                //push the card that has been drawn/hit from the deck into the array that serves as the current player's hands
                CurrentHandPlayerArray.push(FirstCardsPlayer)
                //add the value of the card to the current value of the player's hands
                CurrentHandPlayerValue += FirstCardsPlayer.cardvalue;
                //Showing the image from the drawn card on the players side of the table
                const FirstPlayerCardsShown = document.createElement("img");
                //Picks out the current card that's in the player's hand
                FirstPlayerCardsShown.src = CurrentHandPlayerArray[CurrentHandPlayerArray.length -1].imgFile
                document.getElementById("PlayersCards").appendChild(FirstPlayerCardsShown)
                //removes the chosen card from the deck
                CardDeck.splice(FirstCardsGivenToPlayerIndexNumber,1);
                //console logged everything to double check, it is working as intented

                //This part is all about the dealer getting their first two cards
                FirstCardsGivenToComputerIndexNumber = Math.floor(Math.random()*CardDeck.length)
                FirstCardsDealer = CardDeck[FirstCardsGivenToComputerIndexNumber];
                CurrentHandDealerArray.push(FirstCardsDealer)
                CurrentHandDealerValue += FirstCardsDealer.cardvalue;

            }
            //I have put this part of the code outside of the loop, because I want the second card to not be shown to the player
            const FirstCardsDealerShown = document.createElement("img");
            FirstCardsDealerShown.src = CurrentHandDealerArray[CurrentHandDealerArray.length -1].imgFile
            document.getElementById("DealersCards").appendChild(FirstCardsDealerShown)
            CardDeck.splice(FirstCardsGivenToComputerIndexNumber,1);

            let SecondCardDealerHidden = document.createElement("img");
            //This part has been adjusted, so it shows the backside of the second card
            SecondCardDealerHidden.src = "images/cards/yugioh.jpg"
            SecondCardDealerHidden.id = "SecondCardBackside"
            document.getElementById("DealersCards").appendChild(SecondCardDealerHidden)
            CardDeck.splice(FirstCardsGivenToComputerIndexNumber,1);

            PlayerScore.innerHTML = CurrentHandPlayerValue;

            StartButton.style.display = "none"
            StandButton.style.display = "inline"
            HitButton.style.display = "inline"


            if (CurrentHandPlayerValue === 21 && CurrentHandDealerValue<21 ||
                //Normally I wouldn't add the code under here, but as of now, Aces still only count as 11's, and not as 1's when the current value of cards exceeds that of 21.
            CurrentHandPlayerValue === 21 && CurrentHandDealerValue>21){
                StandButton.style.display = "none"
                HitButton.style.display = "none"
                    Result.innerHTML = "BLACKJACK, you won!"
                PlayerStands()
            }
        }
        StartButton.addEventListener("click",StartGameGivingOutPlayerCards)

    const PlayerHits = () => {
            let PlayerHitsCardIndexNumber = Math.floor(Math.random()*CardDeck.length);
            let PlayerHitsCard = CardDeck[PlayerHitsCardIndexNumber];
            CurrentHandPlayerArray.push(PlayerHitsCard)
        CurrentHandPlayerValue += PlayerHitsCard.cardvalue;
        const PlayerHitsCardShown = document.createElement("img");
        PlayerHitsCardShown.src = CurrentHandPlayerArray[CurrentHandPlayerArray.length -1].imgFile;
        document.getElementById("PlayersCards").appendChild(PlayerHitsCardShown);
        CardDeck.splice(PlayerHitsCardIndexNumber,1);
        PlayerScore.innerHTML = CurrentHandPlayerValue
        if (CurrentHandPlayerValue>21){
            PlayerStands()
        }
        else if (CurrentHandPlayerValue === 21) {
            //function that player stands immediately
        }
    }
    HitButton.addEventListener("click", PlayerHits);

    const PlayerStands = () => {
        const FlipSecondCard = document.getElementById("SecondCardBackside");
        FlipSecondCard.src = CurrentHandDealerArray[0].imgFile;
        DealersScore.innerHTML = CurrentHandDealerValue;
        if (CurrentHandDealerValue === 21 && CurrentHandPlayerValue<21){
            Result.innerHTML = "The dealer won with a natural 21, GG EZ!"
        }
        else if (CurrentHandPlayerValue>21){
            Result.innerHTML = "You BUSTED, You went over the score of 21 yA NUTcase!"
        }

        else if (CurrentHandPlayerValue<21){
            while (CurrentHandDealerValue<17){
                let DealerHitsCardIndexNumber = Math.floor(Math.random()*CardDeck.length);
                let DealerHitsCard = CardDeck[DealerHitsCardIndexNumber];
                CurrentHandDealerArray.push(DealerHitsCard);
                CurrentHandDealerValue += DealerHitsCard.cardvalue;
                const DealerHitsCardShown = document.createElement("img");
                DealerHitsCardShown.src = CurrentHandDealerArray [CurrentHandDealerArray.length -1].imgFile;
                document.getElementById("DealersCards").appendChild(DealerHitsCardShown);
                CardDeck.splice(DealerHitsCardIndexNumber,1);
                if (CurrentHandDealerValue>17){
                    break
                }
            }
            DealersScore.innerHTML = CurrentHandDealerValue;
            if (CurrentHandPlayerValue>CurrentHandDealerValue &&
            CurrentHandPlayerValue<21) {
                Result.innerHTML = "Congratulations, you won!";
            }
            else if (CurrentHandPlayerValue === CurrentHandDealerValue){
                Result.innerHTML = "You tied, don't worry champ you'll get 'em next time!";
            }
            else if (CurrentHandPlayerValue < CurrentHandDealerValue && CurrentHandDealerValue>21){
                Result.innerHTML = "The dealer blew it, you won champ!";
            }
            else {
                Result.innerHTML = "You lose, go get 'em next time champ";
            }
        }

        StandButton.style.display = "none"
        HitButton.style.display = "none"
        const PlayAgainButton = document.createElement("button");
        PlayAgainButton.id = "PlayAgain"
        PlayAgainButton.innerHTML = "Play Again"
        document.getElementById("StartAndPlayAgain").appendChild(PlayAgainButton)
        const PlayAgain = () => {
            location.reload()
        }
        PlayAgainButton.addEventListener("click", PlayAgain);

    }
    StandButton.addEventListener("click", PlayerStands);

})();