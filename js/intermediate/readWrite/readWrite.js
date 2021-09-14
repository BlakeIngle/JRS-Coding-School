const fs = require('fs')
const readline = require("readline")

fs.readFile('numbers.txt', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString())
});

fs.appendFile('allPokerhands.txt', "1,1,1,2,1,2,1,4,1,5,5\n", () => { })

fs.readFile('poker-hand-testing.data', (err, data) => {
    if (err) {
        throw err;
    }

    data = data.toString();
    // console.log(data)
    // console.log(data.replace(/(?:\r\n|\r|\n)/g, ",").split(","))
    var pokerHands = data.split("\r\n");
    for (let i in pokerHands) {
        pokerHands[i] = pokerHands[i].split(",")
    }
    printHand(pokerHands[0])

    ///////////
    var fullHouses = findAllHandsOfType(pokerHands, 6);
    console.log(fullHouses, fullHouses.length)
    var r1 = Math.floor(Math.random() * 1000000)
    var r2 = Math.floor(Math.random() * 1000000)
    var hand1 = pokerHands[r1]
    var hand2 = pokerHands[r2]
    var winner = compareHands(hand1, hand2);
    printHand(hand1)
    console.log("VS.")
    printHand(hand2);
    if (winner) {
        printHand(winner)
    } else {
        console.log("Draw")
    }
    console.log("wins")
});

function countRoyalFlushes(data) {

    while (false) {
        // look at one line
        // look at last number in line
        // if 9
        // is royal flush
        // count++
        // push card hand to an array
    }
}

function printHand(hand) {
    let output = "";
    for (let i = 0; i < hand.length - 1; i += 2) {
        output += suitToString(hand[i]) + rankToString(hand[i + 1]) + "\n"
    }
    console.log(output);
}

function suitToString(suit) {

    switch (Number(suit)) {
        case 1: return "♥️"
        case 2: return "♠︎"
        case 3: return "♦︎"
        case 4: return "♣︎"
    }
}

function rankToString(rank) {

    switch (Number(rank)) {
        case 11: return "Jack"
        case 12: return "Queen"
        case 13: return "King"
        case 1: return "Ace"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        default: return rank;
    }
}

/**
 * 
 * @param {*} pokerHands an array of length 11 that represents a hand
 * @param {*} type - value of the hand 0-9, 9 being a royal flush, 6 a full house etc.
 * @returns array of all hands found that are of the same type as 'type' param
 */
function findAllHandsOfType(pokerHands, type) {
    var handsOfType = [];
    for (let hand of pokerHands) {
        if (hand[10] == type) {
            handsOfType.push(hand)
        }
    }
    return handsOfType;
}

function compareHands(hand1, hand2) {
    if (!hand1 || !hand2) {
        return null;
    }

    if (hand1[10] > hand2[10]) {
        return hand1;
    } else if (hand1[10] < hand2[10]) {
        return hand2;
    } else {
        // they have the same value
        let highCard1 = 0;
        let highCard2 = 0;
        for (let i = 1; i < hand1.length; i += 2) {
            if (hand1[i] > highCard1) {
                highCard1 = hand1[i];
            }
            if (hand2[i] > highCard2) {
                highCard2 = hand2[i];
            }
        }

        if (highCard1 > highCard2) {
            return hand1;
        } else if (highCard1 < highCard2) {
            return hand2;
        } else {
            return null;
        }
    }
}