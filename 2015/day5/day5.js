const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

const input = require("fs").readFileSync("./inputDay5.txt", "utf-8").split('\r\n');

part1 = () => {
  let vowels = 0;
  let double = 0;
  let naughty = false;
  let niceStrings = 0;
  let naughtyStrings = 0;
  for(let i = 0; i < input.length; i++){
    let thisString = input[i];
    for(let j = 0; j < thisString.length; j++){
      let char = thisString.charAt(j);
      let nextChar = thisString.charAt(j + 1);
      switch(char){
        case 'a':
          if(nextChar === 'b'){
            naughty = true;   
          }
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          vowels++;
          if(char === nextChar){
            double++;
          }
          break;
        case 'c':
          if(nextChar === 'd'){
            naughty = true;
          }
          else if(char === nextChar){
            double++;
          }
          break;
        case 'p':
          if(nextChar === 'q'){
            naughty = true;
          }
          else if(char === nextChar){
            double++;
          }
          break;
        case 'x':
          if(nextChar === 'y'){
            naughty = true;
          }
          else if(char === nextChar){
            double++;
          }
          break;
        default:
          if(char === nextChar){
            double++;
          }
        }
      if(naughty) {
          break;
      }
    }
    if(naughty){
        naughty = false;
        naughtyStrings++;
        vowels = 0;
        double = 0;
        continue;
    }
    if(vowels > 2 && double > 0){
        niceStrings++;
        vowels = 0;
        double = 0;
    }
    else {
        naughtyStrings++;
        console.log(input[i]);
        naughty = false;
        vowels = 0;
        double = 0;
    }

  }
  console.log('Nice strings: ', niceStrings, ' Naughty strings: ', naughtyStrings);
}

part2 = () => {
    let niceStrings = 0;
    for(let i = 0; i < input.length; i++){
      let thisString = input[i];
      let pairs = 0;
      let repeatWithGap = 0
      for(let j = 0; j < thisString.length; j++){
        let char = thisString.charAt(j);
        let nextChar = thisString.charAt(j + 1);
        let charAfterGap = thisString.charAt(j + 2);
        let thisPair = char + nextChar;
        if(char === charAfterGap){
            repeatWithGap++;
        }
        if(thisString.slice(j+2).includes(thisPair)){
            pairs++;
        }
        if(repeatWithGap > 0 && pairs > 0) {
            niceStrings++;
            break;
        }
      }
    }
    console.log('Nice strings: ', niceStrings);
  }

part2();