//FILESYSTEM

//DEFINICIONES
let btnIniciar = document.getElementById("btnIniciar");
let btnOrden = document.getElementById("btnOrden");
let orden = document.getElementById("orden");
let resultado = document.getElementById("resultado");

let monocrom = nuevoArray(16, 16, "0");


//MAIN

//LISTENERS
btnIniciar.addEventListener('click',()=>{
    monocrom = nuevoArray(16, 16, "0");
    resultado.value = imprime(monocrom);
})

btnOrden.addEventListener('click',()=>{
    monocrom = seleccionaYEscribe(orden.value,monocrom);
    resultado.value = imprime(monocrom);
})

//FUNCIONES
//Función que inicializa el array
function nuevoArray(filas, columnas, valorInicial) { //CREACION DE ARRAY:  let miArray = nuevoArray(filas,columnas,0);
    filas++;
    columnas++;
    let matriz = [];
    for (let i = 0; i < filas; i++) { matriz[i] = Array(columnas).fill(valorInicial); }
    return matriz;
}


/* Función que recibe instrucciones y guarda en el array
'1': trozo superior izquierdo
'2': trozo superior derecho
'3': trozo inferior derecho
'4': trozo inferior izquierdo
*/
function seleccionaYEscribe(instrucciones, matriz) {
    let XMin = 1; // X↑
    let XLong = matriz.length - 1;
    let XMax = XMin + XLong - 1;
    let YMin = 1; // Y→
    let YLong = matriz[0].length - 1;
    let YMax = YMin + YLong - 1;
    let caracter = "0";

    for (let i = 0; i < instrucciones.length; i++) {
        //selecciona zonas del array
        XLong = XLong / 2;
        YLong = YLong / 2;
        switch (instrucciones[i]) {
            case "1":
                //'1': trozo superior izquierdo
                XMin = XMax - XLong + 1;
                YMax = YMin + YLong - 1;
                break;
            case "2":
                //'2': trozo superior derecho
                XMin = XMax - XLong + 1;
                YMin = YMax - YLong + 1;
                break;
            case "3":
                //'3': trozo inferior derecho
                XMax = XMin + XLong - 1;
                YMin = YMax - YLong + 1;
                break;
            case "4":
                //'4': trozo inferior izquierdo
                XMax = XMin + XLong - 1;
                YMax = YMin + YLong - 1;
                break;
            default:
                caracter = instrucciones[i];
        }
    }

    //escribe en las zonas seleccionadas del array
    for (let i = XMin; i < XMax+1; i++) {
        for (let e = YMin; e < YMax+1; e++) {
            matriz[i][e] = caracter;
        }
    }
    return matriz;
}


//muestra en consola y retorna el array (para humanos)
function imprime(matrizBidimensional){
    let retorno = "";
    for (let x = matrizBidimensional.length - 1; x > 0; x--) {
        for (let y = 1; y < matrizBidimensional[0].length; y++) {
            retorno = retorno + matrizBidimensional[x][y].toString() + " ";
        }
        retorno = retorno + "\n";
    }
    console.log(retorno);
    return retorno;
}