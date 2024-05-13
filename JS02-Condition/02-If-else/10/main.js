let login = prompt("Enter username");

let message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greeting"
    : login === ""
    ? "No login"
    : "";
