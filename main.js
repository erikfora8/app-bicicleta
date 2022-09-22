let urlBicicletas = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike";
let urlClientes = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/";
let urlMensaje = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/";

let formatoBicis = {}

obtenerDatos(urlBicicletas,"");

function obtenerDatos(urlLink,formato){
    $.ajax({
      url:urlLink,
      type:'GET',
      dataType:'json',

     //Si funciona la descarga de datos entonces hacer
     success: function(cliente){
     //almacenar los datos en una variable
          
          let cli = cliente.items;
          console.log(cli);

     },

     //si falla la descarga de datos del api
     error: function(xhr,status){
           alert("ups!, Algo salio mal.");
     }

    }); 


}

EnviarDatos(urlBicicletas);

function EnviarDatos(urlLink){
    
    var informacion={
        id: 2,
        brand: "bmw",
        model: 36, 
        category_id:42, 
        name: "bicleta"
     }

    var datos_a_enviar = JSON.stringify(informacion);

    $.ajax({
      url: urlLink,
      type:'POST',
      data: datos_a_enviar,
      contentType:'application/json',

     //Si funciona la descarga de datos entonces hacer
     success: function(){
     //almacenar los datos en una variable
          console.log("el contenido fue enviado correctamente");
          obtenerDatos(urlBicicletas,"");
     },

     //si falla la descarga de datos del api
     error: function(xhr,status){
           alert("ups!, Algo salio mal.");
     }

    }); 


}
