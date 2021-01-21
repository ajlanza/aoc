function part1(){
  let numbers={
    1: 1,
    17: 2,
    0: 3,
    10: 4,
    18: 5,
    11: 6,
    6: 7
  }
  let thisTurn = 0;
  let temp = 0;
  for(let i = 8; i <= 2020; i++){
    if(numbers.hasOwnProperty(thisTurn)){
      temp = thisTurn;
      thisTurn = i - numbers[thisTurn];
      numbers[temp] = i;
    }
    else{
      numbers[thisTurn] = i;
      thisTurn = 0;
    }
  }
  console.log(Object.keys(numbers).find(key => numbers[key] === 2020));
}

function part2(){
    let numbers={
      1: 1,
      17: 2,
      0: 3,
      10: 4,
      18: 5,
      11: 6,
      6: 7
    }
    let thisTurn = 0;
    let temp = 0;
    const turns = 30000000
    for(let i = 8; i <= turns; i++){
      // just to show that it is running
      if(i % 1000 === 0){
       console.log(i);
      }
      if(numbers.hasOwnProperty(thisTurn)){
        temp = thisTurn;
        thisTurn = i - numbers[thisTurn];
        numbers[temp] = i;
      }
      else{
        numbers[thisTurn] = i;
        thisTurn = 0;
      }
    }
    console.log(Object.keys(numbers).find(key => numbers[key] === 30000000));
  }


part1();
part2();