function agregarAccidente(){
    var Fecha_Fuga = document.getElementById("Fecha Fuga");
    var Lugar_Fuga = document.getElementById("Lugar Fugas");
    var Propietario = document.getElementById("Propietario");
    var cantidadH = document.getElementById("CantidadH");
    var cantidadF = document.getElementById("CantidadF");
    var Equipo = document.getElementById("Equipo");
    var Descripcion = document.getElementById("Descripcion");
    
    
    const jsonAccidente={
        "Fecha_Fuga": Fecha_Fuga.value,
        "Lugar_Fuga":Lugar_Fuga.value,
        "Propietario":Propietario.value,
        "Personas_Heridas":cantidadH.value,
        "Persoas_Fallecidas":cantidadF.value,
        "Equipo_Utilzado":Equipo.value,
        "Descripcion":Descripcion.value,

    
      }

      console.log(JSON.stringify(jsonAccidente))
    
      const requestInit={
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(jsonAccidente)
        }
        console.log(requestInit)
        fetch('http://localhost:9000/api/fugasadd',requestInit)
        .then(res => res.json())

      }