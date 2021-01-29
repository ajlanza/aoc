let arr = [1,1,1,3,2,2,2,1,1,3];
part1Rounds = 40;
part2Rounds = 50;

bothParts = () => {
  let lookAndSay = [];
  for(let round = 1; round <= part2Rounds; round++){
    for(let i = 0; i < arr.length; i++) {
      let thisNumber = arr[i];
      let thisCount = 1;
      while(thisNumber === arr[i+1]) {
        thisCount++;
        i++;
      }
      lookAndSay.push(thisCount);
      lookAndSay.push(thisNumber); 
    }
    arr = lookAndSay;
    lookAndSay = [];    
  }
  console.log(`The length is ${arr.length}.`);
}

bothParts();