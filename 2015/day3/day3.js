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

part1();