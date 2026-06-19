
class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getSalary() {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(name,baseSalary,bonus){
    super(name,baseSalary);
    this.bonus=bonus;
  }
  getSalary(){
    return this.bonus + this.baseSalary;
  }
}

const emp = new Employee("Karim", 30000);
const mgr = new Manager("Sahin", 50000, 10000);

console.log(emp.getSalary()); // 30000
console.log(mgr.getSalary()); // 60000 (50000 + 10000)
