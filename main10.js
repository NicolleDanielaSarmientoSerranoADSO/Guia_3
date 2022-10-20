addEventListener("DOMContentLoaded", ()=>{
     // 10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    // Iva, Subtotal y Total de la compra de los artículos
    let prod1 = Number(prompt('Ingrese el valor del primer producto'))
    let prod2 = Number(prompt('Ingrese el valor del segundo producto'))
    let prod3 = Number(prompt('Ingrese el valor del tercer producto'))
    let prod4 = Number(prompt('Ingrese el valor del cuarto producto'))
    let prod5=  Number(prompt('Ingrese el valor del quinto producto'))
    let iva = 0.19
    let subt = prod1+prod2+prod3+prod4+prod5
    let iva1 = subt*iva
    let total = iva1+subt

    console.log(`El subtotal es ${subt}`);
    console.log(`El total es ${total}`);
    console.log(`El iva es el del 19% ${iva}`);
})
