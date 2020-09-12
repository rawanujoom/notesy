'use strict';
const newNote = require('./models/history.js')
// const superagent = require('superagent')

class Note {
  async execute(option) {
    let note = option.note
    let method = option.method

    // if()
    // console.log('================14', option, '===========');

    switch (option.method) {
      case '--add':
      case '-a':
        // console.log('--------> inside the excute function ')
        let addNote = await this.add(option);
        // console.log('addNote------------> : ', addNote);
        if (addNote) {
          console.log(`the note added ${note}`);
        } else {
          console.log('PLEASE ADD A NOTE2');
        }
        break;
      case '--list':
        if ( note = 'undefined') {
          if (!method) {
            console.error('worng method');
            // break;
          } else { // list all
            console.log('--------> inside the allMyList function ')
            let allMyList = await this.list();
            console.log('allMyList : ', allMyList);
          }
        } else {
          if (!method) {
            console.error('worng method');
            break;
          } else {
            console.log('--------> inside the allMyListByCategory function ')
            let allMyListByCategory = await this.listByCategory(note);
            console.log('allMyListByCategory : ', allMyListByCategory);
          }
        }
        break;
      default:
        console.log('PLEASE ADD A NOTE3');

    }

    // console.log('option------>', option, 'option------>');
    // let returned = await this.save(option)
    // console.log('returned---------> ', returned);

  }

  async add(option) {
    // console.log(option)
    // console.log('SAVING');
    let record = new newNote(option);
    let save = await record.save();
    return save;
  }
  async deleteNote(id) {
    // console.log('>>>>>>********');
    let deletedNote = await newNote.findByIdAndRemove({ _id: id });
    if (deletedNote) {

      return deletedNote;
    } else {
      console.log('the note has deleted');
    }

  }
  async list() {
    // console.log('********');
    let listedNotes = await newNote.find({});

    // console.log('listedNotes =====>', listedNotes);
    return listedNotes;

  }
  async listByCategory(category) {
    console.log('********');
    let listedNotesByCategory = await newNote.find({ categoryDesc: category });

    // console.log('listedNotesByCategory =====>', listedNotesByCategory);
    return listedNotesByCategory;

  }

  // async save(opt) {
  //   let record = new newNote(opt)
  //   let saved = await record.save();
  //   // console.log('saved -------> ', saved);
  //   return saved;

  // }
  // random() {
  //   return Math.floor((Math.random() * 1000));

  // }

}
// deleteNote('5f5bb3cd3e04603954889099')

module.exports = Note;
