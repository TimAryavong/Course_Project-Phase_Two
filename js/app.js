/*
    Title: Course Project - Phase Two - app.js(to-do list)
    By: Tim Aryavong
    Date: Tuesday July 21, 2020
    Description: A to-do list that focuses on demonstrating event handlers and DOM manipulation
    Phase Two - modularized stuff
    Created createListItem(item), helper derived from some functionality inside addItem().
    Updated removeItem, querySelectorAll() now querySelector only picks up inputs where type is checkbox (line 34).
*/

let list = document.querySelector('ol'); // bind ol element
let submit = document.querySelector('.submit'); // bind submit button
let remove = document.querySelector('.remove'); // bind remove button

function createListItem(item) { //returns newly created list nodes with innerText and appended checkbox inputs, takes an input element as argument
    let checkbox = document.createElement('input'); // create input
    checkbox.setAttribute('type', 'checkbox'); // make input into a checkbox

    let listItem = document.createElement('li'); // create list element
    listItem.innerText = item.value + ' '; // set innertext from input value
    listItem.appendChild(checkbox); // append checkbox to the list item

    return listItem;
}

function addItem() {
    let item = document.getElementById('inputNewItem'); // binds the current input item
    list.appendChild(createListItem(item)); // append new item to ol using helper function
    item.value = ''; // clear the input field after the new item is added.
}

function removeItem(e) { // add alert box that asks if you really want to delete the items.
    if (confirm('Are you sure you want to delete?')) { // pop up confirmation for deletion
        let checkedBoxes = document.querySelectorAll("input[type='checkbox']"); // find all inputs where type='checkbox'
        let counter = 0;
        for (let index = 0; index < checkedBoxes.length; index++) { // for each input where 'checked' attribute is true, remove its parent node('li')
            if (checkedBoxes[index].checked == true) {
                checkedBoxes[index].parentNode.remove();
                counter++;
            }
        }
        alert(counter + ' items deleted.');
    }
}

submit.addEventListener('click', addItem); // listen for submit clicks
remove.addEventListener('click', removeItem); // listen for delete clicks

list.onchange = function (e) { // if checkbox is checked it will bubble to ol, that's why list.onchange
    if (e.target.checked == true) { // if the box is checked
        e.target.parentNode.style.textDecorationLine = 'line-through'; // change targeted item css to line-through
        list.appendChild(e.target.parentNode); // appends the targeted node to the bottom of the list
    } else { // else remove the line-through
        e.target.parentNode.style.textDecorationLine = 'none';
    }
};

window.onkeydown = function (e) { // adds enter key functionality to add items faster for testing
    if (e.key == 'Enter') // 'e.key' functions in place of 'e.keyCode', cool
        addItem();
    if (e.key == 'Delete')
        removeItem();
};