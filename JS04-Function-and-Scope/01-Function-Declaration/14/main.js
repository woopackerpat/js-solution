function max(a, b, c, d) {
  if (a === undefined) {
    return;
  }

  if (b === undefined) {
    return isNaN(+a) ? NaN : a;
  }

  if (c === undefined) {
    return isNaN(+a) || isNaN(+b) ? NaN : Math.max(a, b);
  }

  if (d === undefined) {
    return isNaN(+a) || isNaN(+b) || isNaN(+c) ? NaN : Math.max(a, b, c);
  }

  return isNaN(+a) || isNaN(+b) || isNaN(+c) || isNaN(+d)
    ? NaN
    : Math.max(a, b, c, d);
}
