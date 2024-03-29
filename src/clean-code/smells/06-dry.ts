type Size = "" | "small" | "medium" | "large" | "xlarge";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}
  toString() {
    // No DRY
    if (this.name.length <= 0) throw Error("name is empty");
    if (this.price <= 0) throw Error("price is zero");
    if (this.size.length <= 0) throw Error("size is empty");

    return `${this.name} (${this.price}), ${this.size}`;
  }
  // otroMetodo() {
  //   // Duplicacion de codigo
  //   if (this.name.length <= 0) throw Error("name is empty");
  //   if (this.price <= 0) throw Error("price is zero");
  //   if (this.size.length <= 0) throw Error("size is empty");

  // }
}

(() => {
  const bluePants = new Product("blue large jeans");
  console.log("bluePants: ", bluePants);
})();
