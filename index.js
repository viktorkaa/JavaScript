function derekszoguE() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)

    if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        document.getElementById("derekszoguE").innerHTML = "Ez egy derékszügű háromszög!"
    }
    else {
        document.getElementById("derekszoguE").innerHTML = "Ez nem egy derékszügű háromszög!"
    }
}
