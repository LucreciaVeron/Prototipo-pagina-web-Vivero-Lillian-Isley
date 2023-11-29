
$(document).ready(function(e){

    jsonObject.plantas.forEach((i)=>cargarPlantas(i));

});


function cargarPlantas(data){

    var li = document.createElement('li');

    li.innerHTML = '<div class="card mt-1">'+
    '<div class="product-1 align-items-center p-2 text-center"> <img src="'+data.foto+'" class="rounded" width="150" height="100">'+
        '<h6 class="mt-0 font-weight-bold mb-2 info">'+data.nombre+'</h6>'+
    '</div>';
document.getElementById("plantasCatalogo").appendChild(li);
}



function buscar(){
    var filtroPlanta=$("#buscar").val(); 

    for (i = 0; i < jsonObject.plantas.length; i++) {
        var plantaObtenida = jsonObject.plantas[i];
        var nombrePlanta= plantaObtenida.nombre.toLowerCase();

        //Si lo que se ingreso en el buscador coincide con algun nombre de las plantas obtenidas
        //Se crea una variable li y se le añade el nombre de la planta y su foto correspondiente
        if(nombrePlanta.includes(filtroPlanta.toLowerCase())){
 
            var li = document.createElement('li');

            li.innerHTML = '<div class="card mt-1">'+
            '<div class="product-1 align-items-center p-2 text-center"> <img src="'+plantaObtenida.foto+'" class="rounded" width="150" height="100">'+
                '<h6 class="mt-0 font-weight-bold mb-2 info">'+plantaObtenida.nombre+'</h6>'+
            '</div>';
        }

        //Si el buscador esta vacio, crea una variable li vacia
        if (filtroPlanta === ''){
            var li = document.createElement('li');
            li.innerHTML = '';
        }
    }

    //Vacia el catalogo
    document.getElementById("plantasCatalogo").innerHTML=''; 

    //Si la variable li esta vacia se vuelven a mostrar todas las plantas en el catalogo
    if(li.innerHTML === ''){    
    $(document).ready(function(e){
        jsonObject.plantas.forEach((i)=>cargarPlantas(i));

    });        
    }

    //Si la variable li no esta vacia carga la planta buscada en el catalogo
    else{
        document.getElementById("plantasCatalogo").appendChild(li);
    }


  }