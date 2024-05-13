class Sale {
  isAvailable = true;
  constructor(name = "John") {
    this.name = name;
  }

  calcPrice() {
    return (this.amount * (this.price * (1 - this.discount / 100))).toFixed(2);
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount.slice(0, discount.lengt - 1);
  }
}

const pepsi = new Beverage("Pepsi", 3, 20, "10%");

pepsi.calcPrice();
