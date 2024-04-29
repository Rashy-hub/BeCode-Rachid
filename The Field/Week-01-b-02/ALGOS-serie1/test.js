function getTotalPrice(groceries) {
    let totalPrice = groceries.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    return totalPrice
}

let value = getTotalPrice([
    { product: 'Milk', quantity: 1, price: 1.5 },
    { product: 'Eggs', quantity: 12, price: 0.1 },
    { product: 'Bread', quantity: 2, price: 1.6 },
    { product: 'Cheese', quantity: 1, price: 4.5 },
])

console.log(value)
