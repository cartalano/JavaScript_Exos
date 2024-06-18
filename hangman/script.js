const leMot = "soupe"

let vie = 0

let motUtilisateur = prompt("Propose un mot : ")

switch (motUtilisateur) {
    case leMot:
        alert("Bravo ! Tu as trouvé le mot ! T'es le bo$$")
        break
    default:
        vie++
        alert("Mauvaise réponse, il te reste 2 vies, essaye encore.")
        console.log("Mauvaise réponse.")
}


console.log("")
