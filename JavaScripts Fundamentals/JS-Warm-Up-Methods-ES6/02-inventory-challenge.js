let inventory = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 45000, stock: 5 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 1200, stock: 0 },
  { id: 3, name: 'Keyboard', category: 'Electronics', price: 2500, stock: 12 },
  { id: 4, name: 'Notebook', category: 'Stationery', price: 150, stock: 50 },
  { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 1800, stock: 3 }
];

function electronicsStocks() {
  return inventory.filter(product => product.stock > 0 && product.category === 'Electronics')
                  // .map(product => product.category === 'Electronics');
}
console.log("1. Available Electronics:",electronicsStocks());


const discountedPrice = inventory.map(({name, price}) => ({
  name,
  salePrice: 0.1 * price
}));

console.log("2. Discounted Price:",discountedPrice);

function remainingStock() {
  return inventory.reduce((sum, item) => sum + (item.price * item.stock),0);
}

console.log("3. Total Inventory Value:",remainingStock());

const newInventory = [...inventory, {id: 6, name: 'Earphones', category: 'Electronics', price: 800, stock: 15}];

console.log("4. New Inventory List:",newInventory);