function totalProduct(listProduct) {
    try {
        var sum = listProduct.reduce(function(total, item) {
            if(item.isDelete == false)
                return total + item.quality;
        }, 0);
        return sum; 
    } catch (err) {
        alert(err);
    }
}

// khong su dung reducer()

const totalProduct_forEach = (listProduct) => {
    try {
        var sum = 0;
        listProduct.forEach(item => {
            if(item.isDelete == false)
                sum+= item.quality;
        })
        return sum;
    } catch (err) {
        alert(err);
    }
}