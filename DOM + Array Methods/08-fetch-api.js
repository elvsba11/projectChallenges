const usersList = document.querySelector("#users-list");
const fetchBtn = document.querySelector("#fetch-btn");

// this URL where we can fetch the data
const API_URL = "https://jsonplaceholder.typicode.com/users";

// 1. Create a function to fetch data
async function getUsers() {
  try {
    // a. Use the `await fetch(API_URL)` to request a data and store it into variable (ex. `response`)
    const res = await fetch(API_URL);
    // b. Convert the response into readable JSON array using the `await response.json()` at and store to variable (ex. `data`)
    const data = await res.json();
    // c. Clear old list `usersList.innerHTML = "";`
    usersList.innerHTML = "";
    // d. Use a `.forEach()` the `data` array you fetch from API.
    //    - destructure the `{ name, email }` each user.
    //    - Creat a `<li>` element and put the text: `${name} (${email})`
    //    - Append into `usersList`.
    data.forEach(({ name, email }) => {
      const li = document.createElement("li");
      li.textContent = `${name} (${email})`;
      usersList.appendChild(li);
    });
  } catch (error) {
    // e. If error found (example, no internet), console log the error message
    console.error("No data found:", error);
  }
}

// 2. Listen to click button to call the function
fetchBtn.addEventListener("click", () => getUsers());
