class Phone {
  constructor(brand, color, battery) {
    this.brand = brand;
    this.color = color;
    this.battery = battery;
  }
  call(number) {
    console.log(`${this.brand} is calling to ${number} `);
  }
  charge() {
    console.log(`${this.brand} is charged ${this.battery}`);
  }
}

const nokia = new Phone("Nokia", "Black", 100);
const samsung = new Phone("Samsung", "Purple", 89);

console.log(nokia.call(934923984235));
console.log(samsung.charge());

class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate() {
    this.speed += 10;
  }
}
const car1 = new Car("Toyota");
const car2 = new Car("Honda");
car1.accelerate();
car1.accelerate();
console.log(car1.speed, car2.speed);