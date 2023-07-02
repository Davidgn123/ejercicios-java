document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio1 = document.querySelector('#boton1');
    btnEjercicio1.addEventListener('click', function() {

alert("Factura de venta productos con JavaScript");
var nombre = prompt("Nombre del cliente");
console.log(nombre);
var Producto1 = prompt(" Digite el producto numero 1 a comprar");
console.log(Producto1);
var precio1=prompt("precio unitario 1");
console.log(precio1);
var Producto2 = prompt(" Digite el producto numero 2 a comprar");
console.log(Producto2);
var precio2=prompt("precio unitario 2");
console.log(precio2);
var Producto3 = prompt(" Digite el producto numero 3 a comprar");
console.log(Producto3);
var precio3=prompt("precio unitario 3");
console.log(precio3);
var Producto4 = prompt(" Digite el producto numero 4 a comprar");
console.log(Producto4);
var precio4=prompt("precio unitario 4");
console.log(precio4);

var subtotal=Number.parseInt (precio1)+ Number.parseInt(precio2)+ Number.parseInt(precio3)+ Number.parseInt(precio4);
console.log(`${subtotal}` +"   subtotal");

var descuento=subtotal*0.10;
console.log(`${descuento}` +"   decuento");

var iva=subtotal*0.19;
console.log(`${iva}`+"   iva");
var total=subtotal+iva-descuento;

console.log("el total a pagar por el señor,"+ `${nombre}`+ " de la factura   "+ `${total}`);
    });
});

//////////////////////////////////Ejercicio 2///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio2 = document.querySelector('#boton2');
    btnEjercicio2.addEventListener('click', function() {
        
        alert("Notas finales de  los estudiantes del colegio mi primera puñalada");

//estudiante 1//

var este1= prompt("Introduzca por favor el nombre del estudiante 1");
console.log("El primer estudiante es "+ este1);

var nota1= Number.parseFloat(prompt("introduzca la primera nota"));
console.log("la primera nota es "+ nota1);

var nota2= Number.parseFloat(prompt("introduzca la segunda nota"));
console.log("la segunda nota es "+ nota2);

var nota3= Number.parseFloat(prompt("introduzca la tercera nota"));
console.log("la tercera nota es "+ nota3);

var notaprimerst1= Number.parseFloat(nota1*0.20);
console.log(notaprimerst1);

var notaprimerst2= Number.parseFloat(nota2*0.20);
console.log(notaprimerst2);

var notaprimerst3= Number.parseFloat(nota3*0.60);
console.log(notaprimerst3);

var npriste=(notaprimerst1)+(notaprimerst2)+(notaprimerst3);
console.log(npriste);


console.log("la nota final del estudiante 1 es "+ npriste);


//estudiante 2//

var este2= prompt("Introduzca por favor el nombre del estudiante 2");
console.log("El segundo estudiante es "+ este2);


var notaa1= Number.parseFloat(prompt("introduzca la primera nota"));
console.log("la primera nota es "+ notaa1);

var notaa2= Number.parseFloat(prompt("introduzca la segunda nota"));
console.log("la segunda nota es "+ notaa2);

var notaa3= Number.parseFloat(prompt("introduzca la tercera nota"));
console.log("la tercera nota es "+ notaa3);


var notasegst1= Number.parseFloat(notaa1*0.20);
console.log(notasegst1);

var notasegst2= Number.parseFloat(notaa2*0.20);
console.log(notasegst2);

var notsegst3= Number.parseFloat(notaa3*0.60);
console.log(notsegst3);

var nsegte=(notasegst1)+(notasegst2)+(notsegst3);
console.log(nsegte);


console.log("la nota final del estudiante 2 es "+ nsegte);


//estudiante 3//

var este3= prompt("Introduzca por favor el nombre del estudiante 3");
console.log("El tercer estudiante es "+ este3);

var notaaa1= Number.parseFloat( prompt("introduzca la primera nota"));
console.log("la primera nota es "+ notaaa1);

var notaaa2= Number.parseFloat(prompt("introduzca la segunda nota"));
console.log("la segunda nota es "+ notaaa2);

var notaaa3= Number.parseFloat(prompt("introduzca la tercera nota"));
console.log("la tercera nota es "+ notaaa3);

var notaterst1= Number.parseFloat(notaa1*0.20);
console.log(notaterst1);

var notaterst2= Number.parseFloat(notaa2*0.20);
console.log(notaterst2);

var notaterst3= Number.parseFloat(notaa3*0.60);
console.log(notaterst3);

var nterte=(notaterst1)+(notaterst2)+(notaterst1);
console.log(nterte);


console.log("la nota final del estudiante 3 es "+ nterte);
    });
});



