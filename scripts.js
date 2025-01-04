const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const filterAll = document.querySelector('.filter-all');

let myLi = '';

// Função para formatar preço em moeda local
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function showAll(productsArray) {
    myLi = '';
    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `;
    });
    list.innerHTML = myLi;
}

function MapAllItems() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: parseFloat((product.price * 0.9).toFixed(2)), // Dar 10% de desconto e fixar casas decimais
    }));

    showAll(newPrices);
}

function sumAllItems() {
    const totalValue = menuOptions
        .reduce((acc, curr) => acc + curr.price, 0)
        .toFixed(2);

    list.innerHTML = `
        <li>
            <p> O valor total dos itens é ${formatCurrency(totalValue)} </p>
        </li>
    `;
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter(product => product.vegan);

    showAll(filterJustVegan);
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', MapAllItems);
sumAll.addEventListener('click', sumAllItems);
filterAll.addEventListener('click', filterAllItems);
