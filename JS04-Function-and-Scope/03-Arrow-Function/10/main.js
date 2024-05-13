const isLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }

  return year % 4 === 0;
};

const calDayOld = (birthYear) => {
  let result = 0;

  for (let i = birthYear; i <= 2020; i++) {
    if (isLeapYear(i)) {
      result += 366;
    } else {
      result += 365;
    }
  }

  return result;
};
