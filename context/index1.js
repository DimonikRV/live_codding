console.log(this);

function sayHi() {
  console.log(`Hello ${this.userName}`);
}

const user = {
  userName: 'Dima',
};
const sayHiBinded = sayHi.bind(user);
sayHiBinded();
