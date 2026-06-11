let sales = [
  {
    orderId: 5001,
    customer: "Juan",
    items: ["T-Shirt", "Caps"],
    total: 1500,
    status: "Delivered",
  },
  {
    orderId: 5002,
    customer: "Maria",
    items: ["Dress"],
    total: 2500,
    status: "Pending",
  },
  {
    orderId: 5003,
    customer: "Pedro",
    items: ["Shoes", "Socks"],
    total: 4500,
    status: "Delivered",
  },
  {
    orderId: 5004,
    customer: "Kiko",
    items: ["Cap"],
    total: 600,
    status: "Cancelled",
  },
  {
    orderId: 5005,
    customer: "Lisa",
    items: ["Jackets"],
    total: 3200,
    status: "Delivered",
  },
];

//1. filter + Destructuring + forEach
console.log("\n=======Order Status=======\n");
const orderStatus = sales.filter(({ status }) => status === "Delivered");
// Log each status = delivered
orderStatus.forEach(({ customer, total }) => {
  console.log(`Thank you ${customer} for buying, worth of ₱${total}!`);
});

//2. map + Rest/Spread Operator
console.log("\n=======Shipping Fee=======\n");
const shippingFee = sales.map(({ total, ...rest }) => {
  return {
    total,
    ...rest,
    shippingFee: total >= 3000 ? 0 : 150,
  };
});

console.log(shippingFee);

//3. reduce + Destructuring
console.log("\n=======Total Revenue=======\n");
//filter status = delivered
const orderDelivered = sales.filter(({ status }) => status === "Delivered");
// add all filtered status = delivered
const total = orderDelivered.reduce((sum, { total }) => sum + total, 0);

console.log(total);
