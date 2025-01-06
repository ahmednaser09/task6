const form = document.getElementById("form");
const itemInput = document.getElementById("input");
const shoppingList = document.getElementById("list");

form.addEventListener( "submit", function (event) {
    event.preventDefault(); 

    const itemText = itemInput.value.trim();

    if (itemText) {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent =  "delete";
        deleteButton.addEventListener( "click", function () {
            shoppingList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);

        shoppingList.appendChild(listItem);

        itemInput.value = "";
        itemInput.focus();
    }
});