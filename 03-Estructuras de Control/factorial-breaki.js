//- factorial-break.js -> Este archivo calcular factorial
// de 10 utilizando un bucle while, una bifurcación if 
//y una sentencia break


let data = 10;
let resultado = 1;

while(true){

    resultado *= data

    data --

    if(data === 10){
        break
    }
}

return resultado