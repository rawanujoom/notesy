#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const note = new Note()
const options = new Input();

note.execute(options);
