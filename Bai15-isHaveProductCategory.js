function isHaveProductCategory (listProduct, categoryId) {
    try {
        var isHave = 0;
        listProduct.forEach(function(item) {
            if(item.categoryId == categoryId)
                isHave ++;
        })
        if(isHave == 0)
            return false;
        else
            return true;
    } catch (err) {
        alert(err);
    }
}

// ES6

const isHaveProductCategory_ES6 = (listProduct,categoryId) => {
    try {
        var isHave = listProduct.find(item => item.categoryId == categoryId);
        if(isHave == null)
            return false;
        else
            return true;
    } catch (err) {
        alert(err);
    }
}