var md5 = require('md5');

part1 = () => {
  const secret = 'ckczppom';
  let i = 0;
  let finished = false;
  while(finished === false) {
    thisTry = secret + i;
    if(md5(thisTry).slice(0, 5) === '00000') {
        finished = true;
        console.log('MD5 hash with 5 leading zeros is ', i);
    }
    else {
        i++;
    }
  }
}

part2 = () => {
    const secret = 'ckczppom';
    let i = 0;
    let finished = false;
    while(finished === false) {
      thisTry = secret + i;
      if(md5(thisTry).slice(0, 6) === '000000') {
          finished = true;
          console.log('MD5 hash with 6 leading zeros is ', i);
      }
      else {
          i++;
      }
    }
  }

part2();