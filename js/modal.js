if(document.getElementById("btnModal"))
{
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];


    //Mostrar Modal//
    btn.onclick = function()
    {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    //Cerrar Modal//
    span.onclick = function()
    {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    
    //Cerrar modal con click afuera del contenedor de la modal//
    window.onclick = function(event)
    {
        if (event.target == modal)
        {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}