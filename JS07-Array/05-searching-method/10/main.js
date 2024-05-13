function filterRange(arr, a, b) {
  return arr.filter((el) => el >= a && el <= b);
}

filterRange([7, 12, 9, 4, 5], 3, 10); // -> [4, 5, 7 , 9]
