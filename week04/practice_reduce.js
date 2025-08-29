const cart = [
    {productId: 1001, price: 500, quantity: 2 },
    {productId: 1002, price: 10, quantity: 3},
    {productId: 1003, price: 5, quantity: 10}
]

console.log({"total":cart.reduce((acc, value) => (value.price * value.quantity) + acc, 0)})