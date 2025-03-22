const URL = "http://localhost:3000/api/tasks"

export const getTask= async()=>{
    try {
        const response = await fetch(`${URL}`)
        
        if(!response.ok){
            throw new Error('Error al obtener las tareas')
        }
        return await response.json()

    } catch (error) {
        console.log(error)
        throw error;        
    }
} 

export const createTask = async(task)=>{
    try {
        const response = await fetch(`${URL}`,{
            method : 'POST',
            header : {'Content Type' : 'application/json'},
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error("Error al crear tarea");            
        }
        return await response.json()

    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const updateTask= async(task)=> {
    try {
        const response = await fetch(`${URL}/${task.id}`,{
            method : "PUT",
            headers :{"Content type":"application/json"},
            body : JSON.stringify(task)
        })
        if(!response.ok) {
            throw new Error("Error al editar la tarea");
        }
        return await response.json()
        
    } catch (error) {       
        console.log(error)
        throw error;
    }
}
export const deleteTask = async(id)=>{
    try {
        const response = await fetch(`${URL}/${id}`,{
            method : "DELETE",
            headers :{ "Content type":"application/json"}
        })
        if (!response.ok){
            throw new Error("Error al eliminar la tarea")            
        }
        return await response.json()
        }
        catch (error) {
            console.log(error)
            throw error
        }
    } 

    


