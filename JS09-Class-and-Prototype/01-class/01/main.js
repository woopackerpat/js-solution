class Calculator {
  value = 0;

  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  sum(number) {
    this.value += number;
    return this;
  }

  substract(number) {
    this.value -= number;

    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    this.value /= number;
    return this;
  }

  show() {
    alert(this.value);
    return this;
  }
}

const calc = new Calculator(0);

calc.sum(4).substract().multiply().show();
