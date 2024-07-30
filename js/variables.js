const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Depto. Edificio', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19},
                        {tipo: 'Oficina', factor: 2.39},
                        {tipo: 'Local Comercial', factor: 1.41},
                        {tipo: 'Depósito Logística', factor: 1.92}]

const datosUbicacion = [{ categoria: "ubicacion", tipo: "Ciudad Autónoma de Bs. As.", factor: 1.13 },
                        { categoria: "ubicacion", tipo: "Tandil, Buenos Aires", factor: 1.04 },
                        { categoria: "ubicacion", tipo: "Costa Atlántica", factor: 1.29 },
                        { categoria: "ubicacion", tipo: "Patagonia Argentina", factor: 1.01 },
                        { categoria: "ubicacion", tipo: "Gran Buenos Aires", factor: 1.25 },
                        { categoria: "ubicacion", tipo: "9 de Julio, Pcia de Bs. As.", factor: 1.005 },
                        { categoria: "ubicacion", tipo: "Chivilcoy, Pcia de Bs. As.", factor: 1.012 }]

const ENV = location.href.trim()
const URL = "js/datos.json"
const costoM2 = 351.86
