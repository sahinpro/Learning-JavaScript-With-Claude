// একটা Dog class বানাও
// property: name, sound
// method: makeSound() → "{name} says {sound}"

class Dog {
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }
    makeSound(){
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog1 = new Dog("Rex", "Bhow");
const dog2 = new Dog("Tommy", "Woof");

dog1.makeSound(); // "Rex says Bhow"
dog2.makeSound(); // "Tommy says Woof"


// একটা Light class বানাও
// property: isOn (শুরুতে false)
// method: turnOn() → isOn = true করবে, "Light is ON" print করবে
// method: turnOff() → isOn = false করবে, "Light is OFF" print করবে
// method: status() → isOn যদি true হয় "ON" নাহলে "OFF" return করবে

class Light {
  constructor(isOn = false) {
    this.isOn = isOn;
  }
  turnOn(){
    this.isOn=true;
    return "Light is ON";
  }
  turnOff(){
    this.isOn=false;
    return "Light is OFF";
  }
  status(){
    return this.isOn?"ON":"OFF";
  }
}

const bedroomLight = new Light();
console.log(bedroomLight.status()); // "OFF"
bedroomLight.turnOn();              // "Light is ON"
console.log(bedroomLight.status()); // "ON"
bedroomLight.turnOff();             // "Light is OFF"
console.log(bedroomLight.status()); // "OFF"



// একটা Counter class বানাও
// property: count (শুরুতে 0)
// method: increment() → count বাড়াবে ১ করে
// method: decrement() → count কমাবে ১ করে
// method: reset() → count কে 0 করবে
// method: getCount() → current count return করবে

class Counter {
    constructor(count=0){
        this.count=count;
    }
    increment(){
         this.count++;
         return this.count;
    }
    decrement(){
        this.count--;
        return this.count;
    }
    reset(){
        return this.count=0;
    }
    getCount(){
        return this.count;
    }
}

const myCounter = new Counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // 3
myCounter.decrement();
console.log(myCounter.getCount()); // 2
myCounter.reset();
console.log(myCounter.getCount()); // 0