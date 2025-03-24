import { leerJson, escribirJson } from "../data/manipulateJson.js"
import Task from "../data/Task.js"


export const taskController = {
    list : (req,res)=>{

        const data = leerJson("tasks.json");
        
        return res.status(200).json({
            ok:true,
            data : data,
            msg: "listado de tareas"
        })       
        
    },
    create : async(req,res)=>{
        try {console.log(req.body)
            const tasks = leerJson('tasks.json')           
            
            const data = req.body

            let newTask = new Task(data)

            tasks.push(newTask)

            escribirJson(tasks)

            return res.status(200).json({
                ok:true,
                data : newTask,
                msg : "Tarea creada con exito"
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece que hubo un error"
            })
        }
        
    },
    update : async(req,res)=>{
        try {
            const tasks = leerJson("tasks.json")

            const id = req.params.id

            const {title,description,completed} = req.body

            const taskModify = tasks.map((task)=>{
                if(task.id === id){
                    task.title= title,
                    task.description= description,
                    task.completed= completed
                }
                    return task
            })

            escribirJson(taskModify)

            return res.status(200).json({
                ok:true,
                msg : "tarea actualizada con exito"                
            })


        } catch (error) {
            return res.status(error.status||500).json({
                ok:false,
                msg: error.msg||"Parece que hubo un error"
            })
        }

    },
    destroy : async(req,res)=>{
        try {
            const tasks = leerJson("tasks.json")

            const id = req.params.id
            
            const taskToDestroy = tasks.filter((task)=>task.id!==id)

            escribirJson(taskToDestroy)

            return res.status(200).json({
                ok:true,
                msg:"tarea eliminada con exito"
            })
            
        } catch (error) { 
            return res.status(error.status||500).json({
                ok:false,
                msg:error.msg||"Parece que hubo un error"
            })
            
        }
        




    }
}

