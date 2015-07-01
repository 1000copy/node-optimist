fsmonitor = require('fsmonitor');
fsmonitor.watch('.', null, function(change) {
    // console.log("Change detected:\n" + change); 

    // console.log("Added files:    %j", change.addedFiles);
    // console.log("Modified files: %j", change.modifiedFiles);
    // console.log("Removed files:  %j", change.removedFiles);

    // console.log("Added folders:    %j", change.addedFolders);
    // console.log("Modified folders: %j", change.modifiedFolders);
    // console.log("Removed folders:  %j", change.removedFolders);
    var spawn = require('child_process').spawn
    ls    = spawn('C:\\Users\\lcj\\AppData\\Roaming\\npm\\mocha.cmd', []);
    ls.stdout.on('data', function (data) {
      console.log(data.toString('utf8'));
    });
    ls.stderr.on('data', function (data) {
      console.log(data.toString('utf8'));
    });

    ls.on('close', function (code) {
      console.log('--------------with　exit CODE:' + code);
    });
});

var monitor = fsmonitor.watch('.', {
    // include files
    matches: function(relpath) {
        return relpath.match(/\.js$/i) !== null;
    },
    // exclude directories
    excludes: function(relpath) {
        return relpath.match(/^\.git$/i) !== null;
    }
});
monitor.on('change', function(changes) {
    // console.log(changes);
});