const topSalaries = (salaries) => {
  let topSalaryName;

  let maxSalary = 0;

  // [["John", 100], ["Pete", 300]]
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      topSalaryName = name;
      maxSalary = salary;
    }
  }

  return topSalaryName ? topSalaryName : null;
};

