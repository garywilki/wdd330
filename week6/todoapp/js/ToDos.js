const   FILTER_NONE = 0,
        FILTERCOMPLETE_COMPLETE = 1,
        FILTERCOMPLETE_INCOMPLETE = 2;

export class ToDos {

    constructor() {
        this.taskList = []; // initialize empty array

        // Add a blank array into localStorage if necessary
        if (localStorage.getItem("todolist") === null) {
            this.saveTasks();
        }

        // Populate the list of tasks from local storage
        let JSONobject = JSON.parse(localStorage.getItem("todolist"));
        for (let object of JSONobject) {
            this.taskList.push(new ToDos.Task(object.content, object.completed));
        }

        // Populate the list with default tasks if the list is empty (for demo purposes)
        if (this.taskList.length == 0) {
            this.taskList.push(new ToDos.Task("Do something", true));
            this.taskList.push(new ToDos.Task("Do something else", false));
            this.taskList.push(new ToDos.Task("Finish the ToDo App", false));
        }

        // Ensure data is synced to local storage
        this.saveTasks();

        // Set default filter to "all"
        this.filterComplete = FILTER_NONE;
    }

    // Save tasks to local storage
    saveTasks() {
        localStorage.setItem("todolist", JSON.stringify(this.taskList));
    }

    // Add task to list and save to local storage
    addTask(content) {
        this.taskList.push(new ToDos.Task(content, false));
        this.saveTasks();
    }

    // Remove task from list and save to local storage
    removeTask(taskID) {
        this.taskList = this.taskList.filter(task => !(task.id == taskID));
        this.saveTasks();
    }

    // Obtain the task object from the list
    getTask(taskID) {
        return this.taskList.find(task => task.id == taskID);
    }

    // Ensure that all event listeners are set up after each render
    refreshEventListeners(HTMLSelector) {
        let todos = this;

        // Checkbox listeners
        let checkboxes = document.querySelectorAll(HTMLSelector + " .checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", function () {
                let task = todos.getTask(checkbox.parentElement.getAttribute("taskid"));
                let taskContent = checkbox.parentElement.querySelector(".content");
                task.completed = !task.completed;
                (task.completed) ? checkbox.classList.add("checked") : checkbox.classList.remove("checked");
                (task.completed) ? taskContent.classList.add("strikethrough") : taskContent.classList.remove("strikethrough");
                todos.renderList(HTMLSelector);
            });
        });

        // Delete button listeners
        let deleteDivs = document.querySelectorAll(HTMLSelector + " .delete");
        deleteDivs.forEach(div => {
            div.addEventListener("click", function () {
                todos.removeTask(div.parentElement.getAttribute("taskid"));
                todos.renderList(HTMLSelector);
            });
        });

        // Add Task button listeners
        let addTaskButtons = document.querySelectorAll(HTMLSelector + " .buttonAddTask");
        addTaskButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                let text = button.parentElement.querySelector(".taskContent").value;
                if (text) {
                    todos.addTask(text);
                    todos.renderList(HTMLSelector);
                }
                else {
                    document.querySelector(HTMLSelector + " .message").innerHTML = `The new task cannot be blank!`;
                }
            });
        });

        // Filter button listeners
        let filterButtons = document.querySelectorAll(HTMLSelector + " .task-filter *");
        filterButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                let filterValue = button.getAttribute("value");
                todos.filterComplete = parseInt(filterValue);
                todos.renderList(HTMLSelector);
            });
        });
    }

    // Generate the HTML for the todo list within the specified HTML element
    renderList(HTMLSelector) {
        let html = "";
        let filterComplete;

        switch(this.filterComplete) {
            case FILTERCOMPLETE_COMPLETE:
                filterComplete = false;
                break;
            case FILTERCOMPLETE_INCOMPLETE:
                filterComplete = true;
                break;
            default:
                filterComplete = undefined;
        }

        let filteredList = this.taskList.filter(task => {
            return !(task.completed === filterComplete);
        });
        for (let task of filteredList) {
            html += `<div class="task" taskid="${task.id}">`;
            html += `   <div class="checkbox ${task.completed ? "checked" : ""}"></div>`;
            html += `   <div class="content ${task.completed ? "strikethrough" : ""}">${task.content}</div>`;
            html += `   <div class="delete">❌</div>`;
            html += `</div>`;
        }
        
        html += `<div class="task-footer">`;
        html += `   <div class=task-count>${this.taskList.reduce( (count, task) => count + !task.completed, 0)} task(s) left</div>`;
        html += `   <div class=task-filter>`;
        html += `       <div class="filter-all ${(this.filterComplete == FILTER_NONE) ? "selected" : ""}" value=${FILTER_NONE}>All</div>`;
        html += `       <div class="filter-active ${(this.filterComplete == FILTERCOMPLETE_INCOMPLETE) ? "selected" : ""}" value=${FILTERCOMPLETE_INCOMPLETE}>Active</div>`;
        html += `       <div class="filter-completed ${(this.filterComplete == FILTERCOMPLETE_COMPLETE) ? "selected" : ""}" value=${FILTERCOMPLETE_COMPLETE}>Completed</div>`;
        html += `   </div>`;
        html += `</div>`;

        html += `<form class="addtask" onsubmit="return false">`
        html += `<label for="task">Add New Task</label>`
        html += `<input name="taskContent" class="taskContent" required>`
        html += `<button type="button" class="buttonAddTask">Add Task</button>`
        html += `</form>`

        html += `<div class="message"></div>`

        document.querySelector(HTMLSelector).innerHTML = html;

        this.refreshEventListeners(HTMLSelector);
        this.saveTasks();
    }

    // Inner class storing the task information
    static Task = class {

        static nextID = 0;

        constructor(content, completed) {
            this.id = ToDos.Task.nextID++;
            this.content = content;
            this.completed = completed;
        }
    }

}