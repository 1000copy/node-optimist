需要依赖underscore针对第二条,加入代码parseStringtoArgv 

### why string-argv - https://www.npmjs.com/package/string-argv need GYP ?
我就是把代码直接拷贝出来就可以用。但是它依赖grunt，jasmine-node etc。奇怪
### 需求进一步清晰

子命令支持，[cancel]
命令选择多出来的需要提示错误，[none]
可以tar style，[true]
可以直接访问字符串而不是argv，[true]
支持“”带空格的标引字符串[true]
show usage [ok]

###  string-argv

string-argv - https://www.npmjs.com/package/string-argv

yargs 输入的是argv，而argv=== process.argv，已经对命令行做了一次解析，而不是简单的用space来分割。
比如

  ls "a file with space" -f 
应该得到的是 [”ls“  ,"a file with space"，,”-f“]
因此，如果直接用字符串，而不是argv的话，必须有工具来解析。这个工具必须考虑到",',space 和一般字符。


###既然阮一峰都在介绍yargs----，optimist也推荐——--

Node.js 命令行程序开发教程 - 阮一峰的网络日志 - http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html

每个子命令往往有自己的参数，这时就需要在回调函数中单独指定。回调函数中，要先用 reset 方法重置 yargs 对象。

#!/usr/bin/env node
require('shelljs/global');
var argv = require('yargs')
  .command("morning", "good morning", function (yargs) {  
    echo("Good Morning");
    var argv = yargs.reset()
      .option("m", {
        alias: "message",
        description: "provide any sentence"
      })
      .help("h")
      .alias("h", "help")
      .argv;

    echo(argv.m);
  })
  .argv;


### cli 工具必备
Browsenpm.org | Nodejitsu Inc. - http://browsenpm.org/package/cli

###  猫就是猫，旁边的花花草草是毫无必要的。——高醇芳

https://github.com/substack/node-optimist
一个命令行解析工具，神经兮兮的说什么海盗主题。（pirate-themed successor to optimist).

optimist，minimist ,yargs,nomnom ,get-opt 麻痹的，这么多要玩死人,npm 内的选择是一件麻烦的事。特别是需求比较多的情况下。

### optimist

支持  invalid option .不再定义列表的选项要提示（optimist不支持）

    λ ls -f -g -c -z
    ls: invalid option -- z
    Try `ls --help' for more information.

原来optimist 是引用了minimist 的，还可以show-help，设置require，明显比mimimist强大。
so，，我又要换回来了。

