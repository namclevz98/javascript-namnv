function filterProductById(listProduct, productId) {
    try {
        var product = [];
        listProduct.forEach(function(item){
            if(productId = item.id)
                product.push(item);           
        })
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