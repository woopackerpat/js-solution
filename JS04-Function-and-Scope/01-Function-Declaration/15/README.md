บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * function ....
console.log(answer(1337)); // ** 1337 * 42
console.log(magic(1337)(42)); // *** 42 * 42
```
