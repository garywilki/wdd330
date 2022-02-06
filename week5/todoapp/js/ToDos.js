export class ToDos {

    constructor() {
        this.taskList = [];

        // Get task list from local storage
        
        this.taskList.push(new ToDos.Task("Do something", true));
        this.taskList.push(new ToDos.Task("Do something else", false));
        this.taskList.push(new ToDos.Task("Finish the ToDo App", false));
    }

    renderList() {
        let html = "";
        for (let task of this.taskList) {
            html += `<div class="task">`;
            html += `   <div class="checkbox">${task.completed}</div>`;
            html += `   <div class="content">${task.content}</div>`;
            html += `   <div class="delete">X</div>`;
            html += `</div>`;
        }
        
        html += `<div class="task-footer">`;
        html += `<div>3 tasks left</div>`;
        html += `<div>All Active Completed</div>`;
        html += `</div>`;

        return html;
    }

    static Task = class {

        constructor(content, completed) {
            this.content = content;
            this.completed = completed;
        }
    }

}