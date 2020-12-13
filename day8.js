const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');

function part1(){
  let instructions = [];
  let totalCount = 0;
  for(let i = 0; i < input.length; i++){
    instruction = {index: i, operation: input[i].split(' ')[0], accumulator: parseInt(input[i].split(' ')[1]), repeat: false};
    instructions.push(instruction);
  }
  for(let j = 0; j < instructions.length; j++){
    let thisInstruction = instructions[j];
    if(thisInstruction.repeat === true){
      return console.log(totalCount);
    }
    else{
      if(thisInstruction.operation === 'nop'){
        thisInstruction.repeat = true;
        continue;
      }
      // if operation is jmp adjust the counter the given amount (subtract 1 because for loop adds 1)
      if(thisInstruction.operation === 'jmp'){        
        j = j + thisInstruction.accumulator - 1
        thisInstruction.repeat = true;
      }
      else{
        thisInstruction.repeat = true;
        totalCount += thisInstruction.accumulator;
        // console.log(thisInstruction, 'total ', totalCount);
      }
    }
  }
  console.log(totalCount);
  
}


part1();