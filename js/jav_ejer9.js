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