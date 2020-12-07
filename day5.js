const input = require("fs").readFileSync("./day5.txt", "utf-8").trim().split('\r\n');

function part1(){
  let highest = 0;
  let temp = 0;
  let boardingPass = [];
  for(let i = 0; i < input.length; i++){
    boardingPass = input[i].split('');
    let front = 0;
    let back = 127;
    let left = 0;
    let right = 7;
    for(let j = 0; j < 10; j++){
      while(j < 7){
        if(boardingPass[j] === 'F'){
          back = front + Math.floor((back-front)/2);
        }
        else {
          front = back - Math.floor((back-front)/2);
        }
        j++
      }
      if(boardingPass[j] === 'R'){
        left = right + Math.ceil((left-right)/2);
      }
      else {
        right = left - Math.ceil((left-right)/2);
      }
    }
  temp = front * 8 + right;
  if(temp > highest){
    highest = temp;
  }
  console.log('highest: ', highest);
  }
}

part1();