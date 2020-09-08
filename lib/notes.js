'use strict';
const History = require('./models/history.js')
const superagent = require('superagent')

class Note {
  execute(option) {
    console.log(option.method);
    switch (option.method) {
      case '--add':
      case '-a':
        if (this.add(option.note)) {
          superagent(option.method, option.note)
          .then(data =>{
            // SAVE TO DB
            console.log('the datais -------> ', data.body);
          })
          
          // console.log(`${option.note} added`);
        } else {
          console.log('PLEASE ADD A NOTE2');
        }
        break;
      default:
        console.log('PLEASE ADD A NOTE3');

    }

  }
  add(note) {
    if (note === undefined || note === ' ') {
      return false;
    } else {
      console.log({ id: this.random(), note: note });
      return true;
    }
  }
  random() {
    return Math.floor((Math.random() * 100));

  }
}

module.exports = Note;
