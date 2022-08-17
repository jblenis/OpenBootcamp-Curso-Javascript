/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/


const objDatos = {
    nombre:"Jonathan",
    apellido:"Lenis",
    edad: 23,
    altura: 175,
    eresDesarrollador: true
}

const obtenerEdad = objDatos.edad

const lista =[{...objDatos},{
    nombre:"Elis",
    apellido:"Ahio",
    edad: 22,
    altura: 170,
    eresDesarrollador: false},
    {
    nombre:"Mirko",
    apellido:"Dispa",
    edad: 19,
    altura: 160,
    eresDesarrollador: false}]

const mayormenor = lista.sort((a, b)=> a.edad - b.edad)

