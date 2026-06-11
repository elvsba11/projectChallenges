// Warm up 8 — Object-Oriented Programming (OOP) Inheritance:

// Blue print

class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    return `My name is ${this.name}, I'm a ${this.role}.`;
  }
}

// Extend the behaviour of Character
class Hero extends Character {
  constructor(name, role, weapon) {
    super(name, role);
    this.name = name;
    this.role = role;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} attack using ${this.weapon}`;
  }
}

// Object Intantiation
const myHero = new Hero("Arthur", "Knight", "Excalibur");
// Output
console.log(myHero.introduce());
console.log(myHero.attack());
