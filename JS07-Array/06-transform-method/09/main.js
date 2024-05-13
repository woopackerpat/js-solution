let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let initialValue = { max: arr[0], min: arr[0] };

const result = arr.reduce((acc, curr) => {
  if (acc.max < curr) {
    acc.max = curr;
  }

  if (acc.min > curr) {
    acc.min = curr;
  }

  return acc;
}, initialValue);
