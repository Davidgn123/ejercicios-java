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