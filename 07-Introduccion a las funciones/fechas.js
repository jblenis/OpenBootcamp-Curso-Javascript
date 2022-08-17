/*Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const fechaHoy = new Date()

const fechaNac = new Date(1998,08,09)

const masTarde = fechaHoy > fechaNac

const dianaci = fechaNac.getDate()
const mesnaci = fechaNac.getMonth()+1
const anionacio = fechaNac.getFullYear()