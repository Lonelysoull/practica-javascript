function saludo() {
    alert("Bienvenido");
}

function circulo() {
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function movetop(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("movetop");
}

function moveleft(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function moveright(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("moveright");
}

function movediagonal(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("movediagonal");
}


//algotitmos
function suma(){
    var A =0;
    var B =0;
    var suma =0;

    alert("Algoritmo que suma dos valores ingresados");
    A =parseInt(prompt("Ingrese el primer valor a sumar"));
    B =parseInt(prompt("Ingrese el segundo valor a sumar"));
    suma = A + B;
    alert("El resultado de la suma es: "+ suma);
}
function inversion(){
    var tiempo = 0;
    var capital = 0;
    var ganancia = 0;
    var total = 0;
     alert ("algoritmo de inversiones");
     tiempo =parseInt(prompt("Ingrese el timpo de inversion"));
     capital =parseInt(prompt("Ingrese el valor de la inversion"));
     ganancia =(capital*0.204)*tiempo;
     total=capital+ganancia;
    
     alert("La ganancia es de: " + ganancia); 
    alert("El total es: " + total);
    
}
function Bottom(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Bottom");
}

function Imagen(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Imagen");
}

function operaciones(){
    var A =0;
    var B =0;
    var suma =0;

    alert("Algoritmo que suma dos valores ingresados");
    A =parseInt(prompt("Ingrese el primer valor a sumar"));
    B =parseInt(prompt("Ingrese el segundo valor a sumar"));
    suma = A + B;
    alert("El resultado de la suma es: "+ suma);

    alert("Algoritmo que resta dos valores ingresados");
    A =parseInt(prompt("Ingrese el primer valor a restar"));
    B =parseInt(prompt("Ingrese el segundo valor a restar"));
    resta = A - B;
    alert("El resultado de la resta es: "+ resta);

    alert("Algoritmo que multiplica dos valores ingresados");
    A =parseInt(prompt("Ingrese el primer valor a multiplicar"));
    B =parseInt(prompt("Ingrese el segundo valor a multiplicar"));
    multiplicacion = A * B;
    alert("El resultado de la multiplicacion es: "+ multiplicacion);

    alert("Algoritmo que divide dos valores ingresados");
    A =parseInt(prompt("Ingrese el primer valor a dividir"));
    B =parseInt(prompt("Ingrese el segundo valor a dividir"));
    divicion = A / B;
    alert("El resultado de la resta es: "+ divicion);
}

function Area(){
    var A =0;
    var B =0;
    var area = A*B/2;

    alert("algoritmo que calcula el area de un triangulo");
    A =parseInt(prompt("Ingrese la base"));
    B =parseInt(prompt("Ingrese la altura"));
    Area = A*B/2;
    alert("El area del triangulo es: "+ Area);
}

function Rombo() {
        var figura = document.querySelector("#figura");
        figura.classList.toggle("Rombo");
    }
function promedio(){
        var nota1 = 0;
        var nota2 = 0;
        var nota3 = 0;
        var nota4 = 0;
        var nota5 = 0;
        var nota6 = 0;
        var nota7 = 0;
        var promedio = 0;  
    
        nota1 = parseInt(prompt("Ingrese la primera nota"));
        nota2 = parseInt(prompt("Ingrese la segunda nota"));
        nota3 = parseInt(prompt("Ingrese la tercera nota"));
        nota4 = parseInt(prompt("Ingrese la cuarta nota"));
        nota5 = parseInt(prompt("Ingrese la quinta nota"));
        nota6 = parseInt(prompt("Ingrese la sexta nota"));
        nota7 = parseInt(prompt("Ingrese la septima nota"));
    
promedio= (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) /7;
    
        if (promedio >= 6.2){
         alert("Aprobado");
        } 
        else { 
            alert("Reprobo");
        }
    
    }
    function descuento(){
   
        const precio = 4500;
        var kilos = prompt("Ingrese la cantidad de kilos de manzanas que está comprando:");
        
        kilos = parseFloat(kilos);
        
        var precioDescuento = precio * kilos;
        
        var descuento = 0;
        if (kilos <= 2) {
          descuento = precioDescuento * 0;
        } else if (kilos >= 3 && kilos <= 5) {
        
            descuento = precioDescuento * 0.10;
          } else if (kilos >= 6 && kilos <= 10) {
            
            descuento = precioDescuento * 0.15;
          } else {
           
            descuento = precioDescuento * 0.15;
          }
        
          alert ("El descuento es de: " + descuento);
        
        }    
    




//descuento venta
//una fruteria vende manzanas a 4500 el kilo realice un algoritmo que permita sabeer al vendedor 
//cuanto debe pagar un cliente teniendo en cuenta que la fruteria tiene la siguiente tabla de descuentos 


