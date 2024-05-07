function getTotalPrice(myArrayObject) {
    return myArrayObject
        .reduce((acc, product) => {
            return acc + product.price * product.quantity
        }, 0)
        .toFixed(1)
}

// 1 bottle of milk:
console.log(getTotalPrice([{ product: 'Milk', quantity: 1, price: 1.5 }])) //➞ 1.5

// 1 bottle of milk & 1 box of cereals:
console.log(
    getTotalPrice([
        { product: 'Milk', quantity: 1, price: 1.5 },
        { product: 'Cereals', quantity: 1, price: 2.5 },
    ])
) //➞ 4

// 3 bottles of milk:
console.log(getTotalPrice([{ product: 'Milk', quantity: 3, price: 1.5 }])) //➞ 4.5

// Several groceries:
console.log(
    getTotalPrice([
        { product: 'Milk', quantity: 1, price: 1.5 },
        { product: 'Eggs', quantity: 12, price: 0.1 },
        { product: 'Bread', quantity: 2, price: 1.6 },
        { product: 'Cheese', quantity: 1, price: 4.5 },
    ])
) //➞ 10.4

// Some cheap candy:
console.log(
    getTotalPrice([
        { product: 'Chocolate', quantity: 1, price: 0.1 },
        { product: 'Lollipop', quantity: 1, price: 0.2 },
    ])
) //➞ 0.3
