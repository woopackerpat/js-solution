const nums = [7, 9, -5, -1, 0, 3];

const result = nums.find((item) => {
  return item < 0;
});

console.log(result);

// function findMyValue(value, arr) {
//   for (let item of arr) {
//     if (item === value) {
//       return item;
//     }
//   }

//   return;
// }

// findMyValue(9, nums);
