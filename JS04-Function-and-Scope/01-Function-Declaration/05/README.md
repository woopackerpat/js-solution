บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // * From Matt to Sarah
sendTo(null); // ** From null to undefined
```

```js
const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** From CC to Max
sendTo("Ben", "Jay"); // **** From Jay to Ben
```
