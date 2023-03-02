const shoppingForm = document.querySelector('#shopping-form');
const shoppingListName = document.querySelector('#shopping-list-name');
const shoppingListsContainer = document.querySelector('#shopping-lists');

let shoppingLists = JSON.parse(localStorage.getItem('shoppingLists')) || [];

shoppingForm.addEventListener('submit', event => {
    event.preventDefault();

    const shoppingList = {
        name: shoppingListName.value,
        items: []
    };

    shoppingLists.push(shoppingList);
    localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));

    renderShoppingLists();
});

const renderShoppingLists = () => {
    shoppingListsContainer.innerHTML = '';

    shoppingLists.forEach((shoppingList, index) => {
        const shoppingListEl = document.createElement('div');
        shoppingListEl.classList.add('card');

        shoppingListEl.innerHTML = `
      <form class="add-item-form">
      <div class="list-adding-fields">
      <input type="text" class="item-name" placeholder="Nazwa produktu">
      <input type="number" class="item-quantity" style="width: 40%" min="1" placeholder="Ilosc">
      <button type="submit" class="btn btn-secondary" style="margin-left: 3%; height: 35px">+</button>
      </div>
      </form>
      <ul class="list-items" id="shopping-list-${0}"></ul>
    `;

        const shoppingListItemsContainer = shoppingListEl.querySelector(`#shopping-list-${index}`);
        const addItemForm = shoppingListEl.querySelector('.add-item-form');
        const itemNameInput = shoppingListEl.querySelector('.item-name');
        const itemQuantityInput = shoppingListEl.querySelector('.item-quantity');

        addItemForm.addEventListener('submit', event => {
            event.preventDefault();

            shoppingList.items.push({
                name: itemNameInput.value,
                quantity: itemQuantityInput.value,
            });

            localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
            renderShoppingListItems(shoppingListItemsContainer, shoppingList.items);
        });

        renderShoppingListItems(shoppingListItemsContainer, shoppingList.items);
        shoppingListsContainer.appendChild(shoppingListEl);
    });
};

const renderShoppingListItems = (container, items) => {
    container.innerHTML = '';

    items.forEach(item => {
        const itemEl = document.createElement('li');
        itemEl.innerHTML = `
    ${item.name}, ${item.quantity}szt.
    `;
        container.appendChild(itemEl);
    });
};

renderShoppingLists();