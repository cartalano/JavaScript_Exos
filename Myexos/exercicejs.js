let ticket = {
    nomFilm : "Batman",
    Prix : 5,
    numéro : 10,
  }
  
  let monNom = "Nicolas";
  
  let textAffichage = "Bonjour " + monNom + ", votre film, " + ticket.nomFilm + " est en salle: " + ticket.numéro
  
  console.log(textAffichage);

  let nouveauFilm = "pinocchio"
  const listFilm = ["Batman", "spiderman", "superman", nouveauFilm]

  console.log(listFilm[3])

const playlist = ["MJ", "franck ocean", "pnl"]
playlist.push("britney","IAM")
playlist.pop()
var totalMorceaux = playlist.length


console.log(totalMorceaux)
console.log(playlist)