export default class TodoItem{
    constructor(name,dueDate,description,priority){
        this.name = name;
        this.dueDate = new Date(dueDate);
        this.description = description;
        this.priority = priority;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setDescription(desc){
        this.description = desc;
    }
    getDescription(){
        return this.description;
    }

    setPriority(priority){
        this.priority = priority;
    }
    getPriority(){
        return this.priority;
    }

    setDueDate(dueDate){
        this.dueDate = new Date(dueDate);
    }
    getDueDate(){
        return this.dueDate;
    }
    
}