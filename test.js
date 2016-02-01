var Assert = require('assert');
var cbop = require('./index');

var error = new Error('oh no');
var value = 101;

module.exports = {
  "should work with keyword args" : {
    "using promises" : {
      "when error" : function (done) {
        cbop({
          error : error
        }).catch(function (err) {
          Assert.equal(err, error);
          done();
        });
      },

      "when no error" : function (done) {
        cbop({
          value : value
        }).then(function (val) {
          Assert.equal(val, value);
          done();
        });
      },

      "when no error or value" : function (done) {
        cbop().then(function (val) {
          Assert.equal(val, null);
          done();
        });
      }
    },

    "using callbacks" : {
      "when error" : function (done) {
        cbop({
          error    : error,
          callback : function (err, val) {
            Assert.equal(err, error);
            Assert.equal(val, null);
            done();
          }
        });
      },

      "when no error" : function (done) {
        cbop({
          value    : value,
          callback : function (err, val) {
            Assert.equal(err, null);
            Assert.equal(val, value);
            done();
          }
        });
      },

      "when no error or value" : function (done) {
        cbop({
          callback : function (err, val) {
            Assert.equal(err, null);
            Assert.equal(val, null);
            done();
          }
        });
      }
    }
  },

  "should work with positional args" : {
    "using promises" : {
      "when error" : function (done) {
        cbop(error, null).catch(function (err) {
          Assert.equal(err, error);
          done();
        });
      },

      "when no error" : function (done) {
        cbop(null, value).then(function (val) {
          Assert.equal(val, value);
          done();
        });
      },

      "when no error and no value" : function (done) {
        cbop(null).then(function (val) {
          Assert.equal(val, null);
          done();
        });
      }
    },

    "using callbacks" : {
      "when error" : function (done) {
        cbop(error, null, function (err, val) {
          Assert.equal(err, error);
          Assert.equal(val, null);
          done();
        });
      },

      "when no error" : function (done) {
        cbop(null, value, function (err, val) {
          Assert.equal(err, null);
          Assert.equal(val, value);
          done();
        });
      },

      "when no error and no value" : function (done) {
        cbop(null, null, function (err, val) {
          Assert.equal(err, null);
          Assert.equal(val, null);
          done();
        });
      }
    }
  }
};
