$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
});


window.onload = function(){


//Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos de la base de datos, como si de un PHP se tratase:
var DIVS = document.getElementsByName("DIVS");
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
