// ***************** 1 *****************

console.log('one');

setTimeout(function() {
  console.log('two');
}, 0);

Promise.resolve().then(function() {
  console.log('three');
})

console.log('four');

// one  four  three  two

// ***************** 2 *****************

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

