
var expect =require('chai').expect
// var assert = require("assert")
describe('optimist testcase', function(){
  // 多出来的选项要提示，比如b
  it('undefined1keys', function(){
    var cmd = ("ls -xy ").split(' ')
    var rr= require('../')(cmd)
    var opti_self =  
      rr
        .boolean(['x','y'])
        .demand("x y".split(" "))     
        .describe('x', 'Load a file')
        .describe('y', 'Save a file')

    var argv = opti_self.argv     
  }) 
  it('parseString', function(){
    // var cmd = ("ls -xy").split(' ')
    var rr= require('../')()
    var opti_self =  
      rr
        .boolean(['x','y'])
        .demand("x y".split(" "))     
        .describe('x', 'Load a file')
        .describe('y', 'Save a file')

    var argv = opti_self.parseString("ls -xy")
    // console.log(argv)
    expect(argv.x).to.equal(true)
    expect(argv.y).to.equal(true) 
  }) 
  it('simple ParseString', function(){
    var argv = require('../')()
        .boolean(['x','y'])
        .demand("x y".split(" "))     
        .describe('x', 'Load a file')
        .describe('y', 'Save a file')
        .parseString("ls -xy")
    // console.log(argv)
    expect(argv.x).to.equal(true)
    expect(argv.y).to.equal(true)
  }) 
  it('help', function(){
      var cmd = ("ls -xy").split(' ')
      var rr= require('../')(cmd)
      var core = rr.
      usage("Usage:\nls list file ").
      boolean(['x','y'])
      .demand("x".split(" "))     
      .describe('x', 'Load a file')
      .describe('y', 'Save a file')
    var argv = core.argv
    ;
    expect(core.help().length>0).to.equal(true)
  }) 
  // undefined keys tips
  it('undefined keys tips', function(){
      var cmd = ("ls -xyz").split(' ')
      var rr= require('../')(cmd)
      var core = rr.
      usage("Usage:\nls list file ").
      boolean(['x','y'])
      .demand("x".split(" "))     
      .describe('x', 'Load a file')
      .describe('y', 'Save a file')
      try{
        var argv = core.argv
      }catch(e){
         expect(e.message.length>0).to.equal(true)  
         // expect(e.message).to.equal(true)  
      }
  }) 
}) 
