const listMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0

let utilisateur = prompt("Entrez le mot : " + listMots[0])

if (utilisateur === listMots[0]) {
    score++
}

utilisateur = prompt("Entrez le mot : " + listMots[1])

if (utilisateur === listMots[1]) {
    score++
}

utilisateur = prompt("Entrez le mot : " + listMots[2])

if (utilisateur === listMots[2]) {
    score++
}
console.log(score);    
