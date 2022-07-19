import TodoItem from "./todoItem";
import Project from "./Project"

export default class Dom{
    //static var - temporary for storing projects
    static projects = [];
    
    static loadHome(){
        Dom.loadSideBar();
        Dom.loadNewProjectModal();
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

    static newProjectEventListeners(){
        const newProjectButton = document.querySelector("#new-project-btn");
        const newProjectForm = document.querySelector("#new-project-form");
        
        newProjectForm.addEventListener("submit", Dom.NewProject)
        newProjectButton.addEventListener("click", Dom.ShowModal)
        window.addEventListener("click",Dom.HideModal)
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

    static ShowModal(){
        const modal = document.querySelector(".new-project-modal");
        modal.style.display = "block";
    }

    static HideModal(e){
        const modal = document.querySelector(".new-project-modal");
        //if the parent div of the modal is clicked
        if (e.target == modal){ 
            modal.style.display = "none";
         }
    }

    static RenderProjects(){
        const projectContainer = document.querySelector(".project-container");
        projectContainer.innerHTML = "";
        Dom.projects.forEach(project=>{
            //add proper creation function 
            let projectDiv = document.createElement("div");
            projectDiv.textContent = project.getName();
            projectContainer.appendChild(projectDiv);
        })
    }
}