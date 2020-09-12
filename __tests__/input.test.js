jest.mock('minimist');
const minimist = require ('minimist');
minimist.mockImplementation(()=>{
  return{
    any:'any',
    add :'note'
  };
});
const Input = require('../lib/input.js');
describe('the Input module', ()=>{
  it('valid() will check if the it is validated or not',()=>{
    let test = new Input();
    expect(test.valid()).toBeTruthy();
  });
  it('checknote() will check if the it is validated',()=>{
    let test = new Input();
    expect(test.checknote()).toBeTruthy();
  });
  it('checkMethod() will check if the it is validated',()=>{
    let test = new Input();
    expect(test.checkMethod('--add')).toEqual('--add');
  });
  it('checkMethod() will check if the it is validated',()=>{
    let test = new Input();
    expect(test.checkMethod('-a')).toEqual('-a');
  });

});
