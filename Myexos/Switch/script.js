//Exemple de condition SWITCH pour comparer un mot

const motApplication = "Bonjour"
let motUtilisateur = prompt("Entrez un mot :" + motApplication ) // prompt(“Entrez un mot :”). Cette instruction fera apparaître une petite popup sur la page ;

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo, t'es le boss !")
        break
    case "Fifou":
        console.log("c'est un peu vrai mais c'est pas ça.")
        break
    case "Bandit":
        console.log("Heho, reste calme !")
        break
    default:
        console.log("WRONG! Concentre toi !")        
}

