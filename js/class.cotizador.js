class Cotizador {
    constructor(costoM2, factorPropiedad, factorUbicacion, metros2) {
        this.costoM2 = parseFloat(costoM2)
        this.factorPropiedad = parseFloat(factorPropiedad)
        this.factorUbicacion = parseFloat(factorUbicacion)
        this.metros2 = parseInt(metros2)
    }
    cotizarPoliza() {
        let resultado = (this.costoM2 * this.factorPropiedad * this.factorUbicacion * this.metros2)
            return resultado.toFixed(2)
    }
    
}