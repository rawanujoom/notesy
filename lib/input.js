#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
class Input {
  constructor() {
    // const secArgs = {}

    const args = minimist(process.argv.slice(2));
    args['method'] = process.argv.slice(2)[0];
    args['note'] = process.argv.slice(2)[1];
    /////////
    args['category'] = process.argv.slice(2)[2];
    args['categoryDesc'] = process.argv.slice(2)[3];
    //////
    // console.log(' args minimist >>>>> ', args, '<<<<<<<<<<<');

    this.method = this.checkMethod(Object.values(args)[1]);
    this.note = this.checknote(Object.keys(args)[1]);
    //////////
    this.category = this.checkCategory((Object.keys(args)[2]))
    this.categoryDesc = this.checkcategoryDesc((Object.values(args)[3]))

  }
  checkMethod(method) {
    let validMethods = /--add|-a|--list|--delete/i;

    return validMethods.test(method) ? method : 'PLEASE ADD A VALID METHOD';

  }
  checknote(note = '') {
    if (note) {
      return note
    } else {

      return (note) ? note : 'PLEASE ADD A NOTE1'
    }
  }
  checkCategory(category) {
    let validCategorys = /--cat/i;
    return validCategorys.test(category) ? category : 'PLEASE ADD A VALID Category';
  }
  valid() {

    return this.checkMethod && this.checknote
  }
  checkcategoryDesc(theDesc) { 
    return (theDesc != undefined && theDesc != '' )? theDesc : 'PLEASE ADD A VALID Category descrption';
  }
  
}

module.exports = Input;
