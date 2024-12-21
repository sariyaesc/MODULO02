function calif(num) {
    console.log("Calificacion Ingresada:",num)
    if (num>0 && num<=5) {
        console.log("Reprobado")
    }
    else if (num==6 || num==7){
        console.log("Regular")
    }
    else if (num==8){
        console.log("Bien")
    }
    else if (num==9){
        console.log("Muy bien")
    }
    else if (num==10){
        console.log("Excelente")
    }
}
calif(10)