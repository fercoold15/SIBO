function agregarAccidente(){
    var Fecha_Incendio = document.getElementById("Fecha Incendio");
    var Lugar_Incendio = document.getElementById("Lugar Incendio");
    var Lugar_Traslado = document.getElementById("Lugar_Traslado");
    var Descripcion = document.getElementById("Descripcion");
    
    const jsonAccidente={
        "Fecha_Incendio": Fecha_Incendio.value,
        "Lugar_Incendio":Lugar_Incendio.value,
        "Lugar_Traslado":Lugar_Traslado.value,
        "Descripcion":Descripcion.value
    
      }}

      console.log(JSON.stringify(jsonAccidente))
    
      const requestInit={
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(jsonAccidente)
        }
        console.log(requestInit)
        fetch('http://localhost:9000/api/hospitalariosadd',requestInit)
        .then(res => res.json())