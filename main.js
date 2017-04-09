var basic = require('./basic.js');
var cloze = require('./cloze.js');
var input = process.argv[2];

if(!input){
  console.log("choose either basic or cloze");
}else if(input === 'basic'){
  basic.gameInit();
}else if(input === 'cloze'){
  cloze.gameInit();
}
