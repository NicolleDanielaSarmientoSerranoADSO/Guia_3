addEventListener("DOMContentLoaded", (e)=>{
let cont=0
while(cont<10){
    let n1=0,n2=0
    n1=Number(prompt("Ingrese el primer numero: "))
    n2=Number(prompt("Ingrese el segundo numero:"))
    let sum=0,rest=0,div=0,mult=0
    sum=(n1+n2)
    rest=(n1-n2)
    mult=(n1*n2)
    div=(n1/n2)
    document.write(`El total de la suma es de: ${sum}<br>`)
    document.write(`El total de la resta es de: ${rest}<br>`)
    document.write(`El total de la división es de: ${div}<br>`)
    document.write(`El total de la multiplicación es de: ${mult}<br>`)
    document.write(`_______________________<br>`)
    cont+=1
}
})