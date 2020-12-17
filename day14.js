const input = require("fs").readFileSync("./new.txt", "utf-8").trim().split('\r\n');

 

function part1(){
  let mem, decimal = 0;
  let binary, temp, mask = '';
  let maskedResult = [];
  for(let i = 0; i < input.length; i++){
    if(input[i].slice(0, 4) === 'mask'){
      mask = input[i].slice(7);
    }
    else{
      mem = parseInt(input[i].slice(4).split(/\]/)[0]);
      decimal = parseInt(input[i].split(' = ')[1]);
      binary = decimal.toString(2);
      binary = '0'.repeat(36 - binary.length)+binary;
      if(maskedResult[mem]){
        maskedResult[mem] = '';
      }    
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

  decimalTotal(maskedResult);
}

function decimalTotal(binary){
  let result = 0;
  for(let i = 0; i < binary.length; i++){
    if(binary[i]){
      result+=parseInt(binary[i], 2);
    }
  }
  console.log(result);
}

function part2(){
    let mem, decimal = 0;
    let binary, temp, mask = '';
    let maskedResult = [];
    for(let i = 0; i < input.length; i++){
      if(input[i].slice(0, 4) === 'mask'){
        mask = input[i].slice(7);
        console.log(mask);
      }
      else{
        mem = parseInt(input[i].slice(4).split(/\]/)[0]).toString(2);
        mem = '0'.repeat(36 - mem.length)+mem;
        value = parseInt(input[i].split(' = ')[1]);
        
        // binary = decimal.toString(2);
        // binary = '0'.repeat(36 - binary.length)+binary;
        // if(maskedResult[mem]){
        //   maskedResult[mem] = '';
        // }    
        // for(let j = 0; j < mask.length; j++){
        //   if(mask.charAt(j) !== 'X'){
        //     temp+=mask.charAt(j);
        //   }
        //   else{
        //     temp+=binary.charAt(j);
        //   }
        // }
        // maskedResult[mem] = temp;
        console.log(mem, value);
      }
    //   temp = '';
    }
  
    // decimalTotal(maskedResult);

}

part2();