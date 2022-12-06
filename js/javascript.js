function generatoreQuadtati()
{
    let elemento = document.createElement("div")

    elemento.classList.add("square")    

    return elemento
}

let pulsante = document.getElementById("pulsante").addEventListener ("click", function(){
    let griglia = document.getElementById("griglia")
    for (let i = 0; i < 100; i++){
        let quadratoCorrente = generatoreQuadtati()
        griglia.appendChild(quadratoCorrente)
    }
})