

let contenido = document.querySelector('#contenido') /*guarda el id en la variable*/


function traer(){
    fetch('json/producto.json') /*toma la direccion del arhivo json a tratar*/
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
                    <td><img src="${valor.url}" id="img-item-adm"></td>
                    <td>${valor.marca}</td>
                    <td>${valor.modelo}</td>
                    <td>${valor.precio}</td>
                    <td>${valor.obslinea1}</td>
                    <td>${valor.obslinea2}</td>
                    <td>${valor.obslinea3}</td>
                </tr>
        `
    }
}

/*La API Fetch es una funcionalidad con la cual podemos realizar 
peticiones asíncronas y obtener respuesta a las mismas de una forma sencilla.*/

document.querySelector("#btnVerItem").addEventListener("click",verProd);

function verProd(){

    let verId = document.getElementById("inputProdId");

    let verImg = document.getElementById("inputProdImg");
   
    let verMarca = document.getElementById("inputProdMarca");
 
    let verModelo = document.getElementById("inputProdModelo");

    let verPrecio = document.getElementById("inputProdPrecio");

    let verOb1 = document.getElementById("inputProdObs1");

    let verOb2 = document.getElementById("inputProdObs2");

    let verOb3 = document.getElementById("inputProdObs3");


    let itemCompleto=[]

    console.log(itemCompleto);
    console.log(verImg.value);

    itemCompleto.push(verId.value,verMarca.value,verModelo.value,verPrecio.value,verOb1.value,verOb2.value,verOb3.value,verImg.value);
    
    let contenidoPrevio = document.querySelector('#verItem') /*guarda el id en la variable*/

    contenidoPrevio.innerHTML = itemCompleto;

    jsonArrData = JSON.stringify(Object.assign({},itemCompleto));

    console.log(jsonArrData);

    console.log(typeof jsonArrData === 'string');


}





function agregarItemJSON(itemCompleto){
    fetch('json/producto.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
        datos.push(itemCompleto) /*llamamos a la fc tabla que pondra los datos en la pagina */
    })
}

