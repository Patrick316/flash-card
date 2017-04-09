var basic = require('./basic.js');
var input = process.argv[2];

if(!input){
  console.log("choose either basic or cloze");
}else if(input === 'basic'){
  basic.gameInit();
}else if(input === 'cloze'){
  console.log("we will get to cloze js very soon! ")
}
