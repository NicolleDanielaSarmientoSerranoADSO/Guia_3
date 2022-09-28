addEventListener("DOMContentLoaded", (e)=>{
    //Datos de entrada
    let pes=Number(prompt("Ingrese el peso de la gallina:"));
    let alt=Number(prompt("Ingrese la altura de la gallina:"));
    let n=Number(prompt("Ingrese el numero de huevos que pone:"));
    //Proceso 
    let calidad=(pes*alt)/n
    ///Salida
    document.write(`El precio de las ventas por kilo es:${calidad}`)
})