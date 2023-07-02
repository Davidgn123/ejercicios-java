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