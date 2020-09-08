'use strict';
const Note = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('the Note module', () => {

  it('execute() check for valid method console it', () =>{

    const note = new Note();
    note.execute({add : 'note'});
    expect(console.log).toHaveBeenCalled();
  });

});
