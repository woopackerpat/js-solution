const checkAge = ({ firstName, lastName, age }) => {
  if (age <= 18) {
    return alert("Unauthorized");
  }

  return alert(`Hello ${firstName} ${lastName}`);
};
