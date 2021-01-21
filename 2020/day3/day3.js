const input = require("fs").readFileSync("./day3.txt", "utf-8").trim().split('\r\n')

part1 = (forest) => {
  let treeCount = 0;
  for(let row = 1; row < forest.length; row++){
    let column = 3;
    let temp = forest[row]
    //  console.log(row*column, temp.length, temp)
    while(row*column > temp.length - 1){
      //  console.log('need to add more trees')
      temp = temp.concat(forest[row]);
    //   console.log(row*column, temp.length);
    }
    // console.log(row*column, temp)
    if(temp.charAt(row*column) === '#'){
      treeCount++
    }
  }
  console.log(treeCount);
}

treeCount = (input, right, down) => {
  let trees = 0;
  let column = right;
  for (let i = down; i < input.length; i += down) {
    let last_digit = column % input[i].length;
    if (input[i][last_digit] == "#") {
      trees++;
    }
    column += right;
  }

  return trees;
}

part2 =(input) => {
  first = treeCount(input, 1, 1);
  second = treeCount(input, 3, 1);
  third = treeCount(input, 5, 1);
  fourth = treeCount(input, 7, 1);
  fifth = treeCount(input, 1, 2);

  console.log(first * second * third * fourth * fifth);
}

part1(input);
part2(input);

