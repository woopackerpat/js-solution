ผลจากการรันคำสั่งในบรรทัด \* คืออะไร

```js
let arr = [
  "a",
  "b",
  function () {
    alert(this);
  },
];

arr.push(function () {
  alert(this);
});

arr[2](); // * undefined -> alert window
```
