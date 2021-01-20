//Get element when te window is ready//
window.onload = ()=>{
    console.log("página cargada")
    var itemsTask = document.getElementsByClassName('itemTask');
    addEventClick(itemsTask);
}



//Adding click event to every element with the class//
function addEventClickCheckTask(items)
{
    console.log(items);

    for(var i = 0; i<items.length; i++)
    {
        items[i].addEventListener('click',function(){            
            console.log(this.childNodes[3]);            
        });
    }
}