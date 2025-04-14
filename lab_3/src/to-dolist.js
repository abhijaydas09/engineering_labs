document.addEventListener("DOMContentLoaded" , ()=>{
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click" , () => {
        const taskText = newTaskInput.value.trim() ;
        if( taskText !== ''){
            const listItem = document.createElement("li") ;  //why did we created element here?
            listItem.textContent = taskText ;

            const deletebutton = document.createElement("button") ;
            deletebutton.textContent = "Delete" ;
            deletebutton.addEventListener('click' , ()=>{
                taskList.removeChild(listItem) ;
            }) ;
            listItem.appendChild(deletebutton) ;
            taskList.appendChild(listItem) ;
            newTaskInput.value = '' ;

            let editButton = document.createElement("button") ;
            editButton.textContent  ="edit" ;
            editButton.addEventListener("click" , ( )=>{
                const newTask = prompt( " Edit your task" , listItem.textContent) ;
                if(newTask !== null && newTask.trim() !== " "){
                    listItem.textContent = newTask.trim() ;
                    listItem.appendChild(editButton) ;
                    listItem.appendChild(deletebutton);
                }
            }) ;

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            newTaskInput.value = '';

        }

    })

})