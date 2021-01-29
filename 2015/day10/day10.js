let arr = [1,1,1,3,2,2,2,1,1,3];
part1 = () => {
    let lookAndSay = [];
  for(let round = 1; round <= 40; round++){
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
  console.log(arr.length);
}

part1();