const instructions = require("fs").readFileSync("./inputDay7.txt", "utf-8").split('\r\n');

part1 = () => {
  let outcomes = {};

  for(let i = 0; i < instructions.length; i++){
    const instruction = instructions[i];
    const outputTo = instruction.split(' -> ')[1];
    if(instruction.split(' ').length === 3){
      outcomes[outputTo] = instruction.split(' -> ')[0];
      continue;
    }
    if(instruction.includes('AND')){
      const firstValue = outcomes[instruction.split(' ')[0]];
      const secondValue = outcomes[instruction.split(' ')[2]];
      outcomes[outputTo] = firstValue & secondValue;
      continue;
    }
    if(instruction.includes('OR')){
      const firstValue = outcomes[instruction.split(' ')[0]];
      const secondValue = outcomes[instruction.split(' ')[2]];
      outcomes[outputTo] = firstValue | secondValue;
      continue;
    }
    if(instruction.includes('NOT')){
      const firstValue = outcomes[instruction.split(' ')[1]];
      outcomes[outputTo] = 65535  ^firstValue; 
      continue;
    }
    if(instruction.includes('LSHIFT')){
      const firstValue = outcomes[instruction.split(' ')[0]];
      const secondValue = instruction.split(' ')[2];
      outcomes[outputTo] = firstValue << secondValue;
      continue;
    }
    if(instruction.includes('RSHIFT')){
      const firstValue = outcomes[instruction.split(' ')[0]];
      const secondValue = instruction.split(' ')[2];
      outcomes[outputTo] = firstValue >> secondValue;
      continue;
    }
  }
  // it looks like the instructions need to be sorted and arranged in order before this will give the proper results.
  console.log(outcomes['a']);
}

part1();