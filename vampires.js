class Vampire {
  name = 'Root';
  age = 454;
  get profile() {
    return `${this.name} is ${this.age} years old`;
  }
}

const v = new Vampire();
v.profile;


const arr = [1,2,3];
arr.length
arr.push(4);
arr.length
