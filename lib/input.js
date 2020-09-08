#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
class Input {
  constructor() {
    // const secArgs = {}

    const args = minimist(process.argv.slice(2));
    args['method'] = process.argv.slice(2)[0];
    args['note'] = process.argv.slice(2)[1];
    console.log(' args minimist >>>>> ', args);
    this.method = this.checkMethod(args.method);
    this.note = this.checknote(args.note);
  }
  checkMethod(method = '') {
    let validMethods = /--add|-a/i;
    if (validMethods.test(method)) {
      return method;
    }
    else {
      return validMethods.test(method) ? method : 'PLEASE ADD A VALID METHOD';

    }

  }
  checknote(note = '') {
    if (note) {
      return note;
    } else {

      return (note) ? note : 'PLEASE ADD A NOTE1';
    }
  }
  valid() {

    return this.method && this.note;
  }

}

module.exports = Input;
