let orders = [
  { item: 'Burger', price: 120, quantity: 2 },
  { item: 'Pizza', price: 250, quantity: 1 },
  { item: 'Fries', price: 80, quantity: 3 },
  { item: 'Milk Tea', price: 95, quantity: 2 },
  { item: 'Soda', price: 50, quantity: 4 }
];

function orderPrice() {
  return orders.filter(o=>o.price >= 100);
}

function itemNames() {
  return orders.map(o => o.item);
}

// Tamang bersyon:
function totalCost() {
  return orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
}

console.log(orderPrice());
console.log(itemNames());
console.log(totalCost());