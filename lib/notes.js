'use strict';

const note = {};

note.execute = function (option) {
    switch (option.method) {
        case '--add' || '-a':
            if (add(option.note)) {
                console.log(`${option.note} added`);
            } else {
                console.log('PLEASE ADD A NOTE');
            }
            break;
        default:
            console.log('PLEASE ADD A NOTE');

    }
    
}
function add(note){
    if (note === undefined){
        return false
    }else{
        console.log({id:random() , note:note});
    }
}
function random (){
    Math.floor((Math.random()*100))
}
module.exports = note;