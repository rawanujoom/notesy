'use strict';
const History = require('./models/history.js')
const superagent = require('superagent')

class Note {
  async execute(option) {
    console.log(option.method);
    switch (option.method) {
      case '--add':
      case '-a':
        if (await this.add(option.note)) {
          // superagent(option.method, option.note)
            // .then(data => {
            //   // SAVE TO DB
            //   console.log('the datais -------> ', data);
            // })

          // console.log(`${option.note} added`);
          console.log('--------> inside the excute function ')
        } else {
          console.log('PLEASE ADD A NOTE2');
        }
        break;
      default:
        console.log('PLEASE ADD A NOTE3');

    }
    
    console.log('option------>', option);
    let returned = await this.save(option)
    console.log('returned---------> ', returned);

  }
 async add(note) {
    if (note === undefined || note === ' ') {
      return false;
    } else {
      console.log({ id: this.random(), note: note });
      return true;
    }
  }
  async save(opt) {
    let record = new History(opt)
    let saved = await record.save();
    console.log('saved -------> ', saved);
    return saved;

  }
  random() {
    return Math.floor((Math.random() * 1000));

  }
}

module.exports = Note;
