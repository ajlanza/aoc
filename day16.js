const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n\r');
const notes = input[0].split('\r\n');
const myTicket = input[1];
const nearbyTickets = input[2];
function part1(){
    
  let ranges = []
  for(let i = 0; i < notes.length; i++){
    ranges.push(notes[i].split(': ')[1].split(' or ')[0]);
    ranges.push(notes[i].split(' or ')[1]);
  }
  console.log(ranges);
}

part1();