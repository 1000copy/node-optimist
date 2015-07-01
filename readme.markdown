#虽然很想重用，但是....必须新建模块，基于optimist

    1. 解决：从字符串解析，而不是from console 
    2. 解决：对未定义的选项说不 
    3. 解决：可以get-help到字符串，而不是console.print help 



opt-string
========

With opt-string, the options are just a hash! No optstrings attached.

examples
========


Short options
-------------------------------------------------


And Position options . 
-------------------------------------------------
 
nonopt.js:

````javascript
    var a = require('../') 
    var self = a()      
    var argv =  self.parseString("ls -x abc -y def ghi")
    expect(argv._).to.eql("ls ghi".split(" "))
    expect(argv.x).to.eql("abc")
    expect(argv.y).to.eql("def")
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




???.wrap(columns)
--------------

Format usage output to wrap at `columns` many columns.

.help()
-------

Return the generated usage string.




installation
============

With [npm](http://github.com/isaacs/npm), just do:
    npm install optimist
 
or clone this project on github:

    git clone http://github.com/substack/node-optimist.git

To run the tests with [expresso](http://github.com/visionmedia/expresso),
just do:
    
    expresso

inspired By
===========

This module is loosely inspired by Perl's
[Getopt::Casual](http://search.cpan.org/~photo/Getopt-Casual-0.13.1/Casual.pm).
