const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');

function part1(){
  const bags = [];
  let totalCount = 0;
  for(let i = 0; i < input.length; i++){
    // bags contain no other bags and is not shiny gold bag
    if(input[i].split('bags contain')[1] === ' no other bags.' || input[i].split('bags contain')[0] === 'shiny gold '){
      continue;
    }
    // bags can contain shiny gold bag directly
    if(input[i].split('bags contain')[1].includes('shiny gold')){
      totalCount++;
    }
    else{
      let currentBag = {color: input[i].split('bags contain')[0]};
      let currentContents = input[i].split('bags contain')[1];
      bags.push(currentBag);
    //   currentBag.contents = currentContents.split(/ [\d] /); 
      currentBag.contents = currentContents.split(/ bags./);   
    //   console.log('bag added: ', input[i].split("bags contain")[0]);
    }
  }
  console.log('Total count is ', totalCount);
  console.log(bags);
}

part1();