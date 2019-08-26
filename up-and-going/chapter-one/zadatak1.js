const PDV = 20
const AMOUNT = 100
const ACC = 13

let budget = 520
let price = 0
let itemsPurchased = 0
let accPurchased = 0

function calculatePdvCost (amt) {
  return amt + amt * (PDV / 100)
}

price = calculatePdvCost(AMOUNT)

while (budget >= price) {
  itemsPurchased++
  budget -= price
  if (budget >= ACC) {
    accPurchased++
    budget -= ACC
  }
}

console.log(`You bought ${itemsPurchased} item${itemsPurchased === 1 ? '' : 's'} and ${accPurchased} ${accPurchased === 1 ? 'accessory' : 'accessories'}. \nYou have $${budget} left on your card.`)
