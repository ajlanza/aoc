const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');
const preamble = 25;
let start = 0;
let matches = [];
function part1(){
  getNumbers();
  if(matches.includes(parseInt(input[start + preamble]))){
    // console.log('number is good: ', input[start + preamble]);
  }
  else{
    return console.log('number is not good: ', input[start + preamble]);
  }
  // console.log(matches);
  start++;
  matches = [];
  if(start + preamble < input.length){
    part1();
  }
}

function getNumbers(){
  for(let firstNumber = start; firstNumber < start + preamble - 1; firstNumber++){
    for(let secondNumber = firstNumber + 1; secondNumber <= firstNumber + preamble - 1; secondNumber++){
      if(!matches.includes(parseInt(input[firstNumber]) + parseInt(input[secondNumber]))){
        matches.push(parseInt(input[firstNumber]) + parseInt(input[secondNumber]));
      }
    }
  }
}

part1();