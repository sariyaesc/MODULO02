
/*function fibonacci(limit) {
        let a0=0
        let a1=1
    for (let index = 0; index <= limit-2; index++) {
        r=a0+a1
        console.log("0 1",r)
        
    }
}*/

function fibonacci(limit) {
    
    let a0=0
    let a1=1
    const secuencia=[a0,a1]
    let r=a0+a1

    while (r<limit) {
        secuencia.push(r)
        a0=a1
        a1=r
        r=a0+a1
        
        }
    console.log(secuencia)
    }

fibonacci(6)
