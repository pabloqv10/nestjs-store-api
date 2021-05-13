const personName: string = 'Pablo';
const age = 19;
const suma = (a: number, b: number) => {
  return a + b;
};


class Person {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const pablo = new Person(age, personName);
pablo.getSummary();
