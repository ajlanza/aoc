const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');

function part1(){
  let arrival = parseInt(input[0]);
  let departure = arrival;
  const buses = input[1].split(',');
  let validBuses = [];
  let noBus = true;
  for(let i = 0; i < buses.length; i++){
    if(buses[i] === 'x'){
      continue;
    }
    else{
      validBuses.push(parseInt(buses[i]));
    }
  }
  while(noBus){
    validBuses.forEach(bus => {
      if(departure % bus === 0){
        noBus = false;
        console.log('arrival: ', arrival, 'bus: ', bus, 'departure: ', departure);
        console.log((departure-arrival) * bus);
      }      
    })
    departure++;
  }


  // Part Two start
  // let startTime = 1068779;
  // let partTwo = false;
  // while(!partTwo){
  //   validBuses.forEach(bus => {
  //     if((startTime+buses.indexOf(bus.toString())) % bus !== 0){
  //        console.log(bus, startTime, startTime+buses.indexOf(bus.toString()), (startTime+buses.indexOf(bus.toString())) % bus);
        
  //     }
  //     else{
  //       console.log('divisible ', bus, startTime, startTime+buses.indexOf(bus.toString()));
  //       partTwo = true;
  //     }
  //   })
  //   startTime++;
  // }  
}

part1();