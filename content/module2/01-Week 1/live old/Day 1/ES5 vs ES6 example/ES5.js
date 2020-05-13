let Product = function(name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.nameAndPrice = function() {
  console.log(
    "The product's name is: " + this.name,
    "and the product's price is: " + this.price
  );
};

let table = new Product('table', 50);
table.nameAndPrice();





// Extend Product to Toy
let Toy = function(name, price, brand) {
  Product.call(this, name, price);
  this.brand = brand;
};

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Toy.prototype = Object.create(Product.prototype);
Toy.prototype.constructor = Toy;

// creating a new electronic product
const winnie = new Toy('teddy bear', 12, "Disney");
winnie.nameAndPrice();

// The product's name is: speaker and the product's price is: 100