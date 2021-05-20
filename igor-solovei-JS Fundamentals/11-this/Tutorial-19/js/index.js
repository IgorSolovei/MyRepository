function LoyaltyСard(owner) {
  this.owner = owner;
  this.purchasesCount = 1;
  this.discount = 0;
  this.makePurchase = function () {
    this.purchasesCount++;
  };
  this.toString = function () {
    return `Owner: ${this.owner}, purchasesCount: ${this.purchasesCount}, discount: ${this.discount}`;
  };
}

let card1 = new LoyaltyСard("Baron Bogan");
let card2 = new LoyaltyСard("Ivan Ivanov");

card1.makePurchase();
card1.makePurchase();
card1.makePurchase();

console.log(card1);
console.log(card2);