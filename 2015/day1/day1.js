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

part1();