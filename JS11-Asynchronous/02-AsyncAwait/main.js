// 1. สร้าง async function เพื่อรอค่าจาก promise และทำการ log value

const waitAndResolve = () =>
  new Promise((resolve) => setTimeout(() => resolve("Resolved!"), 1000));

async function asyncAwaitExample() {
  const message = await waitAndResolve();
  console.log(message);
}

asyncAwaitExample();

// 2. ทดลองใช้ try/catch ในการจัดการ error ที่ถูก reject ออกมาหลังจาก 1 วินาที

const waitAndReject = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Failed!")), 1000)
  );

async function handleRejection() {
  try {
    await waitAndReject();
  } catch (error) {
    console.error(`Caught an error: ${error.message}`);
  }
}

handleRejection();

// 3. เขียน async function เพื่อเรียกใช้ pomise 3 ลำดับ และทำการ log result

const createPromise = (message, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(message), delay));

async function sequentialCalls() {
  const result1 = await createPromise("First", 1000);
  console.log(result1);

  const result2 = await createPromise("Second", 2000);
  console.log(result2);

  const result3 = await createPromise("Third", 3000);
  console.log(result3);
}

sequentialCalls();

// 4. ใช้ Promise.all ในการจัดการ async function

async function parallelCalls() {
  const [first, second, third] = await Promise.all([
    createPromise("First", 1000),
    createPromise("Second", 2000),
    createPromise("Third", 3000),
  ]);

  console.log(first, second, third);
}

parallelCalls();
s;
