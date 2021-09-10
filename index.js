let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true 
let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card"
} else if (sum === 21) {
    message = "BlackJack"
    hasBlackJack = true
} else {
    message = "bye bye"
    isAlive = false
}
console.log(message)