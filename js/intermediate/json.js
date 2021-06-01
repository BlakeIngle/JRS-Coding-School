const BANANA_PRICE = 0.3 // in dollars

var myKitchen = {
    bananas: 5, // a number of bananas in the kitchen
    forks: 11,
    bowls: 8,
    apples: 3,
    milk: 1,
    moneySpent: 0,
    storeVisist: 0
}

function buyBananas() {
    myKitchen.bananas += 5;
    myKitchen.moneySpent += BANANA_PRICE * 6;
    myKitchen.storeVisist++;
}

function eatBanana() {

    myKitchen.bananas--;
    if (myKitchen.bananas == 0) {
        buyBananas();
    }
}


// eat 10 bananas
for (let i = 0; i < 100; i++) {
    eatBanana();
}

console.log(myKitchen.moneySpent, myKitchen.storeVisist)