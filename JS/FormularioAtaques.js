function agregarAccidente(){
    var Fecha_ataque = document.getElementById("Fecha de Ataque");
    var Lugar = document.getElementById("Lugar Ataque");
    var cantidadH = document.getElementById("cantidadH");
    var cantidadF = document.getElementById("cantidadF");
    var tipo_de_ataque = document.getElementById("tipo ataque");
    var descripcion = document.getElementById("Descripcion");
    
    const jsonAtaques={
        "Fecha_Ataque": Fecha_ataque.value,
        "Lugar_ataque":Lugar.value,
        "Personas_Fallecidas":cantidadF.value,
        "Personas_Heridas":cantidadH.value,
        "Tipo_Ataque":tipo_de_ataque.value,
        "Descripcion":descripcion.value
      }
    
      const requestInit={
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(jsonAtaques)
        }
        console.log(requestInit)
        fetch('http://localhost:9000/api/ataquesadd',requestInit)
        .then(res => res.json())
      }