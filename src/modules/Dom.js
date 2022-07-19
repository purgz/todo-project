import TodoItem from "./todoItem";
import Project from "./Project"

export default class Dom{
    //static var - temporary for storing projects
    static projects = [];
    
    static loadHome(){
        Dom.loadSideBar();
        Dom.loadNewProjectModal();
        Dom.NewTodoModal();
        Dom.newProjectEventListeners();

    }

    static loadSideBar(){
        const sideBar = document.querySelector(".left-nav");
        sideBar.innerHTML = `
        <div>
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
        <div class="modal-content">
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
        <div class="modal-content">
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

        console.table(name,date,priority,description);
    }

    static ShowProjectModal(){
        const modal = document.querySelector(".new-project-modal");
        modal.style.display = "block";
    }

    static ShowTodoModal(){
        const modal = document.querySelector(".new-todo-modal");
        modal.style.display = "block";
    }

    static HideModal(e){
        const modal = document.querySelector(".new-project-modal");
        const todoModal = document.querySelector(".new-todo-modal");
        //if the parent div of the modal is clicked
        if (e.target == modal){ 
            modal.style.display = "none";
        }

        if (e.target == todoModal){
            console.log("test")
            todoModal.style.display = "none";
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

    static ExpandProject(project){
        const  projectView = document.querySelector(".expanded-project-view");
        projectView.innerHTML = "";

        projectView.textContent = project.getName();
        const btn = document.createElement("button");
        btn.id = "new-todo-btn";
        btn.textContent = "Add new todo";
        btn.addEventListener("click",Dom.ShowTodoModal);
        projectView.appendChild(btn);
    }

    //event listeners
    static newProjectEventListeners(){
        const newProjectButton = document.querySelector("#new-project-btn");
        const newProjectForm = document.querySelector("#new-project-form");
        const newTodoForm = document.querySelector("#new-todo-form");
        
        newProjectForm.addEventListener("submit", Dom.NewProject)
        newProjectButton.addEventListener("click", Dom.ShowProjectModal)
       
        newTodoForm.addEventListener("submit", Dom.NewTodo)

        window.addEventListener("click",Dom.HideModal)
    }
}