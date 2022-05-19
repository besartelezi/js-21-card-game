(function () {
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
                card: "TwoOfHears",
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
    





})();