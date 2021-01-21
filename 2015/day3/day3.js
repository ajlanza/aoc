const input = require("fs").readFileSync("./inputDay3.txt", "utf-8");

part1 = () => {
  let grid = {};
  let NorthSouth = 0;
  let EastWest = 0;
  let uniqueHouses = 1;
  grid[NorthSouth] = {};
  grid[NorthSouth][EastWest] = 1;
  for(let i = 0; i < input.length; i++) {
    switch(input.charAt(i)) {
        case '^':
            NorthSouth++;
            break;
        case '>':
            EastWest++;
            break;
        case 'v':
            NorthSouth--;
            break;
        case '<':
            EastWest--;
            break;
    }
    if(!grid[NorthSouth]) {
        grid[NorthSouth] = {};
        grid[NorthSouth][EastWest] = 1;
        uniqueHouses++;
        continue;
    }
    if(!grid[NorthSouth][EastWest]) {
        grid[NorthSouth][EastWest] = 1;
        uniqueHouses++
    }
    else {
      grid[NorthSouth][EastWest]++
    }
  }
  console.log('Unique houses: ', uniqueHouses);
}

part2 = () => {
    let grid = {};
    let NorthSouth = 0;
    let EastWest = 0;
    let RoboNS = 0;
    let RoboEW = 0;
    let uniqueHouses = 1;
    grid[NorthSouth] = {};
    grid[NorthSouth][EastWest] = 1;
    for(let i = 0; i < input.length; i++) {
      if(i % 2 === 0){
        switch(input.charAt(i)) {
          case '^':
              NorthSouth++;
              break;
          case '>':
              EastWest++;
              break;
          case 'v':
              NorthSouth--;
              break;
          case '<':
              EastWest--;
              break;
        }
        if(!grid[NorthSouth]) {
          grid[NorthSouth] = {};
          grid[NorthSouth][EastWest] = 1;
          uniqueHouses++;
          continue;
        }
        if(!grid[NorthSouth][EastWest]) {
          grid[NorthSouth][EastWest] = 1;
          uniqueHouses++
        }
        else {
          grid[NorthSouth][EastWest]++
        }
      }
      else {
        switch(input.charAt(i)) {
          case '^':
              RoboNS++;
              break;
          case '>':
              RoboEW++;
              break;
          case 'v':
              RoboNS--;
              break;
          case '<':
              RoboEW--;
              break;
        }
        if(!grid[RoboNS]) {
          grid[RoboNS] = {};
          grid[RoboNS][RoboEW] = 1;
          uniqueHouses++;
          continue;
        }
        if(!grid[RoboNS][RoboEW]) {
          grid[RoboNS][RoboEW] = 1;
          uniqueHouses++
        }
        else {
          grid[RoboNS][RoboEW]++
        }
      }
    }
    console.log('Unique houses: ', uniqueHouses);
  }

part2();