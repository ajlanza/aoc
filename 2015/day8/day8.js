const list = require("fs").readFileSync("./inputDay8.txt", "utf-8").split('\r\n');

part1 = () => {
  let charactersOfCode = 0;
  let stringCharacters = 0;
  for(let i = 0; i < list.length; i++){
    let line = list[i];
    let escapedCharacters = 0;
    charactersOfCode += line.length;
    for(let j = 0; j < line.length; j++){
      if(line[j] === '\\'){
          if(line[j+1] === '\\' || line[j+1] === '\"'){
            escapedCharacters += 1;
            j++;
          }
          else if(line[j+1] === 'x'){
            escapedCharacters += 3;
            j += 3;
          }
      }
    }
    stringCharacters += line.length - escapedCharacters -2;
  }
  console.log(charactersOfCode - stringCharacters);
}

part2 = () => {
    let charactersOfCode = 0;
    let stringCharacters = 0;
    for(let i = 0; i < list.length; i++){
      let line = list[i];
      let encodedCharacters = 0;
      charactersOfCode += line.length;
      for(let j = 0; j < line.length; j++){
        if(line[j] === '\"' || line[j] === '\\'){
          encodedCharacters += 1;
        }
      }
      stringCharacters += line.length + encodedCharacters +2;
    }
    console.log(stringCharacters - charactersOfCode);
  }

part1();
part2();