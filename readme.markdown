


opt-string
========

With opt-string, the options are just a hash! No optstrings attached.

虽然很想重用，但是...
========
.必须新建模块，基于optimist,以便：

    1. 解决：从字符串解析，而不是from console 
    2. 解决：对未定义的选项说不 
    3. 解决：可以get-help到字符串，而不是console.print help 


examples
========


Short ,Long ,and Position with boolean type (or string) options
-------------------------------------------------

````javascript
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
````



.options(key, opt) and help
------------------

one ring rule all .you can specify keys in `opt` for each of the chainable methods.

For example:

````javascript
    var a = require('../') 
        var self = a()
        self
            .usage("a headline usage text")
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
        console.log(self.help())
        self. parseString("ls -x abc -y def ghi");
````



error  handler
-------------

成功返回解析后的argv，失败抛出异常，异常消息为帮助和错误提示
````javascript
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
````
.help()
-------

Return the generated usage string.


installation
============

With [npm](http://github.com/isaacs/npm), just do:
    npm install opt-string

acknowledge
===========

base on [optimist](https://github.com/substack/node-optimist)
