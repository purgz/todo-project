import TodoItem from "./todoItem";
import Project from "./Project";
import Storage from "./Storage";
import GHIcon from "../images/Icon.svg";

export default class Dom{
    //static var - temporary for storing projects
    static projects = [];
    static currentExpandedProject;
    static currentTask;
    
    static loadHome(){
        Dom.loadFooter();
        Dom.loadSideBar();
        Dom.loadNewProjectModal();
        Dom.NewTodoModal();
        Dom.UpdateTodoModal();
        Dom.newProjectEventListeners();
        
        Dom.projects = Storage.getProjects();
        if (Dom.projects.length > 0){
            Dom.RenderProjects();
        }
    }

    static loadFooter(){
        const footerIcon = document.querySelector("#github-link");
        const icon = new Image();
        icon.src = GHIcon;
        icon.classList.add("gh-icon");
        footerIcon.appendChild(icon)
    }

    static loadSideBar(){
        const sideBar = document.querySelector(".left-nav");
        sideBar.innerHTML = `
        <div>
            <div id = "today">
                Today
            </div>
            <div id = "week">
                This week
            </div>
            <button id = "new-project-btn">New Project</button>
            <div class = "project-container-wrapper">
                Projects
                <div class = "project-container"></div>
            </div>
        </div>
        `
    }

    static loadNewProjectModal(){
        const body = document.querySelector("body");
        const modal = document.createElement("div");
        modal.classList.add("new-project-modal");
        modal.innerHTML = `
        <div class="project-modal-content">
            <div class="modal-items">
                <form id = "new-project-form">
                    <input name = "name_input" type = "text">
                    <button id = "new-project-submit" type = "submit">Add Project</button>
                </form>
            </div>
        </div>
        `        
        body.appendChild(modal);
    }

    static NewTodoModal(){
        const body = document.querySelector("body");
        const modal = document.createElement("div");
        modal.classList.add("new-todo-modal");
        modal.innerHTML = `
        <div class="todo-modal-content">
            <div class="modal-items">
                <form id = "new-todo-form">
                    <input name = "name_input" type = "text" required>
                    <input name = "date" type = "date" required>
                    <textarea name = "description" rows = "5" cols = "33" required></textarea>
                    <select name = "priority" required>
                        <option value = "low">low</option>
                        <option value = "medium">medium</option>
                        <option value = "high">high</option>
                    </select>
                    <button id = "new-todo-submit" type = "submit">Add new Todo</button>
                </form>
            </div>
        </div>
        `        
        body.appendChild(modal);        
    }

    static UpdateTodoModal(){
        const body = document.querySelector("body");
        const modal = document.createElement("div");
        modal.classList.add("update-todo-modal");
        modal.innerHTML = `
        <div class="update-todo-modal-content">
            <div class="modal-items">
                <form id = "update-todo-form">
                    <input name = "name_input" type = "text" required>
                    <input name = "date" type = "date" required>
                    <textarea name = "description" rows = "5" cols = "33" required></textarea>
                    <select name = "priority" required>
                        <option value = "low">low</option>
                        <option value = "medium">medium</option>
                        <option value = "high">high</option>
                    </select>
                    <button id = "update-todo-submit" type = "submit">Add new Todo</button>
                </form>
            </div>
        </div>
        `        
        body.appendChild(modal); 
    }

    static NewProject(e){
        e.preventDefault();
        
        let newProject = new Project(e.target.name_input.value)
        for (let i = 0; i < Dom.projects.length; i++){
            if (Dom.projects[i].getName() == e.target.name_input.value){
                alert("project already exists")
                return;
            }
        }
        Dom.projects.push(newProject);
        Storage.updateProjects(Dom.projects);
         
        const modal = document.querySelector(".new-project-modal");
        modal.style.display = "none";

        Dom.RenderProjects();
    }

    static NewTodo(e){
        e.preventDefault();
        const modal = document.querySelector(".new-todo-modal");
        modal.style.display = "none";

        let name = e.target.name_input.value;
        let date = e.target.date.value;
        let priority = e.target.priority.value;
        let description = e.target.description.value;

        let newTodo = new TodoItem(name,date,description,priority);
        
        Dom.currentExpandedProject.addTask(newTodo);
        Storage.updateProjects(Dom.projects);
        Dom.RenderTasks(Dom.currentExpandedProject.getTasks());
        
    }

    static UpdateTodo(e){
        e.preventDefault();
        console.log(e.target)

        const modal = document.querySelector(".update-todo-modal");
        modal.style.display = "none";

        let name = e.target.name_input.value;
        let date = e.target.date.value;
        let priority = e.target.priority.value;
        let description = e.target.description.value;

        Dom.currentTask.setName(name);
        Dom.currentTask.setDueDate(date);
        Dom.currentTask.setPriority(priority);
        Dom.currentTask.setDescription(description);
        Dom.currentTask = null;
        
        Dom.RenderTaskOrUpcomingTask();

        Storage.updateProjects(Dom.projects);
    }

    static ShowProjectModal(){
        const modal = document.querySelector(".new-project-modal");
        modal.style.display = "block";
    }

    static ShowTodoModal(){
        const modal = document.querySelector(".new-todo-modal");
        modal.style.display = "block";
    }

    static ShowUpdateModal(e){
        const modal = document.querySelector(".update-todo-modal");
        modal.style.display = "block";
    }

