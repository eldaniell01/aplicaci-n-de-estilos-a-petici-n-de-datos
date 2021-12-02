function traer(){
    //NOTA: la ruta donde se encuentra la api esta en otro proyecto
    fetch('http://localhost:3000/appi/get.php')
    .then(res=>res.json())//convierte los datos a json
    .then(datos=>{
        tabla(datos)// ejecuta la función donde se muestran los datos que previamente fueron convertidos  a json
    })
}


function tabla(datos){
    // ciclo for en el cual va ir recorriendo todos los objetos convertidos y los va almacenar variable valor
    for(let valor of datos){
        //se pintan los datos del objeto en el identificador root, se le asigna cada dato del objeto a cada campo de la tabla
        root.innerHTML +=`
        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.nombre}</td>
            <td>${valor.pass}</td>
            <td>${valor.tipo_id}</td>
            <td>${valor.usuario}</td>
            <td>${valor.correo}</td>
        </tr>
        `
    }
}
