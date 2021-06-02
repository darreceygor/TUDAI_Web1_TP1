window.onload = traerProd();


let contenido = document.querySelector('#contenido') /*guarda el id en la variable*/


//FC PARA ARMADO.HTML


/*La API Fetch es una funcionalidad con la cual podemos realizar 
peticiones asíncronas y obtener respuesta a las mismas de una forma sencilla.*/


//AGREGA LOS ITEMS DESDE PRODUCTO.JSON => INDEX.HMTL COMO FICHA
function traerProd(){
    fetch('json/producto.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datosProd =>{   /*traemos los datos para procesar*/
        listarProd(datosProd) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })
}

function listarProd(datosProd){

    let DIVS = document.getElementsByName("DIVS");

    for (let i in datosProd) {         /*pongo el valor de cada campo*/
        
        DIVS[i].innerHTML =`
                    <div class ="item">
                        <img src="${datosProd[i].url}" alt="imagen 1" id="img-item">
                        <p>
                            <h4>${datosProd[i].descripcion}</h4> <br>
                            
                            Marca: ${datosProd[i].marca} <br>
                            Modelo: ${datosProd[i].modelo}<br>
                            Precio: ${datosProd[i].precio}<br><br>
                            <hr><br>
                            Especificaciones: <br><br>
                            ${datosProd[i].obslinea1} <br>
                            ${datosProd[i].obslinea2} <br>
                            ${datosProd[i].obslinea3} <hr>
                        </p>
                        
                    </div>
    `
    } 

    agregarBtn();
   
}

    
