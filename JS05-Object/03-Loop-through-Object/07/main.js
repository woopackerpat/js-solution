const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

const nameInput = prompt("Enter name");

let showText = "Not found";

if (employees[nameInput] !== undefined) {
  showText = `Name: ${nameInput}, saraly: ${employees[nameInput].salary}, address: ${employees[nameInput].address.district}, ${employees[nameInput].address.province}`;
}

console.log(showText);
