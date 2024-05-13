// const doubleAndReturnArgs = (array, ...numbers) => {
//   const doubles = numbers.map((el) => el * 2);

//   return [...array, ...doubles];
// };
const doubleAndReturnArgs = (array, ...numbers) => [
  ...array,
  ...numbers.map((el) => el * 2),
];
