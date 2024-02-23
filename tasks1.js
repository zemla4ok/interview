console.log(typeof undefined)              //
console.log(typeof 0)                      //
console.log(typeof 10n)                    //
console.log(typeof true)                   //
console.log(typeof "foo")                  //
console.log(typeof Symbol("id"))           //
console.log(typeof Math)                   //
console.log(typeof null)                   //
console.log(typeof alert)                  //


console.log(Number("   123   "));   //
console.log(Number("123z"));        //
console.log(Number(true));          //
console.log(Number(false));         //


let value = true;
console.log(typeof value);   //

value = String(value);
console.log(typeof value);   //

console.log(Boolean(1));         //
console.log(Boolean(0));         //
console.log(Boolean("Привет!")); //
console.log(Boolean(""));        //

// ==================================================================

let user = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.money;
  }
};

alert(user);       //
alert(+user);      //
alert(user + 500); //

// ==================================================================

let a = {};
let b = a;

alert(a == b);  //
alert(a === b); //

// ==================================================================

let a = {};
let b = {};

alert(a == b); //

// ==================================================================

var a = {};

function clear(a) {
  a.b = 2;
  a = null;
}

clear(a);

console.log(a);     //
console.log(a.b);   //

// ==================================================================

vаr a = {b: 1}, c = Object.create(а);

console.log(c.b); //
delete с.b;
сonsole.log(c.b); //
delete a.b;
сonsole.log(с.b); //
