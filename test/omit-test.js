/*eslint-env mocha*/
'use strict';

const assert = require('assert');
const omit = require('../omit');

describe('omit', () => {

  it('doesn\'t include = covers', () => {
    omit.test();
  });

});
