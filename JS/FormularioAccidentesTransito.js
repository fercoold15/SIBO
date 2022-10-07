function agregarAccidente(){
    var Fecha_Accidente = document.getElementById("Fecha Accidente");
    var Lugar = document.getElementById("Lugar Accidente");
    var cantidadH = document.getElementById("CantidadH");
    var cantidadF = document.getElementById("CantidadF");
    var Descripcion = document.getElementById("Descripcion");
    
    const jsonAccidente={
        "Fecha_AccidenteTransito": Fecha_Accidente.value,
        "Lugar_Accidente":Lugar.value,
        "Personas_Heridas":cantidadH.value,
        "Personas_Fallecidas":cantidadF.value,
        "Descripcion":Descripcion.value
      }

      console.log(JSON.stringify(jsonAccidente))
    
    const requestInit={
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(jsonAccidente)
      }
      console.log(requestInit)
      fetch('http://localhost:9000/api/transitoadd',requestInit)
      .then(res => res.json())
    }