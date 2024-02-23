setTimeout(() => console.log('1'), 1000);

console.log('2');

const a = new Promise((resolve, reject) => {
  console.log('4');
  reject('3');
});

setTimeout(() => console.log('6'), 0);

a.then((res) => console.log(res), (res) => console.log(res)).then(() => console.log('7'));

console.log('5');


//////////////////////////////////////////////////////////////////////


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

//////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////


let apples = 5;
if (true) {
  let apples = 10;
  console.log(apples); //
}
console.log(apples); //
//
//
// //10 5


//////////////////////////////////////////////////////////////////////


if (true) {
  let apples = 10;

  console.log(apples); //
}

console.log(apples); //
//
// //10 ошибка
//

//////////////////////////////////////////////////////////////////////

function sayHi() {
  if (true) {
    var phrase = "Привет";
  }

  console.log(phrase); //
}

sayHi();
console.log(phrase);    //

// привет ошибка

//////////////////////////////////////////////////////////////////////

var double;

function double(num) {
  return (num * 2);
}

console.log(typeof double); //

// function

//////////////////////////////////////////////////////////////////////

let a = {};
let b = a;

alert(a == b);  //
alert(a === b); //

// true true


//////////////////////////////////////////////////////////////////////

let a = {};
let b = {};

alert(a == b); //

// false

//////////////////////////////////////////////////////////////////////

var a = {};

function clear(a) {
  a.b = 2;
  a = null;
}

clear(a);

console.log(a);     // {b: 2}
console.log(a.b);  // 2


//////////////////////////////////////////////////////////////////////

vаr a = {b: 1}, c = Object.create(а);

console.log(c.b); //
delete с.b;
сonsole.log(c.b); // 1
delete a.b;
сonsole.log(с.b); // undefined


//////////////////////////////////////////////////////////////////////

function Foo() {
}

Foo.prototype = {b: 2}

const obj = new Foo();

Foo.prototype = {a: 1}

const obj2 = new Foo();

console.log(obj2.__proto__)


///////////////////////////////////

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); //
  }, 100);
}

//////////////////////////////////////////////////////////////////////


select * from table_1 left join table_2 .....
select * from table_2 right join table_1 .....
