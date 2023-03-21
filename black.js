let cards = []
let sum = 0
let hashBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// or
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    Name: "Per",
    Chips: 145
}

let playerEl = document.getElementById("Player-el")
playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 11) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackJack"
        hashBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hashBlackJack === false) {
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()
    }
}