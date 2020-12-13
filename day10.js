const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n').map(Number);

function part1(){
  input.sort( function(a,b) { return a - b; } );
  let ones = 0;
  let twos = 0;
  let threes = 1;
  console.log(input);
  // count difference between first value and original value of 0
  if(input[0] === 1){
    ones++;
  }
  else{
    if(input[0] === 3){
      threes++;
    }
    else{
      twos++;
    }
  }
  for(let i = 0; i < input.length - 1; i++){
    if(input[i+1] - input[i] === 1){
    //   console.log ('one: ', input[i+1], ' ', input[i]);
      ones++;
    }
    else {
      if(input[i+1] - input[i] === 3){
        //   console.log ('three: ', input[i+1], ' ', input[i]);
        threes++;
      }
      else{
        //   console.log ('none: ', input[i+1], ' ', input[i]);
        twos++;
      }
    }
  }
  console.log('ones: ', ones, 'twos: ', twos, ' threes: ', threes, 'answer: ', ones*threes);
}

part1();