
class Bankcard{
    constructor(holderName,balance){
        this.holderName=holderName;
        this.balance=balance;
    }
     pay(amount){
        try {
            if (typeof amount !=="number") {
                throw new Error("Amount should be a number");
            }
            if (amount <=0) {
                throw new Error("Amount Must be a greaterthan 0");
            }
            if (this.balance<amount) {
                throw new Error("Insufficient Balance");
            }
            this.balance-=amount;
            return `Payment is sucessfull. Remaining ${this.balance}`;
        } catch (error) {
            return `Payment failed: ${error.message}`
        }
     }
}

const card = new Bankcard("Sahin ALam", 50000);
console.log(card.pay(60000));
console.log(card.pay(50000));
console.log(card.pay(0));