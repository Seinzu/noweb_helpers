var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;

var usage = function(){
  sys.puts("Command should be called: \n node watch.js <filename>");
  process.exit(error_code);
}

var watchFile = function (file){

  var reportResult = function (error, stdout, stderr) {
    // no result so don't do anything
  }

  var nowebTangle = function() {
    sys.puts("tangling " + file);
    exec("noweb.php tangle "+file, reportResult);
  }
            


  fs.watchFile(file, {'persistent': true, 'interval': 100}, nowebTangle);

  sys.puts("watching " + file);
}

if (process.argv.length < 3) {
  usage();
}

for (var i = 2; i < process.argv.length; i += 1){
  watchFile(process.argv[i]);
}
