function hasKeywordArgs (args) {
  if (args.length !== 1) {
    return false;
  }

  var first = args[0];

  // handle null as only arg
  if (!first) {
    return false;
  }

  return ['error', 'value'].some(function (arg) {
    return first.hasOwnProperty(arg);
  });
}

module.exports = function () {
  var error, value, callback;

  if (hasKeywordArgs(arguments)) {
    var args = arguments[0];
    error    = args.error;
    value    = args.value;
    callback = args.callback;
  } else {
    error    = arguments[0];
    value    = arguments[1];
    callback = arguments[2];
  }

  if (callback) {
    callback(error, error ? null : value);
  } else {
    return new Promise(function (resolve, reject) {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  }
};
