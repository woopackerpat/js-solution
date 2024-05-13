let user = {
  name: "John",
  years: 27,
};

const { name, years: age, isActive = true } = user;
