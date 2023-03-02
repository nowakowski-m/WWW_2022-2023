const shoppingForm = document.querySelector('#shopping-form');
const shoppingListName = document.querySelector('#shopping-list-name');
const shoppingListsContainer = document.querySelector('#shopping-lists');

let shoppingLists = JSON.parse(localStorage.getItem('shoppingLists')) || [];

shoppingForm.addEventListener('submit', event => {
  event.preventDefault();

  const shoppingList = {
    name: shoppingListName.value,
    date: new Date().toLocaleString(),
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
      <h3>
      <b>${shoppingList.name} (${shoppingList.date})</b>
        <img class="pin-icon" src="pin.png">
        <button class="remove-shopping-list">
        <img class="trash-bin" src="delete.png" alt="Usuń listę">
        </button>
      </h3>
      <form class="add-item-form">
      <div class="list-adding-fields">

      <br><select class="item-category" style="width: 70%; margin-left: 5%; margin-top: 0.5px; height: 37px">
      <option selected>Owoce</option>
      <option value="Warzywa">Warzywa</option>
      <option value="Mięso">Mięso</option>
      <option value="Nabiał">Nabiał</option>
      <option value="Chemia">Chemia</option>
      <option value="Napoje">Napoje</option>
      <option value="Tesktylia">Tesktylia</option>
      <option value="Pieczywo">Pieczywo</option>
      <option value="Inne">Inne</option>
      </select>

      <input type="text" class="item-name" placeholder="Nazwa produktu">
      <input type="number" class="item-quantity" style="width: 40%" min="1" placeholder="Ilość">
      <button type="submit" class="btn btn-secondary" style="margin-left: 3%; height: 35px">+</button>
      </div>
      </form>
      <ul class="list-items" id="shopping-list-${index}"></ul>
    `;

    const shoppingListItemsContainer = shoppingListEl.querySelector(`#shopping-list-${index}`);
    const addItemForm = shoppingListEl.querySelector('.add-item-form');
    const itemNameInput = shoppingListEl.querySelector('.item-name');
    const itemQuantityInput = shoppingListEl.querySelector('.item-quantity');
    const itemCategoryInput = shoppingListEl.querySelector('.item-category');
    const removeShoppingListButton = shoppingListEl.querySelector('.remove-shopping-list');

    addItemForm.addEventListener('submit', event => {
      event.preventDefault();

      shoppingList.items.push({
        name: itemNameInput.value,
        quantity: itemQuantityInput.value,
        category: itemCategoryInput.value
      });

      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
      renderShoppingListItems(shoppingListItemsContainer, shoppingList.items);
    });

    removeShoppingListButton.addEventListener('click', () => {
      shoppingLists = shoppingLists.filter((_, i) => i !== index);
      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
      renderShoppingLists();
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
    • ${item.name}, ${item.quantity}szt. (${item.category})
    `;
    container.appendChild(itemEl);
  });
};

renderShoppingLists();