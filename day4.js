const input = require("fs").readFileSync("./day4test.txt", "utf-8").trim().split('\r\n\r\n');
const params = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function part1(){
  let validPassports = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i].includes('byr:') && 
       input[i].includes('iyr:') &&
       input[i].includes('eyr:') &&
       input[i].includes('hgt:') &&
       input[i].includes('hcl:') &&
       input[i].includes('ecl:') &&
       input[i].includes('pid:') ) {
      validPassports++;
    }
  }
  console.log(validPassports);
}


part1();