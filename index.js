const { Console } = require('console');
const { resolve } = require('path');
const { promises } = require('readline');
const readlineSync = require('readline-sync');

let taskList = []

function menu ()
{
    let salir = false;
    while(salir == false)
    {
        console.log("digite el numero de la opcion que quiere ejectuar");
        console.log(" 1 para añadir tarea");
        console.log("2 para eliminar tarea");
        console.log("3 para completar tarea tarea");
        console.log("4 para imprimir tarea");
        console.log("5 Finalizar");

    const Elegir = readlineSync.question ("digite la opcion ");

    switch(Elegir)
    {
        case "1":
            añadirTarea()
            .then(() => console.log('Tarea añadida exitosamente'))
            .catch((ERROR) => console.error('Error al añadir tarea', ERROR))
            break; 
        case "2":
            eliminarTarea()
            .then(()=>console.log('Tarea Eliminada'))
            .catch((ERROR)=>console.error('Error al eliminar tarea',ERROR))
            break;
        case "3":
            completarTarea()
            .then(()=> console.log('Tarea Completada'))
            .catch((error)=>console.error('Error al eliminar tarea',error))
            break;
        case "4":
            console.log(taskList);
            break;
        case '5':
            salir = true;
        default:
            console.log("opcion invalida")
            break;
    }}
};

function añadirTarea () {
    return new Promise((resolve,reject) =>
    
        {
            const id = readlineSync.question("digite el id")
            const descripcion = readlineSync.question("digite la descripcion de la tarea")
            const tarea = {id: id, descripcion, completado: false}
            taskList.push(tarea);
            console.log(taskList);
            resolve();
        });
    }

function eliminarTarea ()
{
    return new Promise ((resolve, reject)=> {
        console.log(taskList)
        const id = readlineSync.question("digite el id que quiere eliminar")
        const auxTaskList = taskList.filter((Tarea)=> Tarea.id !== id);
        if (auxTaskList.length === taskList.length){
            reject('Nob se encontro ninguna tarea con ek ID digitado')
        }
        else
        {
            taskList = auxTaskList 
            resolve();
        }
    })
} 

function completarTarea ()
{
    return new Promise ((resolve,reject)=>
    {
        console.log(taskList)
        const id = readlineSync.question("digite el id que quiere eliminar")
        const taskIndex = taskList.findIndex((Tarea)=> tarea.id === id);
        if (taskIndex === -1)
        {
            reject('No se encontro una tarea con ese ID');
            return;
        }
        taskList[taskIndex].completado = !taskList[taskIndex].completado;
        resolve();
        console.log(taskList);
    });
} 

menu()
