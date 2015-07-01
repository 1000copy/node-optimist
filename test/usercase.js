var shell = require('..');
var expect =require('chai').expect
var _ = require("underscore")
// var assert = require("assert")
describe('optimist user case', function(){
  // 多出来的选项要提示，比如b
  it('parseString', function(){
		var argv = require('../')().
			parseString("ls -x abc -y def");
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		expect(argv._).to.deep.eql(["ls"])		
  })
  it('parseString2', function(){
		var argv = require('../')().
			string(["x","y"]).
			parseString("ls -x abc -y def ghi" );
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		expect(argv._).to.deep.eql(["ls","ghi"])	 	
  })
  it('parseString5', function(){  		
  		var a = require('../') 
		var argv = a().
			string(["x","y"]). 
			parseString("ls -x abc -y def ghi");
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		expect(argv._).to.deep.eql(["ls","ghi"])		
  })
  it('parseString6', function(){  		
  		var a = require('../') 
  		var self = a()
		self
			.usage("a headline usage text")
			.wrap()
			.options('x', {
		        alias : 'xxx',
		        type:"boolean",
		        default : 'xdefault',
		    })
		    .options('y', {
		        alias : 'yyy',
		        default : 'xdefault',
		        describe:"a yyy option",
		        type:"string",
		        demand:true
		    })		
		// console.log(self.help())
		self. parseString("ls -x abc -y def ghi");
		expect(1).to.eql(1)
		// expect(self.help()).to.deep.eql(["ls","ghi"])		
  })
  it('non-hypenated options', function(){  		
  		var a = require('../') 
  		var self = a()		
  		var argv =  self.parseString("ls -x abc -y def ghi")
		expect(argv._).to.eql("ls ghi".split(" "))
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		// expect(self.help()).to.deep.eql(["ls","ghi"])		
  })
    it('short long options', function(){  		
  		var a = require('../') 
  		var self = a()
		self
			.usage("a headline usage text")
			.wrap()
			.options('x', {
		        alias : 'xxx',
		        type:"boolean"		        
		    })
		    .options('y', {
		        alias : 'yyy',
		        default : 'ydefault',
		        describe:"a yyy option",
		        type:"string",
		        demand:true
		    })		
		// console.log(self.help())
		var argv = self. parseString("ls --xxx abc -y def ghi"); 
		expect(argv.x).to.eql(argv.xxx)
		expect(argv.x).to.eql(true)
		expect(argv.y).to.eql("def")
		expect(argv._).to.eql("ls abc ghi".split(" "))
		//default value
		var argv = self. parseString("ls --xxx abc  ghi"); 
		expect(argv.x).to.eql(argv.xxx)
		expect(argv.x).to.eql(true)
		expect(argv.y).to.eql("ydefault")
		expect(argv._).to.eql("ls abc ghi".split(" "))
		// expect(self.help()).to.deep.eql(["ls","ghi"])		
  })
  // it.skip('parseString4', function(){ 
  // 		function foo(){
  // 			var self={}
  // 			var options = {}
  // 			self.options = options
  // 			self.a = function(){
  // 			  self.v = 1
  // 			  return self
  // 			}
  // 			self.aa = function(){
  // 			  return self.v
  // 			}
  			
  // 			return self
  // 		}
  // 		console.log(foo().a().aa())
  // 		console.log(foo().aa())	
  // })
}) 