let developers = [
  { name: "Alex", role: "Frontend", experience: 3, remote: true },
  { name: "Berto", role: "Backend", experience: 5, remote: false },
  { name: "Charlie", role: "Frontend", experience: 1, remote: true },
  { name: "Diana", role: "Fullstack", experience: 7, remote: true },
];

// 1. filter + Destructuring
console.log("\n======Remote Developers=======");
const devRemote = developers.filter(({ remote }) => remote === true);
// Log all name who is remote
devRemote.forEach(({ name }) => {
  console.log("Work From Home:", name);
});

// 2. map + Rest/Spread Operator
console.log("\n======Seniority Check======\n");
function isSenior() {
  return developers.map(({ experience, ...rest }) => ({
    experience,
    ...rest, //the rest of data
    seniority: experience >= 5 ? "Senior" : "Junior", //Shortcut for if else
  }));
}

console.log(isSenior());

// 3. reduce + Destructuring
console.log("======Overall Experience=====\n");
function totalExp() {
  return developers.reduce((sum, { experience }) => sum + experience, 0);
}

console.log(totalExp());
