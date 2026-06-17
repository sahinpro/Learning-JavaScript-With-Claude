class Phone {
    constructor(brand,color,battery) {
            this.brand=brand;
            this.color=color;
            this.battery=battery;
    }
    call(number){
        console.log(`${this.brand} is calling `);
    }
    charge(){
        console.log(`${this.brand} is charged ${this.battery}`)
    }
}

const nokia= new Phone("Nokia","Black",100);
const samsung= new Phone("Samsung","Purple",89);


console.log(nokia);
console.log(samsung);