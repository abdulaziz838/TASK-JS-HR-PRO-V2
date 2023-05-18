const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class employee {
  constructor(name, postion, yearJoined, salary) {
    this.name = name;
    this.postion = postion;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge() {
    console.log(this.postion, this.name);
  }
}
const employee1 = new employee("abdulaziz", "Engineer", 2007, "1000");
employee1.idBadge();

class Manger extends employee {
  constructor(name, postion, yearJoined, salary, bonusPercentage) {
    super(name, postion, yearJoined, salary);
    this.bonusPercentage;
  }
  salaryIncrease(increaseAmount) {
    increaseAmount = this.salary + increaseAmount;
    console.log(increaseAmount);
  }
}

const Manger1 = new Manger("abdulaziz", "Engineer", 2007, 1000);
console.log(Manger1);

Manger1.salaryIncrease(1000);

const employees = employee.map (
    employeeInfo => '${employeeInfo.name}-${employeeInfo.postion}-${employeeInfo.yearJoined}-${employeeInfo.salary}';
)
