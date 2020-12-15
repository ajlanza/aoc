const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');
const mask = input[0].slice(7);
let mem, decimal = 0;
let binary = '';
let maskedResult = []; 
let temp ='';
function part1(){
 
  for(let i = input.length - 1; i > 0; i--){
    mem = parseInt(input[i].slice(4).split(/\]/)[0]);
    decimal = parseInt(input[i].split(' = ')[1]);
    binary = decimal.toString(2);
    binary = '0'.repeat(36 - binary.length)+binary;
    if(!maskedResult[mem]){    
      for(let j = 0; j < mask.length; j++){
        if(mask.charAt(j) !== 'X'){
          temp+=mask.charAt(j);
        }
        else{
          temp+=binary.charAt(j);
        }
      }
      maskedResult[mem] = temp;
    }
    temp = '';
  }

  toDecimal(maskedResult);
}

function toDecimal(bi){
  let result = 0;
  for(let i = 0; i < bi.length; i++){
    if(bi[i]){
      result+=parseInt(bi[i], 2);
    }
  }
  console.log(result);
}

part1();