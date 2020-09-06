#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const note = require('./lib/notes.js');

const options = new Input();

note.execute(options);
