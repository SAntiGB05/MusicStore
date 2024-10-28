import { products } from './products.js';

function createProductDivs() {
    const container = document.getElementById('container');
    products.forEach(product => {
        const newDiv = document.createElement('div');
        newDiv.className = 'info-card';

        newDiv.innerHTML= `
            <img src="${product.src}" alt="">
            <h4>Nombre: ${product.name}</h4>
            <p>Descripción: ${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button> Añadir </button>
        `;

        container.appendChild(newDiv);
    });
}
createProductDivs();