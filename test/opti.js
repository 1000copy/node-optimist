var shell = require('..');
var expect =require('chai').expect
var _ = require("underscore")
// var assert = require("assert")
describe('op', function(){
  describe('aaap2', function(){
  	// 多出来的选项要提示，比如b
    it('2.1.1', function(){
      	var cmd = ("ls -xyb").split(' ')
      	var rr= require('../')(cmd)
  		var argv = rr.
  			boolean(['x','y'])
  			.demand("x y".split(" "))			
  			.describe('x', 'Load a file')
  			.describe('y', 'Save a file')
  			.argv
  		;
  		var j = Object.keys(argv)
  		console.dir(j);
  		var jj = _.difference(j,["_","$0"])
  		console.dir(jj);
  		console.dir(argv.options);
  		// console.dir(argv);
  		// console.dir([ argv.x, argv.y, argv.z ]);
  		// console.dir(argv._);   
	  }) 
    it.skip('underscore', function(){
        var cmd = ("ls -xyb").split(' ')
        var rr= require('../')(cmd)
      var argv = rr.
        boolean(['x','y'])
        .demand("x y".split(" "))     
        .describe('x', 'Load a file')
        .describe('y', 'Save a file')
        .argv
      ;
      var j = Object.keys(argv)
      console.dir(j);
      var jj = _.difference(j,["_","$0"])
      console.dir(jj);
      console.dir(argv._options.boolean);
      // console.dir(argv);
      // console.dir([ argv.x, argv.y, argv.z ]);
      // console.dir(argv._);   
    }) 
  })
  it('efeee', function(){
    	var cmd = ("ls -xyb").split(' ')
    	var rr= require('../')(cmd)
    	var core = rr.
			boolean(['x','y'])
			.demand("x y".split(" "))			
			.describe('x', 'Load a file')
			.describe('y', 'Save a file')
		var argv = core.argv
		;
		var j = Object.keys(argv)
		// console.dir(j);
		var jj = _.difference(j,["_","$0"])
		// console.dir(jj);
		// console.dir(core._options);
		// 多出来的b，需要提示给用户
		// console.dir(subtract(jj,core._options.boolean))
		expect(_.difference(jj,core._options.boolean)).to.deep.equal(["b"])
		// console.dir(argv);
		// console.dir([ argv.x, argv.y, argv.z ]);
		// console.dir(argv._);   
	}) 
    it('help1', function(){
      var cmd = ("ls -xyb").split(' ')
      var rr= require('../')(cmd)
      var core = rr.
      boolean(['x','y'])
      .demand("x".split(" "))     
      .describe('x', 'Load a file')
      .describe('y', 'Save a file')
    var argv = core.argv
    ;
    console.log(core.help())
  }) 
}) 
function parseArgsStringToArgv(value, env, file) {
    //[^\s'"] Match if not a space ' or "
    //+|['"] or Match ' or "
    //([^'"]*) Match anything that is not ' or "
    //['"] Close match if ' or "
    var myRegexp = /[^\s'"]+|['"]([^'"]*)['"]/gi;
    var myString = value;
    var myArray = [
    ];
    if(env){
        myArray.push(env);
    }
    if(file){
        myArray.push(file);
    }
    var match;
    do {
        //Each call to exec returns the next regex match as an array
        match = myRegexp.exec(myString);
        if (match !== null) {
            //Index 1 in the array is the captured group if it exists
            //Index 0 is the matched text, which we use if no captured group exists
            myArray.push(match[1] ? match[1] : match[0]);
        }
    } while (match !== null);

    return myArray;
}