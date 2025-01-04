function palindromo(num) {
    if (num>0 && (Number.isInteger(num)==true)){
     let numS=num.toString()
     let secuencia=[...numS]
     console.log(secuencia)

     let length=secuencia.length

    for (let index = 0; index < length-2; index++) {
        let a=secuencia[index]
        let b=secuencia[length-index-1]
        
        if (a!==b) {
            console.log("No es palindromo")
            return 
        } 
            
    } console.log("Es palindromo")

        }else {
            console.log("Tiene que ser entero positivo")
        }
    }


palindromo(25552)