const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  const targetIdx = tasks.findIndex((item) => item.id === id);

  if (targetIdx !== -1) {
    tasks[targetIdx].name = newName;
  }
}

updateTask(2, "Travelling");
