/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de */

let ListaCompra = ["azucar", "sal", "fideos", "arroz", "carne", "galletitas"]

ListaCompra.push("Aceite de Girasol")
ListaCompra.pop(ListaCompra)


let misPelis =  [
    {
    titulo : "Avatar",
    director : "James Cameron",
    fecha :new Date (2010,01,01)

},{  titulo:"Ant-Man",
    director: "Peyton Reed",
    fecha : new Date(2015,06,16)

},{
    titulo : "Lagrimas del sol",
    director: "Antoine Fuqua",
    fecha: new Date(2003,06,19)
}]


const Pelisnews = misPelis.filter(misPelis => misPelis.fecha > new Date(2010,0,1))

const directores = misPelis.map(misPelis => {return misPelis.director},)

const titulos = misPelis.map(misPelis => {return misPelis.titulo})

const titulodirec = directores.concat(titulos)

const mpropagacio = [...directores,...titulos]

