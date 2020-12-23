const input = require("fs").readFileSync("./day16.txt", "utf-8").trim().split('\r\n\r');
const notes = input[0].split('\r\n');
const myTicket = input[1];
const nearbyTickets = input[2].split(/[,\r\n]/);
function part1(){
    
  let ranges = [];
  let invalid = 0;
  for(let i = 0; i < notes.length; i++){
    ranges.push(notes[i].split(': ')[1].split(' or ')[0]);
    ranges.push(notes[i].split(' or ')[1]);
  }
  let low = 0;
  let high = 0;
//   console.log(nearbyTickets);
  for(let j = 3; j < nearbyTickets.length; j++){
    if(nearbyTickets[j] === ''){
        continue;
    }
    for(let k = 0; k < ranges.length; k++){
      low = parseInt(ranges[k].split('-')[0]);
      high = parseInt(ranges[k].split('-')[1]);
    //   console.log(low, high);
      if(parseInt(nearbyTickets[j]) >= low && parseInt(nearbyTickets[j]) <= high){
        // console.log('found in range',parseInt(nearbyTickets[j]));
        break;
      }
      if(k === ranges.length - 1){
        // console.log(invalid, 'invalid');
        invalid += parseInt(nearbyTickets[j]);
     
      }
    }
  }

console.log(invalid);
}


part1();