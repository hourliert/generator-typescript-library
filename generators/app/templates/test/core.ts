/// <reference path="../lib//all.d.ts" />

import * as chai from 'chai';
import * as sinon from 'sinon';

import {MyLibrary} from '../lib/core';

let expect = chai.expect;

describe('My Library', function() {
  let lib,
      config;
  
  beforeEach (() => {
    config = {
      name: 'Thomas'
    };
    lib = new MyLibrary(config);
  });
  
  afterEach(() => {
    lib = null;
  });
  
  it ('should be defined', () => {
    expect(lib).to.be.ok;
  });
  
  it ('get the default computed name', () => {
    lib = new MyLibrary();
    expect(lib.name).to.be.equal('Bob Moran');
  });
  
  it ('get the computed name', () => {
    expect(lib.name).to.be.equal('Thomas Moran');
  });
});