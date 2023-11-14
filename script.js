let cart = [];
let total = 0;

function addToCart() {
    // In a real scenario, you would get product details dynamically.
    const product = {
        name: "Cubes",
        price: 19.99
    };

    cart.push(product);
    total += product.price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Display current items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update total
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

function viewCart() {
    alert('Cart Items: ' + JSON.stringify(cart) + '\nTotal: $' + total.toFixed(2));
}
