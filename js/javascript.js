function generatoreQuadrati()
{
    let elemento = document.createElement("div")

    elemento.classList.add("square")    

    return elemento
}

// function numeri (min, max)
// {
//     let numList = []
//     for (let il = 1 il <= 100 il++){
//         num++
//     }
//     return num
// }

let pulsante = document.getElementById("pulsante").addEventListener ("click", function(){
    let griglia = document.getElementById("griglia")
    for (let i = 1; i <= 100; i++){
        let quadrato = generatoreQuadrati()
        griglia.appendChild(quadrato)

        let numeroConsecutivo = []
        for (let num = 1; num <= 100; num++){
            num++
        }
        let numero = numeroConsecutivo[num]

        griglia.innerHTML = numero
        // let numeroConsecutivo = 1
        // for (let num = 1; num <=100 num++{
        //     numeroConsecutivo = numeroConsecutivo[num] +1
        // }
        // console.log(numeroConsecutivo)

        quadrato.addEventListener("click", function(){
            this.classList.add("active")
        })
    }


})