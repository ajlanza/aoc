const input = require("fs").readFileSync("./day6.txt", "utf-8").trim().split('\r');
let letters = [];
function part1(){
  let count = 0;
  let totalCount = 0;
  for(let i = 0; i < input.length; i++){
    // console.log(i, input[i]);
    if(input[i] !== '\n'){
      // console.log(i, input[i].split(''));
      for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === '\n'){
          // console.log(`it's a new person`);
        }
        else{
          if(letters.includes(input[i][j])){
            // console.log('contains ', input[i][j]);
          }
          else{
            letters.push(input[i][j]);
            // console.log(input[i][j]);
            totalCount++;
          }
          // console.log(input[i][j]);
        }
      }
    }
    else{
      // console.log('NEW GROUP');
      // console.log('count: ', count);
      // totalCount += count;
      // count = 0;
      letters = [];
    }
  }
  console.log('Total count: ', totalCount);   
}

part1();