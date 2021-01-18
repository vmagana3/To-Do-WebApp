

//Get button, add event click, get values and call Add task function//
 buttonAdd = document.getElementById('addTaskButton');

 buttonAdd.addEventListener('click', function(){

    newTask = document.getElementById('newTask').value; 
    priority = document.getElementById('selectPriority').value;

    createTaskElement(newTask,priority);
 })



 //Add element to DOM//
 function addTaskElement(elementTask)
 {
     console.log(elementTask);
     var listContainer = document.getElementById('containerList');
     listContainer.appendChild(elementTask);

 }

//create HTML element//
 function createTaskElement(task,priority)
 {

    if(priority === 'High')
    {
        backGround = '#e4002b'          
    }
    else if(priority === 'Medium')
    {
        backGround = '#f48924'
    }
    else if(priority === 'Low')
    {
        backGround = '#037ef3'
    }

     console.log(task);
     console.log(priority);     

     var newTask = document.createElement('div');
     newTask.className = "itemTask"

     var imgCheck = document.createElement('img')
     imgCheck.setAttribute('src','./img/check.svg')

     var taskName = document.createElement('p');
     taskName.setAttribute('id','taskName');     
     taskName.innerHTML = task;

     var taskPriority = document.createElement('p');
     taskPriority.setAttribute('id','priorityText');
     taskPriority.style.backgroundColor = backGround;
     taskPriority.innerHTML = priority;

     var imgDelete = document.createElement('img')
     imgDelete.setAttribute('src','./img/delete.png')

     //append child elements//
     newTask.appendChild(imgCheck);
     newTask.appendChild(taskName);
     newTask.appendChild(taskPriority);
     newTask.appendChild(imgDelete);

     return addTaskElement(newTask);     
 }
 