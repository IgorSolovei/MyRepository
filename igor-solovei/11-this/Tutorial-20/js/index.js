const DISCOUNT_RULES = {
   2: 5,
   5: 10,
   15: 20,
};

function LoyaltyСard(owner) {
   this.owner = owner;
   this.purchasesCount = 1;
   this.discount = 0;
   this.makePurchase = function () {
      this.purchasesCount++;
   };
   this.setDiscount = function () {
      if (this.purchasesCount >= 2 && this.purchasesCount < 5) {
         this.discount = DISCOUNT_RULES[2];
      } else if (this.purchasesCount >= 5 && this.purchasesCount < 15) {
         this.discount = DISCOUNT_RULES[5];
      } else if (this.purchasesCount >= 15) {
         this.discount = DISCOUNT_RULES[20];
      }
      let message = `Discount set at ${this.discount} percent`;
      return message;
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
card1.makePurchase();
console.log(card1.setDiscount());

card2.makePurchase();
console.log(card2.setDiscount());

console.log(card1.toString());
console.log(card2.toString());




