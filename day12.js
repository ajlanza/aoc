const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\n');

function part1() {
  let facing = 90;
  let x = 0;
  let y = 0;
  for(let i = 0; i < input.length; i++){
    action = input[i].charAt(0);
    value = parseInt(input[i].slice(1));
    switch(action) {
      case 'N':
        y += value;
        break;
      case 'S':
        y -= value;
        break;
      case 'E':
        x += value;
        break;
      case 'W':
        x -= value;
        break;
      case 'R':
        facing += value;
        if(facing > 360){
          facing = facing - 360;
        }
        break;
      case 'L':
        facing -= value;
        if(facing <= 0){
        // This was my problem. since facing is negative we add it. Subtracting the negative number was acting as addition.
          facing = 360 + facing;
        }
        break;
      case 'F':
        // 90 degrees is East
        if(facing === 90){
          x += value;
        }
        // 180 degrees is South
        if(facing === 180){
          y -= value;
        }
        // 270 degrees is West
        if(facing === 270){
          x -= value;
        }
        // 360 degrees is North
        if(facing === 0 || facing === 360){
          y += value;
        }
        break;
      default: 
        console.log('error');        
    }
  }

  console.log('X axis: ', x, 'Y axis: ', y);
  if(x < 0){
    x = x * -1;
  }
  if(y < 0){
    y = y * -1;
  }
  console.log('Manhattan distance: ', x + y);
}

part1();