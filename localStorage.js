

const displayProductsAvailabeInStorage = () => {
    // get inputs for Local
    const nameInputField = document.getElementById('name-field');
    const productName = nameInputField.value;


    const priceInputField = document.getElementById('price-field');
    const productPrice = priceInputField.value;
    const price = parseFloat(productPrice);
    console.log(price);

    const storage = window.localStorage;
    // console.log(storageJSON);

    const productJSON = storage.getItem('phone')

    const product = JSON.parse(productJSON);
    console.log(product)


    for (const key in product) {
        console.log(key);
        displayProduct(key);
    }
}



const addToLocal = () => {


    // get inputs for Local
    const nameInputField = document.getElementById('name-field');
    const productName = nameInputField.value;


    const priceInputField = document.getElementById('price-field');
    const productPrice = priceInputField.value;
    const price = parseFloat(productPrice);
    console.log(price);


    if (!productName || !price) {
        nameInputField.value = '';
        priceInputField.value = '';
        return;
    }


    // get product from localStorage...
    else {
        const product = getLocalStorageEntries(productName);

        addToLocalStorage(product, productName, price);
        nameInputField.value = '';
        priceInputField.value = '';

        displayProduct(productName);


    }




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

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
displayProductsAvailabeInStorage();
