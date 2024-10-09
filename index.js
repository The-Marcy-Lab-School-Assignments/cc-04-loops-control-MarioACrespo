//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (num) => {
  let i = 0;
  while (i != num) {
    i++;
    console.log(i);
  }
};

// countFromOne(10)

const countEveryOdd = (num) => {
  for (let i = 1; i != num + 1; i++) {
    if (i === num) {
      console.log(i);
    } else if (i % 2 === 1) {
      console.log(i);
    }
  }
};

// countEveryOdd(10)

const isNegative = (num) => {
  if (num >= 0) {
    return true;
  } else {
    return false;
  }
};

const betweenFiveAndTwenty = (num) => {
  if (5 < num && num < 20) {
    return true;
  } else {
    return false;
  }
};

const sumOfThreeOrFive = () => {
  let i = 0;
  let sum = 0;
  while (i != 999) {
    i++;
    if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfThreeOrFive());

const isAllLowerCase = (word) => {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
};

// console.log(isAllLowerCase('Mama'))
// console.log(isAllLowerCase('mia'))
