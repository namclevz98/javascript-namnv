function filterProductByQuality(listProduct) {
    try {
        var products = [];
        listProduct.forEach(function(item) {
            if(item.quality > 0 && item.isDelete == false)
                products.push(item);
        })
        return products;
    } catch (err) {
        alert(err);
    }
}

// ES6

const filterProductByQuality_ES6 = (listProduct) => {
    try {
        var products = listProduct.filter(item => item.quality > 0  && item.isDelete == false);
        return products;
    } catch (err) {
        alert(err);
    }
}