const input = require("fs").readFileSync("./day4.txt", "utf-8").trim().split('\r\n\r\n');
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

function part2(){
    let validPassports = 0;
    for(let i = 0; i < input.length; i++){
      if(input[i].match(/(byr:19[2-9][0-9]|byr:200[0-2])/) && 
         input[i].match(/(iyr:201[0-9]|iyr:2020)/) &&
         input[i].match(/(eyr:202[0-9]|eyr:2030)/) &&
         input[i].match(/(hgt:(?:1[5-8][0-9]|19[0-3])cm)|(hgt:(?:59|6[0-9]|7[0-6])in)/) &&
         input[i].match(/(hcl:#[0-9,a-f]{6})/) &&
         input[i].match(/(ecl:amb|ecl:blu|ecl:brn|ecl:gry|ecl:grn|ecl:hzl|ecl:oth)/) &&
         input[i].match(/(pid:\d{9})/) ) {
        validPassports++;
      }
    }
    console.log(validPassports);
  }


part1();
part2();