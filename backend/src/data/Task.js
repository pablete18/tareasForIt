import { v4 as uuidv4 } from 'uuid'


 const Task = function({title,description,completed}){

    this.id = uuidv4(),
    this.title = title,
    this.description = description,
    this.completed = completed,
    this.createdAt = new Date()
}

export default Task