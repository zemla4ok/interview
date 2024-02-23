let apples = 5;
if (true) {
  let apples = 10;
  console.log(apples); //
}
console.log(apples); //
//
//
//
//
if (true) {
  let apples = 10;

  console.log(apples); //
}

console.log(apples); //
//
//
//
//
function sayHi() {
  if (true) {
    var phrase = "Привет";
  }

  console.log(phrase); //
}

sayHi();
console.log(phrase);    //
//
//
//
//
var double;

function double(num) {
  return (num * 2);
}

console.log(typeof double); //


// ==================================================================

let animal = {
  full: false,

  eat() {
    this.full = true;
  },

  eatStatus() {
    console.log(this.full);
  }
};

let rabbit = {
  __proto__: animal
};

animal.eatStatus(); //
animal.eat();
animal.eatStatus(); //

rabbit.eatStatus(); //
rabbit.eat();
rabbit.eatStatus(); //

// что будет выводиться
// + переписать на классы