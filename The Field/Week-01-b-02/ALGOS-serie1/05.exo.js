drinks = [
    { name: 'lemonade', price: 10 },
    { name: 'lime', price: 10 },
    { name: 'coke', price: 8 },
    { name: 'vodka', price: 17 },
    { name: 'water', price: 3 },
]

function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
}

console.log(sortDrinkByPrice(drinks)) /*➞ [
    {name: "water", price: 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
]*/
