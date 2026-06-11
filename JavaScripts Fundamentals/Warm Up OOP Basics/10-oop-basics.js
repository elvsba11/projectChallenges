// Warm up 7 — Object-Oriented Programming (OOP) Basics:

// Blueprint
class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.level = 1;
  }

  introduce() {
    return `My name is ${this.name}, I'm a ${this.role} (Level ${this.level})`;
  }
}

// Object Instantiation
const p1 = new Character("Juan", "Warrior");
const p2 = new Character("Maria", "Mage");
// Output
console.log(p1.introduce());
console.log(p2.introduce());
