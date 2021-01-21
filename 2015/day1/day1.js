const input = require("fs").readFileSync("./inputDay1.txt", "utf-8");

part1 = () => {
  let floor = 0;
  for(let i = 0; i < input.length; i++){
    if(input.charAt(i) === ("(")) {
        floor++;
    }
    else {
        floor--;
    }
  }
  console.log("Santa needs to get to floor ", floor);
}

part2 = () => {
    let floor = 0;
    for(let i = 0; i < input.length; i++){
      if(input.charAt(i) === ("(")) {
          floor++;
      }
      else {
          floor--;
          if(floor === -1) {
            return (console.log("Santa went into the basement at position", i+1));
          }
      }
    }    
  }

part1();
part2();