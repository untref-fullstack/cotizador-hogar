const tablaHistorial = document.querySelector("tbody")
const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

historialCotizaciones.sort((a, b)=> { //ordena historial por fecha descendente
    if (a.fechaCotizacion > b.fechaCotizacion) return -1
    if (a.fechaCotizacion < b.fechaCotizacion) return 1
    return 0
})

const retornoTablaHTML = (fila)=> {
    return `<tr>
                <td>${fila.fechaCotizacion}</td>
                <td>${fila.propiedad}</td>
                <td>${fila.ubicacion}</td>
                <td>${fila.metrosCuadrados}</td>
                <td>$ ${fila.poliza.toLocaleString()}</td>
            </tr>`
}

const cargoHistorial = ()=> {
    let tablaHTML = ""
    if (historialCotizaciones.length > 0) {
        historialCotizaciones.forEach(fila => tablaHTML += retornoTablaHTML(fila));
        tablaHistorial.innerHTML = tablaHTML
    }
}
cargoHistorial()
