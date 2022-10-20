addEventListener("DOMContentLoaded", ()=>{
    // 9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    // impares. Numero par es aquel que su residuo igual a cero (num mod !=0)

    let producto = 1
    let total = 0
    let num = Number(prompt('Ingrese el numero '))
    let num1 = num+1
    for (i=0 ; i<num1; i++) {
        if (i%2==0){
            total+=i
        }
        for (i=0; i<num1 ;i++){
            if (i%2!=0){
                producto*=i
            }
        }
        console.log(`La suma de los pares es de ${total}`);
        console.log(`El producto de los impares es de ${producto}`);
    }
})
