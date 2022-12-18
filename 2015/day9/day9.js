const input = require("fs").readFileSync("./inputDay9.txt", "utf-8").split('\r\n');

part1 = () => {
  let locationDistance = {};
  let locations = [];
  for(let i = 0; i < input.length; i++){
    let firstLocation = input[i].split(' ')[0];
    let secondLocation = input[i].split(' ')[2];
    let distance = input[i].split(' ')[4];
    if(!locations.includes(firstLocation)){
      locations.push(firstLocation);
    }
    if(!locations.includes(secondLocation)){
      locations.push(secondLocation);
    }
    if(locationDistance[firstLocation]){
      if(locationDistance[firstLocation][secondLocation]){
        continue;
      }
      else {
        locationDistance[firstLocation][secondLocation] = distance;
      }
    }
    else {
      locationDistance[firstLocation] = {};
      locationDistance[firstLocation][secondLocation] = distance;
    }
    if(locationDistance[secondLocation]){
        if(locationDistance[secondLocation][firstLocation]){
          continue;
        }
        else {
          locationDistance[secondLocation][firstLocation] = distance;
        }
    }
    else {
      locationDistance[secondLocation] = {};
      locationDistance[secondLocation][firstLocation] = distance;
    }
  }
  console.log(locationDistance)
  console.log(locations);
}

part1();