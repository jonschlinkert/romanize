/*!
 * romanize <https://github.com/jonschlinkert/romanize>
 * Based on http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function(num) {
  var numeral = '';
  var lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (var key in lookup) {
    while (num >= lookup[key]) {
      numeral += key;
      num -= lookup[key];
    }
  }
  return numeral;
};
