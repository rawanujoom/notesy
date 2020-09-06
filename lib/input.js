#!/usr/bin/env node
'use strict';

const minimist = require('minimist');

function Input() {
    const args = minimist(process.argv.slice(2));
    console.log(" args minimist >>>>> ", args)
    this.method = this.checkMethod(args.method);
    this.note = this.checknote(args.note);
}
Input.prototype.checkMethod = function (method = ''){
    let validMethods = /--add|-a/i;
    if(validMethods.test(method)){
        return  method 
    }
    else{
        return validMethods.test(method) ? method : 'PLEASE ADD A VALID METHOD'

    }

}
Input.prototype.checknote = function(note = ''){
    if (note){
        return note
    } else {

        return (note)  ? note : 'PLEASE ADD A NOTE'
    }
}
module.exports = Input;
