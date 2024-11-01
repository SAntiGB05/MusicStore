import { products } from './products.js';

function createProductDivs() {
    const container = document.getElementById('container');
    products.forEach(product => {
        const newDiv = document.createElement('div');
        newDiv.className = 'info-card style="width: 18rem;';

        newDiv.innerHTML= `
                <img src="${product.src}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary">Añadir</a>
                </div>
        `;

        container.appendChild(newDiv);
    });
}
createProductDivs();