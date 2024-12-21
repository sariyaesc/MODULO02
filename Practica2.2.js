function mayor(a,b,c) {
    console.log("Nums ingresados:",a,b,c)
    if (a>b && a>c){
        console.log(a,"es el num mayor")
    }
    else if (b>a && b>c){
        console.log(b,"es el num mayor")
    }
    else if (c>a && c>b){
        console.log(c,"es el num mayor")
    }

    else if (a==b){
        console.log("Hay un empate entre",a,"y",b)
    }
    else if (a==c){
        console.log("Hay un empate entre",a,"y",c)
    }
    else if (b==c){
        console.log("Hay un empate entre",b,"y",c)
    }
}
mayor(1,2,3)