//////////////////////////////////Ejercicio 3///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var btnEjercicio3 = document.querySelector('#boton3');
    btnEjercicio3.addEventListener('click', function() {
        const tutor= {
            nombre:prompt("TUTOR: Digita tu nombre"),
            apellido:prompt("TUTOR: Digita tu apellido"),
            tipo_de_identificacion: prompt("TUTOR: Tipo de identificacion"),
            identificacion: Number.parseInt( prompt("TUTOR: Digita tu numero de identificacion")), 
            edad:Number.parseInt( prompt("TUTOR: Digita tu edad")),
            ocupacion: prompt("TUTOR: cual es tu ocupacion?"),
            parentesco: prompt("TUTOR: cual es tu parentesco con el menor?"),
        
        //------------------------MENOR------------------------------------------
            datos_menor: {
                nombre_menor:prompt("TUTOR: Digita nombre del menor"),
                apellido_menor:prompt("TUTOR: Digita apellido del menor"),
                tipo_de_identificacion_menor: prompt("TUTOR: Tipo de identificacion del menor"),
                identificacion_menor:Number.parseInt(  prompt("TUTOR: Digita numero de identificacion del menor")), 
                edad_menor:Number.parseInt(  prompt("TUTOR: Digita edad del menor")),
                colegio_menor: prompt("TUTOR: en que colegio estudia el menor?"),
            }
        
        }
        
        
        
        
        console.log(tutor);
        
        //--------------------------RUTAS---------------------------------------
        
        const ruta = {
        lugar_de_inicio_ruta:prompt("TUTOR: Lugar donde inicia el reorrido"),
        lugar_de_fin_ruta:prompt("TUTOR: Lugar donde termina el reorrido"),
        fecha_ruta: Number.parseInt(  prompt("TUTOR: fecha de la ruta ")),
        medio_transporte:prompt("En que medio de tranporte va el menor"), 
        
        }
        
        let hora_inicial_ruta=Number.parseInt (   prompt("TUTOR: Digita la hora en que inicia la ruta"));
        let hora_final_ruta=Number.parseInt(   prompt("TUTOR: Digita la hora en que finaliza la ruta"));
        let tiempo= (hora_inicial_ruta - hora_final_ruta);
        
        ruta.duracion_ruta= ("tiempo recorrido en la ruta" ,  tiempo + "horas");
        
        
        console.log(ruta);
        
        
        //unido con llaves 
        const tutor_ruta = {...tutor, ...ruta};
        console.log(tutor_ruta);
        
    });
});



//////////////////////////////////Ejercicio 4///////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio4 = document.querySelector('#boton4');
    btnEjercicio4.addEventListener('click', function() {
        let Nombr_T1=prompt("Ingrese nombre del tutor 1")

let Nombr_M1=prompt("Ingrese nombre del menor 1")


let Nombr_T2=prompt("Ingrese nombre del tutor 2")

let Nombr_M2=prompt("Ingrese nombre del menor 2")


let Nombr_T3=prompt("Ingrese nombre del tutor 3")

let Nombr_M3=prompt("Ingrese nombre del menor 3")

const ConfiAPP=[];

const objeto1={NOMBRE_TUTOR:`${Nombr_T1}`, MENOR:`${Nombr_M1}`};

const objeto2={NOMBRE_TUTOR:`${Nombr_T2}`, MENOR:`${Nombr_M2}`};

const objeto3={NOMBRE_TUTOR:`${Nombr_T3}`, MENOR:`${Nombr_M3}`};

ConfiAPP.unshift(objeto3);
ConfiAPP.push(objeto2);
ConfiAPP.push(objeto1);

console.table(ConfiAPP);
console.log(ConfiAPP); 
    });
});


//////////////////////////////////Ejercicio 5///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio5 = document.querySelector('#boton5');
    btnEjercicio5.addEventListener('click', function() {
        
        const tume=[
            {nombreTutor:"pedro",años_tutor:35,nombre_menor:"jaime",años_menor:16},
            {nombreTutor:"Paula",años_tutor:28,nombre_menor:"Ema",años_menor:14},
          ]
          
          for (let i = 0; i < tume.length; i++) {
            console.table({
                "nombreTutor": tume[i].nombreTutor,
                "nombre_menor": tume[i].nombre_menor
            });
          }
    });
});



