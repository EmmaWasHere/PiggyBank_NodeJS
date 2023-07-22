module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%COMPANY%}/g, product.company);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%GAME%}/g, product.game);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.sale) output = output.replace(/{%NOT_SALE%}/g, 'not-sale');
    return output;
}