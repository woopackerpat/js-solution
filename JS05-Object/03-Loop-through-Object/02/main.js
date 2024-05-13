const isNumber = (num) => {
  if (num === null || String(num).trim() === "" || typeof num === "boolean") {
    return false;
  }

  return !isNaN(num);
};

const multiplyNumeric = (obj, num) => {
  let result = {};

  for (let key in obj) {
    result[key] = isNumber(obj[key]) ? num * obj[key] : obj[key];
  }
  return result;
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu, 5));
