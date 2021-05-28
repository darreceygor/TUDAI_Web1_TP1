let contenido = document.querySelector('#contenido') /*guarda el id en la variable*/


function traerTabla(){
    fetch('json/tabla.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
        tabla(datos) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })
}

function tabla(datos){
    contenido.innerHTML='' /*borra datos existentes*/
 
    for (let valor of datos) {         /*pongo el valor de cada campo*/
        
            contenido.innerHTML +=`
                <tr>
                    <td>${valor.id}</td>
                    <td>${valor.fecha}</td>
                    <td>${valor.componente}</td>
                    <td>${valor.cantidad}</td>
                    <td>${valor.modelo}</td>
                    <td>${valor.descripcion}</td>
                </tr>
        `
    }
}

/*La API Fetch es una funcionalidad con la cual podemos realizar 
peticiones asíncronas y obtener respuesta a las mismas de una forma sencilla.*/

function traerProd(){
    fetch('json/tabla.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datosProd =>{   /*traemos los datos para procesar*/
        tablaProd(datosProd) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })
}

function tablaProd (datosProd){
    let DIVS = document.getElementsByName("DIVS");
    
    for (i in productos){
    DIVS[i].innerHTML = 
            `
        <div class="item">    
                <img id="img-item" src="${imgPeque[i]}">
            <p>   
                <h4>${productos[i]}</h4><br>
                <td>${precios[i]}</td><br>
                
            </p>
  
        </div>
        `
    }
}  
