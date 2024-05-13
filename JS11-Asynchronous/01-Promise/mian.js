// 1. สร้าง promise และให้ทำการ resolve "Hello, Wolrd" หลังจาก 1 วินาที ทำการ log message เมื่อ resolve

const helloWorld = new Promise((resolve) => {
  setTimeout(() => resolve("Hello, World!"), 1000);
});

helloWorld.then((message) => console.log(message));

// 2. สร้าง promise และทำการ reject error หลังจาก 2 วินาที โดยใช้ .catch หลังจากนั้นให้ log error message

const faultyPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Something went wrong!")), 2000);
});

faultyPromise.catch((error) => console.error(error.message));

// 3. สร้าง promise chaining ที่ resolve ตามลำดับ โดยแต่ละการ resolve ให้ค่าเพิ่มขึ้นที่ละ 1

new Promise((resolve) => resolve(1))
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => console.log(num));

// 4. ใช้ Promise.all โดยให้ resolve string และรวมเป็นแค่ string เดียว
const promise1 = new Promise((resolve) => {
  resolve("A");
});

const promise2 = new Promise((resolve) => {
  resolve("B");
});

const promise3 = new Promise((resolve) => {
  resolve("C");
});

Promise.all([promise1, promise2, promise3])
  .then((results) => results.join(""))
  .then((combined) => console.log(combined));