    static HideModal(e){
        const modal = document.querySelector(".new-project-modal");
        const todoModal = document.querySelector(".new-todo-modal");
        const updateModal = document.querySelector(".update-todo-modal");
        //if the parent div of the modal is clicked
        if (e.target == modal){ 
            modal.style.display = "none";
        }

        if (e.target == todoModal){
            
            todoModal.style.display = "none";
        }

        if (e.target == updateModal){
            updateModal.style.display = "none";
        }
    }

    static RenderProjects(){
        const projectContainer = document.querySelector(".project-container");
        projectContainer.innerHTML = "";
        Dom.projects.forEach(project=>{
            
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            projectDiv.textContent = project.getName();
            projectContainer.appendChild(projectDiv);

            //displays project when clicked on
            projectDiv.addEventListener("click",()=>{
                Dom.ExpandProject(project);
            })
        })
    }

    static RenderTasks(tasks){
        const taskContainer = document.querySelector(".task-container");
        taskContainer.innerHTML = "";

        tasks.forEach(task =>{
            taskContainer.appendChild(Dom.CreateTaskElement(task));
            taskContainer.appendChild(Dom.DropDown(task));
        })
    }

    static RenderTaskOrUpcomingTask(){
        //when making a delete, if the upcoming tabs are open they are displayed instead of the old current expanded project
        if (Dom.currentExpandedProject === 7){
            Dom.ShowUpcomingTasks(7);
        } else if (Dom.currentExpandedProject === 1){
            Dom.ShowUpcomingTasks(1);
        } else {
            Dom.RenderTasks(Dom.currentExpandedProject.getTasks());
        }
    }

    static CreateTaskElement(task){
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-element");
        taskElement.textContent = task.getName();
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click",e=>{
            //stop triggering the dropdown when trying to edit task
            e.stopPropagation();
            Dom.currentTask = task;
            Dom.ShowUpdateModal(e);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Completed";
        deleteBtn.addEventListener("click",e=>{
            e.stopPropagation();
            Dom.DeleteTodo(task);
        })

        taskElement.appendChild(editBtn);
        taskElement.appendChild(deleteBtn);

        //code for the dropdown menu -- from w3schools
        taskElement.addEventListener("click",function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if(content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        })

        return taskElement;
    }

    static DropDown(task){
        const content = document.createElement("div");
       
        content.innerHTML = `
            <ul>
                <li>${task.getName()}</li>
                <li>${task.getDueDate()}</li>
                <li>${task.getPriority()}</li>
                <li>${task.getDescription()}</li>
            </ul>
        `

        content.classList.add("dropdown-content")
        return content;
    }
   

    static ExpandProject(project){
        const projectView = document.querySelector(".expanded-project-view");
        const taskView = document.querySelector(".task-container");
        projectView.innerHTML = "";

        projectView.textContent = project.getName();
        const btn = document.createElement("button");
        btn.id = "new-todo-btn";
        btn.textContent = "Add new todo";
        btn.addEventListener("click",Dom.ShowTodoModal);
        projectView.appendChild(btn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-todo-btn");
        deleteBtn.textContent = "Delete Project";
        deleteBtn.addEventListener("click",()=>{
            Dom.DeleteProject(project);
            projectView.innerHTML = "";
            taskView.innerHTML = "";
        })
        projectView.appendChild(deleteBtn)

        Dom.currentExpandedProject = project;
        Dom.RenderTasks(Dom.currentExpandedProject.getTasks());
    }

    static DeleteProject(project){
        let index = Dom.projects.indexOf(project);
        Dom.projects.splice(index,1);
        Storage.updateProjects(Dom.projects);
        Dom.RenderProjects();
    }

    static DeleteTodo(todo){
        for (let i = 0; i < Dom.projects.length; i++){ //checks what project the selected task is in
            let todos = Dom.projects[i].getTasks();
            if (todos.includes(todo)){
                Dom.projects[i].removeTask(todo);   //deletes that task
            }
        }
       
        Storage.updateProjects(Dom.projects);
        
        Dom.RenderTaskOrUpcomingTask();
    }

    static ShowUpcomingTasks(days){
        Dom.currentExpandedProject = days;
        const projectView = document.querySelector(".expanded-project-view");
        projectView.innerHTML = "";

        let todayTasks = [];
        Dom.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                if (Dom.DayDifference(task.getDueDate()) < (days+1)){
                    todayTasks.push(task);
                }
            })
        })
        Dom.RenderTasks(todayTasks);
    }

    static DayDifference(date){ //calculates the difference in days between two dates
        let currentDate = new Date();
        const timeDiff = Math.abs(date - currentDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    //event listeners
    static newProjectEventListeners(){
        const newProjectButton = document.querySelector("#new-project-btn");
        const newProjectForm = document.querySelector("#new-project-form");
        const newTodoForm = document.querySelector("#new-todo-form");
        const updateTodoForm = document.querySelector("#update-todo-form");
        const today = document.querySelector("#today");
        const week = document.querySelector("#week");
        
        newProjectForm.addEventListener("submit", Dom.NewProject)
        newProjectButton.addEventListener("click", Dom.ShowProjectModal)
       
        newTodoForm.addEventListener("submit", Dom.NewTodo)

        updateTodoForm.addEventListener("submit",Dom.UpdateTodo)

        today.addEventListener("click",()=>{
            Dom.ShowUpcomingTasks(1);
        })
        week.addEventListener("click",()=>{
            Dom.ShowUpcomingTasks(7);
        });

        window.addEventListener("click",Dom.HideModal)
    }
}