let user = prompt("Enter username") || "guest";

if (user !== "codecamp") {
  alert("Welcome " + user);
} else {
  if (password === "123456") {
    alert("Welcome " + user);
  } else {
    alert("Wrong password");
  }
}
