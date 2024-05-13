function squareArr(arr) {
  const result = [];

  //   for (let item of arr) {
  //     result[result.length] = item ** 2;
  //   }

  arr.forEach((item, index) => {
    result[index] = item ** 2;
  });

  return result;
}

console.log(squareArr([2, 3, 5, 7, 11]));
