/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getNumber = (id) => {       //Récupère la valeur d'un champ d'entrée par son identidiant et le convertit en nombre flottant
        const value = document.getElementById(id).value;
        return parseFloat(value);
    };

    const displayResult = (result) => {  // Affiche le résultat dans une boite de dialogue 
        alert(`Résultat : ${result}`);
    };

    const calculate = (operator) => { // Récupère les valeurs des champs d'entrée, effectue l'opération correspondante en utilisant une structure switch, et affiche le résultat.
        const num1 = getNumber("op-one");
        const num2 = getNumber("op-two");
        let result;

        switch (operator) {
            case 'addition':
                result = num1 + num2;
                break;
            case 'substraction':
                result = num1 - num2;
                break;
            case 'multiplication':
                result = num1 * num2;
                break;
            case 'division':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Erreur : Division par zéro !";
                }
                break;
            default:
                result = "Opérateur non valide";
        }

        displayResult(result);
    };

    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => {
            calculate(button.id);
        });
    });
})();

