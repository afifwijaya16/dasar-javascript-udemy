const company = "empires and allies";

function sum(first, second) {
  return first + second;
}

class Company {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`hello ${name}, my name is ${this.name}`);
  }
}

export { company as perusahaan, sum as total, Company as Perusahaan };
