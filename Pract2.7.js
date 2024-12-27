function anagrama(pal1,pal2) {
    let pal1s=[...pal1.toLowerCase()].sort();
    let pal2s=[...pal2.toLowerCase()].sort();

    let length1=pal1s.length
    let length2=pal2s.length

    if (length1!=length2) {
        console.log("No es anagrama")
    }
    else if (pal1s.join('')===pal2s.join('')) {
        console.log("Si es anagrama")
    }
    else{
        console.log("No es anagrama")
    }

    
}

anagrama("hola","aloh")