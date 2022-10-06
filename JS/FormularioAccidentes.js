function agregarAccidente(){
    var Fecha_Accidente = document.getElementById("Fecha Accidente");
    var Lugar = document.getElementById("Lugar");
    var Tipo = document.getElementById("Tipo");
    var cantidadH = document.getElementById("cantidad");
    var cantidadF = document.getElementById("CantidadF");
    var Unidad = document.getElementById("Unidad de Servicio");

  const jsonAccidente={
    "Fecha_Accidente": Fecha_Accidente.value,
    "Tipo_Accidente":Tipo.value,
    "Lugar_Accidente":Lugar.value,
    "Personas_Heridas":cantidadH.value,
    "Personas_Fallecidas":cantidadF.value,
    "UnidadesServicio_idUnidadesServicio":1
  }

    console.log(JSON.stringify(jsonAccidente))
    
    const requestInit={
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(jsonAccidente)
      }
      console.log(requestInit)
      fetch('http://localhost:9000/api/accidentesadd',requestInit)
      .then(res => res.json())
      

      
}