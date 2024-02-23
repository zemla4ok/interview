// ***************** 1 *****************
Promise
.resolve()
.then(() => console.log(1))
.then(() => console.log(2))
.then(() => console.log(3));

Promise
.resolve()
.then(() => console.log(4))
.then(() => console.log(5))
.then(() => console.log(6));

// 1,4,2,5,3,6

// ***************** 2 *****************

Promise
.resolve()
.then(() => console.log(1))
.then(() => {
  setTimeout(() => {
    console.log(2)
  }, 0)
})
.then(() => console.log(3));

// 1,3,2

// ***************** 3 *****************

function makeSomething() {
  return Promise.resolve(1);
}

function makeSomethingElse() {
  return Promise.resolve(2);
}

makeSomething().then((res) => makeSomethingElse()).then(res => console.log(res));

makeSomething().then((res) => {makeSomethingElse()}).then(res => console.log(res));

makeSomething().then(makeSomethingElse).then(res => console.log(res));

makeSomething().then(makeSomethingElse()).then(res => console.log(res));

// 2 undefined  2  1

// ***************** 4 *****************

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
.then((res => {
  console.log('last then', res);
}))


//first then 1      catch err     third then undefined      finally undefined     last then 1


Promise.reject('1')
.then(data => console.log(data))
.then(() => Promise.reject('2'))
.catch(err => console.log(err))
.then(() => console.log('потомy'))

Promise.resolve()
.then(() => console.log(4))
.then(() => console.log(5))
.then(() => console.log(6));
