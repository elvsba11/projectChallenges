let foods = [
  { name: 'Burger', price: 120 },
  { name: 'Pizza', price: 250 },
  { name: 'Fries', price: 80 },
  { name: 'Milk Tea', price: 95 }
];

displayFoodsName()

function getFoodsPrice() {
  return foods.filter(food => food.price >= 100);
}

function getFoodsName() {
  return foods.map(food => food.name);
}

function getFoodsTotal() {
  return foods.reduce((acc, sum) => acc + sum.price,0);
}

console.log(getFoodsPrice());
console.log(getFoodsName());
console.log(getFoodsTotal());

function displayFoodsName() {
  foods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = `${food.name}-----------${food.price}`;

    document.getElementById('showList').appendChild(li);
  })
}
