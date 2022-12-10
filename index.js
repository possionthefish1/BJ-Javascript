let player = {
    name: "Goby",
    chips: 900,
    }

let cards = []
let amount = 0
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let narrator = document.getElementById("narrator-el")

playerEl.textContent = player.name + ": $" + player.chips
narrator.textContent = "Welcome! press 'START GAME' to try your luck!"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    hasBlackJack = false
    if (isAlive === false){
    amount = 2
    narrator.textContent = "You drew " + amount +  " cards!"
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()    
    }
    else if (isAlive === true && hasBlackJack === true){
        console.log('Not Bad! now try again.')
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame() 
        }
    else {
        narrator.textContent = 'You\'re in a middle of a game!'
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack with only " + amount + ' cards in hand!' 
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        amount += 1
        narrator.textContent = "You drew " + amount +  " cards!"
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
    else if (isAlive === true && hasBlackJack === true){
        narrator.textContent = 'You already has a blackjack! select "START GAME" and try to win more!'
    }
    else{
        narrator.textContent = 'You already lost! select "START GAME" to try again.'
    }
}
