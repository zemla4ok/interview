// ***************** 1 *****************(context)

let user = { name: "Vas" };
let admin = { name: "Paul" };

function sayHi() {
  console.log( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f();   //
admin.f();  //

// Vas  Paul

// ***************** 2 *****************(context)

let user = {
  name: "Dima",
  hi() { console.log(this.name); }
};

let hi = user.hi;
hi();               //

// undefined
// + как сделать, чтобы было не undefined



// ***************** 1 *****************(micro/macro)



// one  four  three  two

// ***************** 2 *****************(micro/macro)

console.log('one');

setTimeout(function () {
  console.log('two');
}, 0);

Promise.resolve()
.then(function () {
  console.log('three');
})
.then(function () {
  console.log('four');
});

console.log('five');

// one   five  three   four  two




// ***************** 1 *****************(promises)

function makeSomething() {
  return Promise.resolve(1);
}
function makeSomethingElse() {
  return Promise.resolve(2);
}
function makeError() {
  return Promise.reject('err');
}

makeSomething()
.then((res) => {
  console.log('first then', res);
  return makeError();
})
.then(res => {
  console.log('second then', res);
  return makeSomethingElse();
})
.catch(err => {
  console.log('catch', err);
})
.then((res) => {
  console.log('third then', res);
  return makeSomething();
})
.finally((res) => {
  console.log('finally', res);
  return makeSomethingElse();
})
.then((res) => {
  console.log('last then', res);
})

//first then 1      catch err     third then undefined      finally undefined     last then 1


// ***************** 1 *****************(closure)
// реализовать пример инкапсуляции

function car(p) {
  let power = p;

  return function() {
    return 6000 / power;
  }
}

let lambo = car(560);


// ***************** 1 *****************(prototypes)

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps );  //

delete rabbit.jumps;

console.log( rabbit.jumps );  //

delete animal.jumps;

console.log( rabbit.jumps );  //

// true   null    undefined

// ***************** 2 *****************(prototypes)

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();


// ***************** 1 *****************
// 1) что будет про происходить?
// 2) как избежать проблемы?

const crypto = require('crypto')

function doHeavyStuff(item) {
  crypto.createHmac('sha256', 'secret').update(new Array(10000).fill(item).join('.')).digest('hex')
}

const arr = new Array(200).fill('something')
doHeavyStuff(arr);

let interval = setInterval(() => {
  console.log('tick!')
  if (arr.length === 0) clearInterval(interval)
}, 0)




const arr = new Array(200).fill('something')
function processChunk() {
  if (arr.length === 0) {
    // код, выполняющийся после обработки всего массива
  } else {
    console.log('processing chunk');
    // выберем 10 элементов и удалим их из массива
    const subarr = arr.splice(0, 10)
    for (const item of subarr) {
      // произведём сложную обработку каждого из элементов
      doHeavyStuff(item)
    }
    // поставим функцию в очередь
    setImmediate(processChunk)
  }
}

processChunk()


// ***************** 1 *****************
// аутентификационный мидлвар


const express = require('express');
const app = express();
const port = 3000;

//.......

app.get(...);
app.post(...);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


// ***************** 1 *****************
// Функция определения анаграммы

anagram('listen', 'silent'); // true
anagram('foo', 'bar'); // false
