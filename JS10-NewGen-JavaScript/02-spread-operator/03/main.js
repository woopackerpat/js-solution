const person = (firstName, lastName, ...hobbies) => ({
  firstName,
  lastName,
  hobbies,
  numHobby: hobbies.length,
});
