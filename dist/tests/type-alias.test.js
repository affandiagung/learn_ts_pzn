describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: "Elektronik"
        };
        const product = {
            id: 1,
            name: "Laptop",
            price: 1000000,
            category: category
        };
        console.info(product);
        console.info(category);
    });
});
export {};
