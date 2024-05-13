const alphabets = ["a", "b", "a", "c", "a", "d"];

let result = [];

let foundIndex = alphabets.indexOf("");

do {
  if (foundIndex !== -1) {
    result.push(foundIndex);

    foundIndex = alphabets.indexOf("a", foundIndex + 1);
  }
} while (foundIndex !== -1);
