import { ToDos } from "./ToDos.js";

window.addEventListener("load", () => {

    let todoList = new ToDos();
    document.querySelector(".tasks").innerHTML = todoList.renderList();

});