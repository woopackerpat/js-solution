// #1
let array = [9, 17, 23, 5];

let result = array.filter((el) => el > 10);

// #2
array = [1, 2, 3, 4];

result = array.filter((el) => el % 2);

// #3
array = [1, "1", 2, {}];

result = array.filter((el) => typeof el === "number");

// #4

array = ["apple", "banana", "orange", "pineapple", "watermeon"];

result = array.filter((el) => el.length > 6);

// #5

array = [1, -3, 2, 8, -4, 5];

result = array.filter((el) => el > 0);

// #6

array = [1, 3, 4, 5, 6, 7, 8];

result = array.filter((el) => el % 3 === 0);

// #7

array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];

result = array.filter((el) => el.stratWith("E"));

// #8

array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];

result = array.filter((el) => el === el.toUpperCase());

// #9

array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];

result = array.filter((el) => el.toLowerCase().includes("buri"));

// #10

array = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];

result = array.filter((el) => el.age >= 18);

// #11

array = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];

result = array.filter((el) => el.id !== 4);

// #12

array = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];

result = array.filter((el, idx, arr) => {
  return el.birth.slice(5, 7) === "06";
});
