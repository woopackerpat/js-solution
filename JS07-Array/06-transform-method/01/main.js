// #1
let array = [1, 2, 30, 400];

let result = array.map((el) => el * 2);

// #2

array = [1, 2, 3, 4];

result = array.map((el) => String(el));

// #3

array = [1, "1", 2, {}];

result = array.map((el) => typeof el);

// #4

array = ["apple", "banana", "orange"];

result = array.map((el) => el.toUppercase());

// #5

array = [1, 3, 4, 5, 6, 7, 8];

result = array.map((el) => (el % 2 === 0 ? "even" : "odd"));

// #6

array = [1, -3, 2, 8, -4, 5];

result = array.map((el) => Math.abs(el));

// #7

array = [100, 200.25, 300.84, 400.3];

result = array.map((el) => el.toFixed(2));

// #8

const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

array = [0, 5, 10, 7, 6, 5, 0];

result = array.map((el) => MONTH[el]);

// #9

array = [1, 16, 81, 256, 625, 1296];

result = array.map((el) => Math.sqrt(Math.sqrt(el)));

// #10

array = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

result = array.map((el) => el.name);

// #11

result = array.map((el) => el.age);

// #12

array = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];

result = array.map((el) => {
  return `${el.name} ${el.surname}`;
});

// #13

array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];

result = array.map((el) => {
  return {
    name: el.name,
    birth: el.birth,
    age: 2024 - el.birth.slice(0, 4),
  };
});

// #14

array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

function formatDate(date) {
  return (
    date.slice(8, 10) +
    " " +
    MONTH[+date.slice(5, 7) - 1] +
    " " +
    date.slice(0, 4)
  );
}

result = array.map((el) => {
  return `<tr><td>${el.name}</td><td>${formatDate(el.birth)}</td></tr>`;
});
