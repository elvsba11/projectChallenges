let users = [
  { id: 101, username: "cyber_juan", role: "admin", active: true },
  { id: 102, username: "maria_dev", role: "user", active: false },
  { id: 103, username: "tech_kiko", role: "user", active: true },
  { id: 104, username: "code_lisa", role: "admin", active: false },
];

const activeUser = users.filter(({ active }) => active === true); //Search active

activeUser.forEach(({ username }) => {
  console.log(username); //log the active users
});

console.log(activeUser);

const userStatusExtended = users.map(({ role, ...rest }) => {
  return {
    role,
    ...rest, // users data here
    status: role === "user" ? "restricted" : "full_access", // Shortcut if-else (Ternary Operator)
  };
});

function getUserInfo(id) {
  const userInfo = users.find((user) => user.id === id); //find the id
  return `${userInfo.username} is an ${userInfo.role}`; //log the username and his/her role
}

console.log(getUserInfo(101));
