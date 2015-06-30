var shell = require('..');
var expect =require('chai').expect
var _ = require("underscore")
// var assert = require("assert")
describe('optimist user case', function(){
  // 多出来的选项要提示，比如b
  it('parseString', function(){

		var argv = require('../').
			parseString("ls -x abc -y def");
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		expect(argv._).to.deep.eql(["ls"])		
  })
  it('parseString', function(){
		var argv = require('../').
			string(["x","y"]).
			parseString("ls -x abc -y def ghi");
		expect(argv.x).to.eql("abc")
		expect(argv.y).to.eql("def")
		expect(argv._).to.deep.eql(["ls","ghi"])		
  })
  // invalid
  it('parseString4', function(){
  		var core_self = require('../');
  		console.log(core_self._options)
		// var argv = require('../').
		// 	string(["x"]).
		// 	parseString("ls -x abc -y def ghi");
		// expect(argv.x).to.eql("abc")
		// expect(argv.y).to.eql("def")
		// expect(argv._).to.deep.eql(["ls","ghi"])		
  })
  it('parseString3', function(){
  		function foo(){
  			var self={}
  			var options = {}
  			self.options = options
  			self.a = function(){
  			  self.v = 1
  			  return self
  			}
  			self.aa = function(){
  			  return self.v
  			}
  			
  			return self
  		}
  		console.log(foo().a().aa())
  		console.log(foo().aa())
		// var argv = require('../').
		// 	string(["x"]).
		// 	parseString("ls -x abc -y def ghi");
		// expect(argv.x).to.eql("abc")
		// expect(argv.y).to.eql("def")
		// expect(argv._).to.deep.eql(["ls","ghi"])		
  })
})