addEventListener("DOMContentLoaded",()=>{
    let personas=0
    let mujeres=0
    while (personas <= 42){
        mujeres +=1
        let hombres= mujeres+ 7
        personas= mujeres+ hombres
        document.write(`El total de personas es: ${personas}<br>`)
        document.write(`Mujer: ${mujeres}<br>`)
        document.write(`Hombres: ${hombres}<br>`)
    }
})