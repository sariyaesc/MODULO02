function par_impar (num){
    console.log("Num ingresado:",num)
    if (num==0) {
        console.log("Es indefinido")
    }

    else if (num%2==0) {
        console.log("Es par")
    } 
    
    else if (num%2!=0) {
        console.log("Es impar")
    }

    
}

par_impar(3)