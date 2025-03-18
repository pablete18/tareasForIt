import { v4 as uuidv4 } from 'uuid'

export default Task = function({title,description,completed,createdAt}){

    this.id = uuidv4(),
    this.title = title.trim(),
    this.description = description,
    this.completed = completed,
    this.createdAt = new Date()
}