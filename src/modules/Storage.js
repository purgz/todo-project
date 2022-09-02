import TodoItem from "./TodoItem";
import Project from "./Project";

export default class Storage{
    
    //stores project array in localstorage
    static updateProjects(projects){
        localStorage.setItem("allProjects",JSON.stringify(projects));
    }

    /*
        json parsed objects lose functionality so this function takes the parsed values and creates a
        new set of project objects which can be used to populate the application
    */
    static getProjects(){
        let projects = localStorage.getItem("allProjects");

        //if empty return empty array
        if (!projects){return []}

        let allProjects = JSON.parse(projects);
        
        return allProjects.map(project=>{
            let newProject = new Project(project.name);
            
            project.tasks.forEach(task=>{
                let newTask = new TodoItem(task.name,task.dueDate,task.description,task.priority);
                newProject.addTask(newTask);
            })
         
            return newProject;
        })     
    }
}