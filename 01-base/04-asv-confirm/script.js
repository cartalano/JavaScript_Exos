/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let confirmation = false;

    while (!confirmation) {
        // Pose des questions à l'utilisateur
        let age = prompt("Quel est votre âge ?");
        let sexe = prompt("Quel est votre sexe ?");
        let ville = prompt("Dans quelle ville habitez-vous ?");
        
        // Crée un message de confirmation
        let message = `Veuillez confirmer vos informations:\nÂge: ${age}\nSexe: ${sexe}\nVille: ${ville}\n\nConfirmez-vous ces informations ?`;
        
        // Demande à l'utilisateur de confirmer
        confirmation = confirm(message);
    }
})();
