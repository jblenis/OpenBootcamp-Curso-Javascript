
const Nombre = "Jonathan"
const Apellido = "Lenis"
const estudiante = (Nombre.concat(" ",Apellido))
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

let contadordeletras = estudiante.length
let primerLetra = Nombre[0]
let ultimaLetra = Apellido[Apellido.length-1]

const deleteSpace = estudiante.replace(/ /g,"")

let nombreincluido = estudiante.includes(Nombre)





