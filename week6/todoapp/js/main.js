import { ToDos } from "./ToDos.js";

let todoList;

// Will trigger after page has loaded
window.addEventListener("load", () => {

    todoList = new ToDos(); // Create new Todo list object
    todoList.renderList(".tasks"); // Generate the HTML and event listeners

});