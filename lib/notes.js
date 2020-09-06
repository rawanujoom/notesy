'use strict';

const note = {};

note.execute = function (option) {
    console.log(option.method);
    switch (option.method) {
        case '--add':
        case '-a':
            if (add(option.note)) {
                console.log(`${option.note} added`);
            } else {
                console.log('PLEASE ADD A NOTE2');
            }
            break;
        default:
            console.log('PLEASE ADD A NOTE3');

    }
    
}
function add(note){
    if (note === undefined || note === ''){
        return false
    }else{
        console.log({id:random() , note:note});
        return true
    }
}
function random (){
    return  Math.floor((Math.random()*100))
     
}
module.exports = note;