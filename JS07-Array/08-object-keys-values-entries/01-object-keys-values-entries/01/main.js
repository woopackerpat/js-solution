let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sumKey = 0;

for (let key of Object.keys(salaries)) {
  sumKey += salaries[key];
}

let sumValue = 0;

for (let value of Object.values(salaries)) {
  sumValue += value;
}

let sumEntries = 0;

for (let entry of Object.entries(salaries)) {
  // entry -> รอบ 1 -> ["John", 100]
  sumEntries += entry[1];
}
