console.log(null || 2 || undefined); // 2
console.log(alert(1) || 2 || alert(3)); // 2
console.log(1 && null && 2); // null
console.log(alert(1) && alert(2)); // undefined
console.log(null || (2 && 3) || 4); // 3
