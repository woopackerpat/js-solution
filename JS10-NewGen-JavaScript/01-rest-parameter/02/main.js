const filterOutOdds = (...numbers) => {
  const odds = numbers.filter((el) => el % 2 === 0);
  return odds;
};
