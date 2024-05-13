let str = "31 45 12 67 34 86 23 37 19 41";

const arr = str.split(" ");

const filteredArr = arr.filter((el) => el < 40);

const result = filteredArr.reduce((acc, curr) => acc + Number(curr), 0);

const result1 = str
  .split(" ")
  .filter((el) => el < 40)
  .reduce((acc, curr) => acc + Number(curr), 0);
