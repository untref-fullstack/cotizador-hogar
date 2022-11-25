const selectPropiedad = document.querySelector("#propiedad")
const selectUbicacion = document.querySelector("#ubicacion")
const inputMetros2 = document.querySelector("#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorPoliza = document.querySelector("#valorPoliza")
const btnEnviar = document.querySelector("span.guardar")
const datos = []

const cargarCombo = (array, select) => array.forEach(elemento => select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`)

const fetchLocal = ()=> {
    cargarCombo(datosPropiedad, selectPropiedad)
    cargarCombo(datosUbicacion, selectUbicacion)
}

const fetchData = (URL)=> {
    fetch(URL)
    .then(response => response.json() )
    .then(data => datos.push(...data))
    .then(() => datos.filter(dato => dato.categoria === "propiedad"))
    .then(propiedades => cargarCombo(propiedades, selectPropiedad))
    .then(() => datos.filter(dato => dato.categoria === "ubicacion"))
    .then(ubicaciones => cargarCombo(ubicaciones, selectUbicacion))
    .catch(error => {
        alerta("Error inesperado", "Se ha producido un error. Intente nuevamente, por favor.", "error")
        console.error("Se ha producido un error inesperado. Intente nuevamente por favor.", error)
        btnCotizar.disabled = true
    })
}

ENV.includes("github.io") ? fetchLocal() : fetchData(URL)

const datosCompletos = ()=> (selectPropiedad.value !== "..." && selectUbicacion.value !== "..." && inputMetros2.value >= 20) ? true : false

const loader = ()=> `<img src="images/Ellipsis-1.1s-44px.gif" width="40px">`

const cotizo = ()=> {
    btnCotizar.innerHTML = loader()
    setTimeout(() => {
     const coti = new Cotizador(costoM2, selectPropiedad.value, selectUbicacion.value, inputMetros2.value)
          valorPoliza.innerText = coti.cotizarPoliza()
          alerta('', 'Cotización realizada con éxito.', 'success')
          btnEnviar.classList.remove("ocultar")   
          btnCotizar.innerText = "cotizar"        
    }, 2500)
}

const realizarCotizacion = () => datosCompletos() ? cotizo() : alerta('', 'Debes completar todos los datos en pantalla..', 'warning')

const guardarEnHistorial = ()=> {
    const cotizacion = {
                        fechaCotizacion: new Date().toLocaleString(),
                        propiedad:       selectPropiedad[selectPropiedad.selectedIndex].text,
                        ubicacion:       selectUbicacion[selectUbicacion.selectedIndex].text,
                        metrosCuadrados: inputMetros2.value,
                        poliza:          valorPoliza.innerText
                       }
    const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []
          historialCotizaciones.push(cotizacion)
          localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
          toast()
          btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", guardarEnHistorial)

const alerta = (titulo, mensaje, icono)=> {
    Swal.fire({
        icon: icono || '', 
        title: titulo || '',
        text: mensaje,
        showConfirmButton: false,
        timer: 3500,
        width: '240px'
      })
}

const toast = ()=> {
    Toastify({
        text: "Cotización guardada.",
        duration: 4000,
        newWindow: true,
        gravity: "top",
        position: "right",
        style: {
          background: "CornflowerBlue",
        }
      }).showToast();
}