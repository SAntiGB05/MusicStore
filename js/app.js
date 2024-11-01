import { products } from './products.js';

let cartItems = [];

function createProductDivs() {
    const container = document.getElementById('container');
    products.forEach(product => {
        const newDiv = document.createElement('div');
        newDiv.className = 'info-card';

        newDiv.innerHTML = `
            <img src="${product.src}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart">Añadir</button>
            </div>
        `;
        newDiv.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
        
        container.appendChild(newDiv);
    });
}
const cart = document.getElementById('cart');
document.querySelector('.navbar .btn').addEventListener('click', () => {
    cart.classList.toggle('hidden');
});

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

document.getElementById('empty-cart').addEventListener('click', () => {
    cartItems = [];
    updateCartDisplay();
});

document.getElementById('close-cart').addEventListener('click', () => {
    cart.classList.add('hidden');
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
            <button class="btn btn-danger btn-sm remove-item" data-index="${index}">X</button>
        `;

        cartItem.querySelector('.remove-item').addEventListener('click', (e) => {
            const itemIndex = e.target.getAttribute('data-index');
            cartItems.splice(itemIndex, 1);
            updateCartDisplay();
        });

        cartItemsContainer.appendChild(cartItem);
    });

    updateTotal();
}

function updateTotal() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById('checkout').textContent = `Comprar - Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`El total de su compra es: $${total.toFixed(2)}`);
});

createProductDivs();
