function filterProductById(listProduct, productId) {
    try {
        var product = listProduct.filter(function(item) {
            return productId = item.id;
        });
        return product[0].name;
    } catch (err) {
        alert(err);
    }
}

// ES6

const filterProductById_ES6 =(listProduct, productId) => {
    try {
        var product = listProduct.find(item => productId = item.id);
        return product.name;
    } catch (err) {
        alert(err);
    }
}