function generatoreQuadrati()
{
    let elemento = document.createElement("div")

    elemento.classList.add("square")    

    return elemento
}

let pulsante = document.getElementById("pulsante").addEventListener ("click", function(){
    let griglia = document.getElementById("griglia")
    griglia.innerHTML = ""
    for (let i = 1; i <= 100; i++){
        let quadrato = generatoreQuadrati()
        griglia.appendChild(quadrato)
        
        quadrato.innerText = i
        quadrato.addEventListener("click", function(){
            this.classList.toggle("active")
            console.log(`Hai selezionato il numero ${this.innerText}`)
        })
    }


})