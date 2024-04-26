/////////// Start of function ////////////
function dividers(numbers) {
	// отсортируем сначала 
  numbers.sort(function (a, b) {
    return a - b;
  });

  let a = numbers[0];

  let arr = [];

  let half_num = a / 2;

  let len = Math.ceil(half_num);

  let div = 2;

  for (let i = 2; i <= len + 1; i++) {
    div = i;
    if (i == len + 1) {
      div = a;
    }

    let flag = true;

    for (let num of numbers) {
      if (num % div != 0) {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      arr.push(div);
    }
  }

  return arr;
}

/////////// End of function ////////////
//console.log(dividers([50,20,30,10]));
