export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }

    getName(){
        return this.name;
    }

    addTask(task){
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    removeTask(task){
        let index = this.tasks.indexOf(task)
        this.tasks.splice(index,1);
    }
}