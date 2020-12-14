const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');

function part1() {
  let facing = 90;
  let x = 0;
  let y = 0;
  for(let i = 0; i < input.length; i++){
      console.log('i ', i);
    action = input[i].charAt(0);
    value = parseInt(input[i].slice(1));
    
    if(action === 'N'){
      y += value;
      console.log('North ', value);
      continue;
    }
    if(action === 'S'){
      y -= value;
      console.log('South ', value)
      continue;
    }
    if(action === 'E'){
      x += value;
      console.log('East ', value)
      continue;
    }
    if(action === 'W'){
      y -= value;
      console.log('West ', value)
      continue;
    }
    if(action === 'R'){
      facing += value;
      if(facing > 360){
        facing = facing - 360;
      }
      console.log('Right ', value, 'Facing: ', facing)
    }
    if(action === 'L'){
      facing -= value;
      if(facing <= 0){
        facing = 360 - facing;
      }
      console.log('Left ', value, 'Facing: ', facing)
    }
    if(action === 'F'){
      // 90 degrees is East
      if(facing === 90){
        x += value;
        console.log('Forward East ', value);
        continue;
      }
      // 180 degrees is South
      if(facing === 180){
        y -= value;
        console.log('Forward South ', value);
        continue;
      }
      // 270 degrees is West
      if(facing === 270){
        x -= value;
        console.log('Forward West ', value);
        continue;
      }
      // 360 degrees is North
      if(facing === 360 || facing === 0){
        y += value;
        console.log('Forward North ', value);
        continue;
      }
    }
  }
  console.log('X axis: ', x, 'Y axis: ', y);
  if(x < 0){
    x = x * -1;
  }
  if(y < 0){
    y = y * -1;
  }
  console.log(x, y, x + y);
}

part1();