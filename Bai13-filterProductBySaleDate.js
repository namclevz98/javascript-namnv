function filterProductBySaleDate(listProduct) {
    try {
        var products = [];
        listProduct.forEach(function(item) {
            if(item.saleDate >= new Date().toDateString() && item.isDelete == false) {
                var product = [item.name];
                products.push(product);
            }
        })
        return products;
    } catch (err) {
        alert(err);
    }
}

// ES6

const filterProductBySaleDate_ES6 = (listProduct) => {
    try {
        var products = listProduct.filter(item => item.saleDate >= new Date().toDateString() && item.isDelete == false);
        var productsBySale = products.map[item => item.name];
        return productsBySale;
    } catch (err) {
        alert(err);
    }
}