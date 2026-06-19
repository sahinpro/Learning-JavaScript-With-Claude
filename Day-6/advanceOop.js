// Animal class — parent
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

// Dog class — child, Animal থেকে inherit করছে
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("Rex");
console.log(dog.eat()); // "Rex is eating" — Animal থেকে পেলো!
console.log(dog.bark()); // "Rex is barking" — নিজের method


class Animal {
    constructor(name) {
        this.name = name;
        this.alive = true;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // ← parent এর constructor কে call করো
        this.breed = breed; // নিজের নতুন property
    }
}

const dog = new Dog("Rex", "Labrador");
console.log(dog.name);  // "Rex" — parent থেকে এলো
console.log(dog.breed); // "Labrador" — child এর নিজের
console.log(dog.alive); // true — parent থেকে এলো