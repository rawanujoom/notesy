#!/usr/bin/env node
'use strict';
const mongoose = require ('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/nots';
mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const note = new Note();
const options = new Input();

note.execute(options);
