/*!
 * romanize <https://github.com/jonschlinkert/romanize>
 * Inspired by http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var numerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

module.exports = function(num) {
  var keys = Object.keys(numerals);
  var numeral = '';
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    while (num >= numerals[key]) {
      numeral += key;
      num -= numerals[key];
    }
  }
  return numeral;
};
