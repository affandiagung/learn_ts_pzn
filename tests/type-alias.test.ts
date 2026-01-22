import type { Category, Product } from "../src/alias";


describe('Type Alias', function () {
    it('should support in typescript', function () {

       const category: Category = {
            id: 1,
            name: "Elektronik"
        }

        const product:Product = {
            id: 1,
            name: "Laptop",
            price: 1000000,
            category: category
        }
        
        console.info(product)
        console.info(category)
    });
  
});
export {};
