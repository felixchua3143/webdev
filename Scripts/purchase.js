let cart = [];

const keyName = "CART" ;

function addCart(id){
    // gets cart items from the browser's local storage
    let cartItemsRaw = localStorage.getItem(keyName);

    // creates a variable to an empty set of cart items
    let cartItems = [];

    // check if there are cart items in the browser's local storage
    if (cartItemsRaw) {
        // convert the cart items from a string to a set of cart items
        cartItems = JSON.parse(cartItemsRaw);
    }

    // check if the cart items already contains the product
    const productExists = cartItems.find((p) => p.id === id);
    if (productExists) {
        alert("Product is already in cart!");
        return;
    }

    if(cart.length < 1){
        alert("Only 1 package can be bought!")
        return
    }

    // add a new cart item to the set of cart items
    const product = products.find((p) => p.id === id);
    cartItems.push(product);

    // convert the set of cart items to a string
    cartItemsRaw = JSON.stringify(cartItems);

    // save the cart items to the browser's local storage
    localStorage.setItem(keyName, cartItemsRaw);
}