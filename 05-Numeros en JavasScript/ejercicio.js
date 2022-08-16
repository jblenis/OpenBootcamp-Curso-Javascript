/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que 
se puede obtener en Javascript + 1" es 
igual al máximo valor que se puede obtener en Javascript*/

const miAltura_cm = 171
const miAltura_mm = 1.71
const miPeso = 72.3

const altura_redondeado = Math.ceil(miAltura_cm)
const peso_redondeado = Math.floor(miPeso)

const igualNumMax = Number.MAX_VALUE+ 1 === Number.MAX_VALUE