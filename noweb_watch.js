var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;
var context = 0;


var watchFile = function (file, callback){
  fs.lstat(file, function(err, stats){
      if (err!=null){
        sys.puts("Error: file " + file + " does not exist");
        promptForFile();        
        return; 
      }
      sys.puts("watching " + file);
      fs.watchFile(file, {'persistent': true, 'interval': 100}, function(){
                                                                          callback(file);
                                                                        });
      showOptions();
   });
}

var reportResult = function (error, stdout, stderr) {
    // no result so don't do anything
}

var showOptions = function(){
  stdin.removeListener("data", processFileInput);  
  sys.puts("1. Watch file and tangle on change");
  sys.puts("2. Watch file and weave on change");
  process.stdin.resume();
  stdin.on("data", selectOption);
}

var promptForFile = function(){
  sys.puts("Enter path to the file to watch:");
  stdin.resume();
  stdin.on('data', processFileInput);
}

var selectOption = function(data){
  if (data != 1 && data != 2){   
    return false;
  }
  context = data;
  stdin.removeListener("data", selectOption);
  promptForFile();
}

var tangleFile = function(file){
  sys.puts("tangling " + file);
  exec("noweb.php tangle "+file, reportResult);
}

var weaveFile = function(file){
  sys.puts("weaving "+ file);
  exec("noweb.php weave "+file, reportResult);
}

var processFileInput = function(data){
  if (context == 1){
   var callback = tangleFile;
  }
  else if (context == 2){
    var callback = weaveFile;
  }
  data = data.toString();
  data = data.replace("\n", "");
  watchFile(data, callback);
}

var stdin = process.openStdin();
process.stdin.setEncoding('utf8');
showOptions();

