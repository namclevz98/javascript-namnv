function filterProductByDate (listProduct) {
    try {
        var products = [];
        listProduct.forEach(function(item) {
            if(item.saleDate >= new Date().toDateString() && item.quality > 0) {
                var product = [item.id, item.name];
                products.push(product);
            }
        })
        return products;
    } catch (err) {
        alert(err);
    }
}

// ES6

const filterProductByDate_ES6 = (listProduct) => {
    try {
        var allProducts = [];
        allProducts = listProduct.filter(item => item.saleDate >= new Date().toDateString() && item.quality > 0 );
        var products = allProducts.map(item => [item.id, item.name]);
        return products;
    } catch (err) {
        alert(err);
    }
}
