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
