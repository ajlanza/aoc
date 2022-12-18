part1 = () => {
  let straight = false;
  let pairs = 0;
  let excludedValues = false;
  let password = ['a','b','c','d','e','f','g','h'];
  
  while(straight === false && pairs < 2 && excluded === true) {
    for(let i = password.length - 1; i >= 0; i--) {
      if(password[i] === password[i + 1]){
          pairs++;
      }
    }
  }
}