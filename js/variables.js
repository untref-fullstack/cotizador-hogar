const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Depto. Edificio', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19},
                        {tipo: 'Oficina', factor: 2.39},
                        {tipo: 'Local Comercial', factor: 1.41},
                        {tipo: 'Depósito Logística', factor: 1.92}]

const datosUbicacion = [{tipo: 'CABA', factor: 1.13},
                        {tipo: 'Tandil', factor: 1.04},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Patagonia', factor: 1.00},]

const ENV = location.href.trim()
const URL = "js/datos.json"
const costoM2 = 35.86