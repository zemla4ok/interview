// ***************** 1 *****************

console.log('one');

setTimeout(function() {
  console.log('two');
}, 0);

Promise.resolve().then(function() {
  console.log('three');
});

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


try {
  setTimeout(() => {
    throw Error('err');
  });
} catch(err) {
  console.log(err);
}





setTimeout(() => console.log(1), 0);
while(true) {}
console.log(2);