//////////////////////////////////Ejercicio 6///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio6 = document.querySelector('#boton6');
    btnEjercicio6.addEventListener('click', function() {
        
        function saludo(nombre,apellido)
        {console.log(`bienvenido ${nombre} ${apellido}` )}
        
         saludo("juan","gutierrez","popayan");
        
        
         function saludo(nombre,apellido,ciudad)
         {console.log(`bienvenido a la sesion ${nombre} ${apellido}y te estamos viendo desde la ciudad, ${ciudad}` )}
        
         saludo("juan","gutierrez","popayán");
 
    });
});



//////////////////////////////////Ejercicio 7///////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    var btnEjercicio7 = document.querySelector('#boton7');
    btnEjercicio7.addEventListener('click', function() {
        let numero=(prompt("ingrese el numero porfavor"));

if(numero%numero !==0)
{console.log("el no es entero")}

else { 

let i;

for (i=0; i<=numero; i ++){
  console.log(i);
if(i==0){
  console.log("no es multiplo de 3 ni de 5")
}
else if (i%3===0 && i%5===0)
{console.log("PING PONG");
continue;
}

else if( i%3===0)

{console.log("PING")
}
else if( i%5===0)
{
    console.log("pong")
}
else 
{
    console.log("no es multiplo de 3 ni de 5")
}
}
}

    });
});


//////////////////////////////////Ejercicio 8///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio8 = document.querySelector('#boton8');
    btnEjercicio8.addEventListener('click', function() {

        let numero=(prompt("ingrese el numero del mes"));
        numero = parseInt(numero); 
       switch (numero) {
           case numero=1:
              console.log("es enero y tiene 31 dias");
              console.log("es invierno");
             console.log("febrero");
              console.log("marzo");
              break;
            
             case numero=2:
               console.log("es febrero y tiene 28 dias");
               console.log("es invierno");
               console.log("enero");
               console.log("marzo");
              break;
             
             
             case numero=3:
               console.log("es marzo y tiene 31 dias");
               console.log("es invierno");
               console.log("enero");
               console.log("febrero");
               break;
           
               case numero=4:
               console.log("es abril y tiene 30 dias");
               console.log("es primavera");
               console.log("mayo");
               break;
               case numero=5:
              console.log("es mayo y tiene 31 dias");
               console.log("es primavera");
               console.log("abril");
               break;
               case numero=6:
               console.log("es junio y tiene 30 dias");
               console.log("es verano");
               console.log("julio");
               console.log("agosto");
               break;
               case numero=7:
               console.log("es julio y tiene 31 dias");
               console.log("es verano");
               console.log("junio");
               console.log("agosto");
               break;
               case numero=8:
               console.log("es agosto y tiene 31 dias");
               console.log("es verano");
               console.log("julio");
               console.log("junio");
               break;
               case numero=9:
               console.log("es septiembre y tiene 30 dias");
               console.log("es otoño");
               console.log("octubre");
               console.log("noviembre");
               console.log("diciembre");
               break;
               case numero=10:
               console.log("es octubre y tiene 31 dias");
               console.log("es otoño");
               console.log("noviembre");
               console.log("septiembre");
               console.log("diciembre");
               break;
               case numero=11:
               console.log("es noviembre y tiene 30 dias");
               console.log("es otoño");
               console.log("septiembre");
               console.log("octubre");
               console.log("diciembre");
               break;
               case numero=12:
               console.log("es diciembre y tiene 31 dias");
               console.log("diciembre es epoca de navidad");
               console.log("es otoño");
               console.log("septiembre");
               console.log("octubre");
              
               break;
             default:
               console.log("ingresa un numero que este entre 1 o 12");
               break;}
        
    });
});



//////////////////////////////////Ejercicio 9///////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let btnEjercicio9 = document.querySelector('#boton9');
    btnEjercicio9.addEventListener('click', function() {

        alert("Casino te tumbamos o te teumbamos");
alert("saldo inicial es 5000");

let banco= 5000;
let ganacia;
let perdida;

while(banco>0 && banco<10000 ){

  let numero=(prompt("ingrese el numero de apuesta, del 1 al 10"));
  let apuesta=(prompt("ingrese cuanto quieres apostar"));
  let aleatorio = Math.round(Math.random()*10)

if(numero==apuesta){
  ganacia=apuesta*3;
console.log(`usted gano ${ganacia}`)
}
else if(numero!==aleatorio){
  perdida=banco-apuesta;
console.log(`usted perdio ${perdida}`)
}

}
       
    });
});