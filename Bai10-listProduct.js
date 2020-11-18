function listProduct (amount = 10) {
    try {
        var list = [];
        for ( let i = 1 ; i <= amount ; i++) {
            var product = new Product (i, "PRODUCT" + i, i % 2 + 1, new Date().toDateString(), 50 - i, false); // (id,name,categoryId,saleDate,isDelete)
            list.push(product);
        }
        return list;
    } catch (err) {
        alert(err);
    }
}
