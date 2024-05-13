let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, pete, mary];

function getAverageAge(array) {
  const totalAge = array.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);

  const avg = totalAge / array.length;

  return avg;
}
