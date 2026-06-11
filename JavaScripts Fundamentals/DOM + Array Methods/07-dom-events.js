let products = [
  { name: "iPhone", price: 60000 },
  { name: "iPad", price: 45000 },
  { name: "MacBook", price: 80000 },
  { name: "AirPods", price: 12000 },
];

const gadgetList = document.querySelector("#gadget-list");
const filterBtn = document.querySelector("#filter-btn");

// 1. Create a function to display in the screen
// `renderProducts(arrayData)`. It should accept array products,
// Clear first `gadgetList.innerHTML = "";`,
// and loop this (.forEach) to append new list `<li>`.
function renderProducts(arrayData) {
  gadgetList.innerHTML = "";

  arrayData.forEach(({ name, price }) => {
    const li = document.createElement("li");
    li.textContent = `Item Name: ${name} - ${price}`;
    gadgetList.appendChild(li);
  });
}

// first display all data for the first load of page
renderProducts(products);

// 2. wait to click button (Event Listener)
// - put `.addEventListener("click", ...)` the `filterBtn`.
// - Inside callback function:
//   a.filter the `products` array to only get items with `price < 50000`.
//   b. call again the `renderProducts()` but you need to pass the filtered array in the arguments
filterBtn.addEventListener("click", () => {
  const budgetPrice = products.filter(({ price }) => price < 50000);
  renderProducts(budgetPrice);
});
