

//Get button, add event click, get values and call Add task function//
 buttonAdd = document.getElementById('addTaskButton');
 

 buttonAdd.addEventListener('click', function(){

    newTask = document.getElementById('newTask').value; 
    priority = document.getElementById('selectPriority').value;    
    createTaskElement(newTask,priority);
 })


 //----------Create HTML element----------//
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

     var newTask = document.createElement('div');
     newTask.className = "itemTask"

     var imgCheck = document.createElement('img');
     imgCheck.setAttribute('src','./img/check.svg');     

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


 //---------Add element to DOM----------//
 function addTaskElement(elementTask)
 {     
     var listContainer = document.getElementById('containerList');
     listContainer.appendChild(elementTask);
     setTimeout(closeModal,200);        
     
     checkButton = elementTask.childNodes[0];
     checkText = elementTask.childNodes[1];
     deleteButton = elementTask.childNodes[3];

     checkTask(checkButton,checkText);     
     deleteTask(deleteButton);   
 }




  //-----------Close modal----------//
  function closeModal()
  {
     var modal = document.getElementById("tvesModal");
     modal.style.display = "none";
     body.style.position = "inherit";
     body.style.height = "auto";
     body.style.overflow = "visible";
  }

  //----------Check task----------//
  function checkTask(buttonCheck,textCheck)
  {
      buttonCheck.addEventListener('click',function(){                                    
          
        if(textCheck.style.textDecoration != 'line-through')
        {        
            this.setAttribute('src','./img/checked.svg')
            textCheck.style.textDecoration = 'line-through';
            textCheck.style.color = 'gray';            
        }
        else{            
            this.setAttribute('src','./img/check.svg')
            textCheck.style.textDecoration = 'none'             
            textCheck.style.color = 'black';
        }
      })      
  }


  //----------Check task----------//
  function deleteTask(deleteButton)
  {
      deleteButton.addEventListener('click',function()
      {
        var listContainer = document.getElementById('containerList');
        listContainer.removeChild(this.parentNode);        
      })      
  }