 const tutorta1 = []
 const tutor1 = prompt("ingrese el nombre del tutor");
 const menor1 = prompt("ingrese el nombre del menor");
 const tutor2 = prompt("ingrese el nombre del tutor");
 const menor2 = prompt("ingrese el nombre del menor");
 const tutor3 = prompt("ingrese el nombre del tutor");
 const menor3 = prompt("ingrese el nombre del tutor");


 const tutor1menor1 ={tutor:`${tutor1}`,menor:`${menor1}`};
 const tutor2menor2 ={tutor:`${tutor2}`,menor:`${menor2}`};
 const tutor3menor3 ={tutor:`${tutor3}`,menor:`${menor3}`};



 tutorta.unshift(tutor3menor3);
 tutorta.push(tutor2menor2);
 tutorta.push(tutor1menor1);

 console.table(tutorta);
 const tutorta = [
     {nombre: "100 años", precio:8000, pastas:"dura"},
     {nombre: "50años", precio:200, pastas:"no dura"},
     {nombre: "10 años", precio:7000, pastas:"dura"},
 ]
 

  tutorta.forEach(function (libreria) {     console.table(` años :${libreria.nombre}  *precio: ${libreria.pastas}`)
 })

  function multiplicar()
  {
     console.log(3*5);
  }
  multiplicar();
 
  const multiplicar1 = function()
  {console.log(5*3)};

  multiplicar1();

  function multi(a,b){
     console.log(a*b);
  }
  multi(1,123);
 function saludo(nombre,apellido)
  {console.log(`bienvenido ${nombre} ${apellido}` )}

 saludo("pedrito","payares");


function saludo(nombre,apellido,ciudad)
{console.log(`bienvenido a la sesion ${nombre} ${apellido}y te estamos viendo desde la ciudad, ${ciudad}` )}

saludo("pedrito","payares","popayán");