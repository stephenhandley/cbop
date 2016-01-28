# cbop
Callback or promise

Support for functions accepting optional callback. If callback is passed, it is called with (error, value) otherwise Promise is returned.

## example
```js

var cbop = require('cbop');

function doDatDaDoDatDaDoDatDerp (derp, optionalCb) {
  var value = null;
  var error = null;

  try {
    value = derp + derp + derp;
  } catch (err) {
    error = err;
  }

  return cbop({
    error    : error,
    value    : value,
    callback : optionalCb
  })

  // or can call by positional args
  return cbop(error, value, optionalCb);
}

doDatDaDoDatDaDoDatDerp('DERP!', function (error, value) {
  console.log('zomg', error, value);
});

doDatDaDoDatDaDoDatDerp('ZORP!')
  .then(function (value) {
    console.log('zomg2: the return of zomg', value);
  }).catch(function (error) {
    console.log('OH NOOOOO NOT ZOMG', error);
  });
```
