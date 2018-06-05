/*eslint-env mocha*/
'use strict';

const assert = require('assert');
const no = require('../no');

describe('no', () => {

  it('include, but doesn\'t use = doesn\'t cover', () => {
    no.test();
  });

});
