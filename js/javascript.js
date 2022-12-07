function generatoreQuadrati()
{
    let elemento = document.createElement("div")

    elemento.classList.add("square")    

    return elemento
}

function gameDifficulty()
{
    let scelta = parseInt(document.getElementById("seleziona").value)
    let numCelle
    let cellePerRiga

    switch (scelta) {
        case 1:
            numCelle = 100
            cellePerRiga = 10
            break;
        case 2:
            numCelle = 81
            cellePerRiga = 9
            break;
        case 3: 
            numCelle = 49
            cellePerRiga = 7
            break;
        default:
            numCelle = 100
            cellePerRiga = 10
            break;
    }

    generatoreGriglia(numCelle, cellePerRiga)
}

function generatoreGriglia(numeroCelle, cellePerRiga)
{
    document.getElementById("griglia").innerHTML = ""
    let griglia = document.createElement("div")
    griglia.classList.add("griglia")
}

let pulsante = document.getElementById("pulsante").addEventListener ("click", function(){
    gameDifficulty()
    
    // let griglia = document.getElementById("griglia")
    // griglia.innerHTML = ""
    // for (let i = 1; i <= 100; i++){
    //     let quadrato = generatoreQuadrati()
    //     griglia.appendChild(quadrato)
        
    //     quadrato.innerText = i
    //     quadrato.addEventListener("click", function(){
    //         this.classList.toggle("active")
    //         console.log(`Hai selezionato il numero ${this.innerText}`)
    //     })
    // }


})