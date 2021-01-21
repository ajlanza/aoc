const input = require("fs").readFileSync("./inputDay2.txt", "utf-8").split('\r\n');

part1 = () => {
    let totalPaperNeeded = 0;
    for(let i = 0; i < input.length; i++){
      const box = input[i].split('x');
      const length = box[0];
      const width = box[1];
      const height = box[2];
      const sideOne = length * width;
      const sideTwo = width * height;
      const sideThree = height * length;
      const squareFeet = 2 * (sideOne + sideTwo + sideThree);
      totalPaperNeeded += squareFeet;
      // If all three sides are the same
      if(sideOne === sideTwo === sideThree){
        totalPaperNeeded += sideOne;
        continue;
      }
      // If one side is smaller than the other two
      if(sideOne < sideTwo && sideOne < sideThree){
          totalPaperNeeded += sideOne;
          continue;
      }
      if(sideTwo < sideOne && sideTwo < sideThree){
          totalPaperNeeded += sideTwo;
          continue;
      } 
      if(sideThree < sideOne && sideThree < sideTwo){
          totalPaperNeeded += sideThree;
          continue;
      }
      // If two sides are the same size and the smallest
      if(sideOne === sideTwo && sideOne < sideThree){
          totalPaperNeeded += sideOne;
          continue;
      }
      if(sideOne === sideThree && sideOne < sideTwo){
          totalPaperNeeded += sideOne;
          continue;
      }
      if(sideTwo === sideThree && sideTwo < sideOne){
          totalPaperNeeded += sideTwo;
          continue;
      }     
    }
    return (console.log(`The elves need ${totalPaperNeeded} sqft of paper.`));
}

part1();
