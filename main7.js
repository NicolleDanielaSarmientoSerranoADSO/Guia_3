addEventListener("DOMContentLoaded",()=>{
    // 7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    // $130.000 el descuento será del 15%, de lo contrario no hay descuento.
    let descuento = 0.15
    let suma = 0
    do{
        cuenta = Number(prompt('Insertar el valor de lo consumido'));
        suma+=cuenta
    }
    while(confirm('Desea ingresar otro producto'));

    if (suma>130000){
        desct=suma*descuento
        final=suma-desct
        console.log(`El total a pagar con descuento es de ${final}`);
    }
    else{
     console.log(`El valor total a pagar es de ${suma}`);
    }
})
