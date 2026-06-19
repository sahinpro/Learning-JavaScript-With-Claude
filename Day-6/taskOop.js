// একটা BankCard class বানাও
// property: holderName, balance
// method: pay(amount) → balance কমাবে
//         যদি balance কম থাকে → "Insufficient balance" দেখাবে


class BankCard{
    constructor(holderName,balance){
        this.holderName=holderName;
        this.balance=balance;
    }
    pay(amount){
        if (this.balance>amount) {
            this.balance = this.balance - amount;
        }
        else{
            return console.log("Insufficient balance");
        }

    }
}

const card=new BankCard("Sahin",50000);
card.pay(5000);
console.log(card.balance);

