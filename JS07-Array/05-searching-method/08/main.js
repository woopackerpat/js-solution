const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  const targetIdx = tasks.findIndex((item) => item.id === id);

  if (targetIdx !== -1) {
    tasks.splice(targetIdx, 1);
  }
}

deleteTask(1);

console.log(tasks);
