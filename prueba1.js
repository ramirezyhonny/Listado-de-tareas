let subir=document.getElementById("userInput");
const input=document.querySelector("input[type='text']");
let i=0;
subir.addEventListener("submit", (event)=>{
    event.preventDefault();
    addTask();
});

let addTask=()=>{
    i+=1;
    let newValue=input.value;
    list.innerHTML+=`
        <div class="task-container" id="${i}">
            <label for="">
                <input type="checkbox" name="" id="">Tarea ${i} (${newValue})
            </label>
            <img src="delete-svgrepo-com.svg" class="closeBtn">
        </div>
    `;
    input.value="";
    updateStats();
}
list.addEventListener("click",(event)=>{
    if(event.srcElement.nodeName=="INPUT"){
        updateStats();
    } else if(event.srcElement.nodeName=="IMG"){
        deleteTask(event.srcElement.parentNode.id);
    }
});
//FUNCIONES
let updateStats=()=>{
    let elementList=list.querySelectorAll("div");
    let checkbox=list.querySelectorAll("input[type='checkbox']:checked")
    stats.innerHTML=`<p>Tareas pendientes: ${elementList.length} Completadas: ${checkbox.length}</p>`
}
let deleteTask=(id)=>{
    let taskToDelete=document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}