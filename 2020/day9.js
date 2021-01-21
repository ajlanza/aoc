const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');
const preamble = 25;
let start = 0;
let matches = [];
let invalid = 0;
function part1(){
  getNumbers();
  if(matches.includes(parseInt(input[start + preamble]))){
    // console.log('number is good: ', input[start + preamble]);
  }
  else{
    invalid = parseInt(input[start + preamble]);
    part2();
    return console.log('number is not good: ', invalid);
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

function part2(){
  let cumulative = 0;
  let min = 0;
  let max =0;
  for(let i = 0; i < start + preamble; i++){
    if(parseInt(input[i]) > invalid){
      // console.log(input[i], ' is greater');
    }
    else{
      min = parseInt(input[i]);
      max = parseInt(input[i])
      cumulative = parseInt(input[i]);
      for(let j = i + 1; j < start + preamble; j++){
        if(parseInt(input[j]) < min){
          min = parseInt(input[j])
        }
        if(parseInt(input[j]) > max){
          max =parseInt(input[j])
        }
        cumulative += parseInt(input[j]);
        // console.log(cumulative, ' cumulative');
        if(cumulative === invalid){
          return console.log('sum of min and max: ', min + max);
        }
        if(cumulative > invalid){
          break;
        }
      }
    }
  }
}

part1();