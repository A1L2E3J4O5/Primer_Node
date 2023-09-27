const readlineSync = require('readline-sync');

let taskList = []

function menu ()
{
    console.log("digite el numero de la opcion que quiere ejectuar");
    console.log(" 1 para añadir tarea");
    console.log("2 para eliminar tarea");
    console.log("3 para completar tarea tarea");
    console.log("4 para imprimir tarea");

    const Elegir = readlineSync.question ("digite la opcion ");

    switch(Elegir)
    {
        case "1":
            añadirTarea();
            break; 
        case "2":
            eliminarTarea();
            break;
        case "3":
            completarTarea();
            break;
        case "4":
            console.log(taskList);
        default:
            console.log("opcion invalida")
            break;
    }
}

function añadirTarea ()
{
    const id = readlineSync.question("digite el id")
    const descripcion = readlineSync.question("digite la descripcion de la tarea")
    const tarea = {id: id, descripcion, completado: false}
    taskList.push(tarea);
    console.log(taskList);
} 

function eliminarTarea ()
{
    console.log(taskList)
    const id = readlineSync.question("digite el id que quiere eliminar")
    const auxTaskList = taskList.filter((Tarea)=> Tarea.id !== id);
    taskList = auxTaskList 
} 
function completarTarea ()
{
    console.log(taskList)
    const id = readlineSync.question("digite el id que quiere eliminar")

    const auxTaskList = taskList.map((Tarea)=>
    {
        if(Tarea.id == id)
        {
            return {...Tarea, completado: !Tarea.completado}
        }
        else
        {
            return Tarea;
        }
    })
    taskList = auxTaskList 

} 

menu()
