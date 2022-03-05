

const addToLocal = () => {


    // get inputs for Local
    const nameInputField = document.getElementById('name-field');
    const productName = nameInputField.value;


    const priceInputField = document.getElementById('price-field');
    const productPrice = priceInputField.value;
    const price = parseFloat(productPrice);
    console.log(price);


    if (!productName && productPrice === '') {
        return;
    }


    // get product from localStorage...
    const product = getLocalStorageEntries(productName);

    addToLocalStorage(product, productName, price);
    nameInputField.value = '';
    priceInputField.value = '';




}

const getLocalStorageEntries = name => {
    const storage = window.localStorage;
    // console.log(storageJSON);

    const productJSON = localStorage.getItem(`${name}`);
    ;
    const product = JSON.parse(productJSON)
        ;
    let productObj;
    if (product) {
        productObj = product;
        return product;
    }
    else {
        productObj = {};
        return productObj;
    }
    // console.log(product);


}

const addToLocalStorage = (product, productName, price) => {
    if (!product) {
        console.log(product)
        product.productName = product[productName];
    }
    else {
        productJSON = JSON.stringify(product);
        localStorage.setItem(`${productName}`, `${price}`)
    }
}

