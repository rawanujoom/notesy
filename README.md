Notesy
A terminal based (CLI) application allowing users to easily create and manage a list of categorized notes

Business Requirements
Using only the terminal, a user should be able to perform the following actions:

List the notes in the database

All Notes: node notes.js --list
Notes in a category: node notes.js --list school
Add a note to the database.

i.e. `node notes.js --add "This is fun" --category school
Users should be able to delete a single note

node notes.js --delete id
Example
notesy.gif

Technical Requirements
The application will be created with the following overall architecture and methodologies

Node.js
Custom Modules to handle the application logic
input.js will:
Parse the users' input
Map that to a command (i.e. add, delete)
Identify the data to give to the command (i.e. the note text)
notes.js will take a command + it's data and execute it
add, delete, list
Third party modules to handle common cases
Command Line input parsing using a node/npm library
Mongo persistence using Mongoose
ES6 Classes
Persistence using a Mongo Database (NoSQL)
Mongoose Schemas to define and model the data for Mongo
lib/model/notes-schema.js will define the data for a note
Abstracted Data Models representing the Mongo Collections
lib/model/notes-collection.js will be used by notes.js save/delete/query the database
Test Driven Development, using Jest
Tests will be runnable locally
Tests will auto-execute (CI) in your repo using GitHub actions
Tests will use a 3rd party library called supergoose to "mock" the mongo running database
Documented Code using JSDoc
Deployment via NPM
Application Structure (proposed)
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── input.test.js
│   ├── notes.test.js
├── lib
│   ├── input.js
│   ├── model
│   │   ├── notes-collection.js
│   │   └── notes-schema.js
│   ├── notes.js
├── notes.js
└── package.json
Development Process, Milestones
Phase 1: Application Setup
Basic Input & Output from the command line, with flags and arguments
Phase 2: Testing and Engineering
Uses Classes and Object Orientation
Uses TDD Practices
Integrates with an online CI framework
Phase 3: Persistence
Notes may be assigned a category and will be saved in a database
Notes may be viewed as a list
Notes my be deleted
Phase 4: Fit and Finish
Data Models are tuned
App is Fully Tested
App is Fully Documented
Notesy is Deployed to NPM and Installable