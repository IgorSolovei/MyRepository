const seller = {
   name: "Steven Baker",
   rating: 4.5,
};

const customer = { ...seller };

customer.name = "Dave Boyle";
customer.rating = 5.0;

const order = { description: "product", price: 23.34 };

const receipt = {
   status: "Pending",
   seller: Object.assign({}, seller),
   customer: Object.assign({}, customer),
   order: Object.assign({}, order),
};

const receiptCopy = JSON.parse(JSON.stringify(receipt));
delete receiptCopy.seller.rating;
receiptCopy.status = "Completed";

console.log(receipt);
console.log(receiptCopy);
//console.log(customer);
