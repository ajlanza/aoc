const input = require("fs").readFileSync("./inputDay6.txt", "utf-8").split('\r\n');

part1 = () => {
  let lights = new Array(1000).fill(false).map(() => new Array(1000).fill(false));
  for(let i = 0; i < input.length; i++){
    const thisInstruction = input[i];
    if(thisInstruction.includes('on')){
      let startX = parseInt(thisInstruction.split(' ')[2].split(',')[0]);
      let startY = parseInt(thisInstruction.split(' ')[2].split(',')[1]);
      let endX = parseInt(thisInstruction.split(' ')[4].split(',')[0]);
      let endY = parseInt(thisInstruction.split(' ')[4].split(',')[1]);
      for(let x = startX; x <= endX; x++){
        for(let y = startY; y <= endY; y++){
          lights[x][y] = true;
        }
      }
      continue;
    }
    if(thisInstruction.includes('off')){
      let startX = parseInt(thisInstruction.split(' ')[2].split(',')[0]);
      let startY = parseInt(thisInstruction.split(' ')[2].split(',')[1]);
      let endX = parseInt(thisInstruction.split(' ')[4].split(',')[0]);
      let endY = parseInt(thisInstruction.split(' ')[4].split(',')[1]);
      for(let x = startX; x <= endX; x++){
        for(let y = startY; y <= endY; y++){
          lights[x][y] = false;
        }
      }
      continue;
    }
    else {
      let startX = parseInt(thisInstruction.split(' ')[1].split(',')[0]);
      let startY = parseInt(thisInstruction.split(' ')[1].split(',')[1]);
      let endX = parseInt(thisInstruction.split(' ')[3].split(',')[0]);
      let endY = parseInt(thisInstruction.split(' ')[3].split(',')[1]);
      for(let x = startX; x <= endX; x++){
        for(let y = startY; y <= endY; y++){
          lights[x][y] = !lights[x][y];
        }
      }
    }
  }
  let lightsOn = 0;
  for(let x = 0; x <= 999; x++){
    for(let y = 0; y <= 999; y++){
      if (lights[x][y] === true){
        lightsOn++;
      }
    }
  }
  console.log(lightsOn);
}

part2 = () => {
    let lights = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
    for(let i = 0; i < input.length; i++){
      const thisInstruction = input[i];
      if(thisInstruction.includes('on')){
        let startX = parseInt(thisInstruction.split(' ')[2].split(',')[0]);
        let startY = parseInt(thisInstruction.split(' ')[2].split(',')[1]);
        let endX = parseInt(thisInstruction.split(' ')[4].split(',')[0]);
        let endY = parseInt(thisInstruction.split(' ')[4].split(',')[1]);
        for(let x = startX; x <= endX; x++){
          for(let y = startY; y <= endY; y++){
            lights[x][y]++;
          }
        }
        continue;
      }
      if(thisInstruction.includes('off')){
        let startX = parseInt(thisInstruction.split(' ')[2].split(',')[0]);
        let startY = parseInt(thisInstruction.split(' ')[2].split(',')[1]);
        let endX = parseInt(thisInstruction.split(' ')[4].split(',')[0]);
        let endY = parseInt(thisInstruction.split(' ')[4].split(',')[1]);
        for(let x = startX; x <= endX; x++){
          for(let y = startY; y <= endY; y++){
            if(lights[x][y] === 0){
                continue;
            }
            else {
              lights[x][y]--;
            }
          }
        }
        continue;
      }
      else {
        let startX = parseInt(thisInstruction.split(' ')[1].split(',')[0]);
        let startY = parseInt(thisInstruction.split(' ')[1].split(',')[1]);
        let endX = parseInt(thisInstruction.split(' ')[3].split(',')[0]);
        let endY = parseInt(thisInstruction.split(' ')[3].split(',')[1]);
        for(let x = startX; x <= endX; x++){
          for(let y = startY; y <= endY; y++){
            lights[x][y] += 2;
          }
        }
      }
    }
    let brightness = 0;
    for(let x = 0; x <= 999; x++){
      for(let y = 0; y <= 999; y++){
        brightness += lights[x][y];
      }
    }
    console.log(brightness);
  }

part2();

