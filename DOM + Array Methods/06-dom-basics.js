let gadgets = [
  { name: "iPhone", price: 60000, type: "Phone" },
  { name: "iPad", price: 45000, type: "Tablet" },
  { name: "MacBook", price: 80000, type: "Laptop" },
];

// 1. Change the title of your store
// 1.1 get the id from html using getElementById or querySelector
const mainTitle = (document.querySelector("#main-title").textContent =
  "My Gadget Store");
// 1.2 get the id from html using getElementById or querySelector for displaying the data list
const productList = document.querySelector("#product-list");

function load() {
  // 1.3 get each name and price
  gadgets.forEach(({ name, price }) => {
    // 1.4 create a list for the data
    const li = document.createElement("li");
    // 1.5 display the data in list element
    li.textContent = `${name}-${price}`;
    // 2. appendChild this method insert the list inside the ul which is productList
    productList.appendChild(li);
  });
}
// 2.1 call this to display on screen
load();
