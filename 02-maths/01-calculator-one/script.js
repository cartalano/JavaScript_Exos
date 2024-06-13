/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getNumber = (id) => {
        const value = document.getElementById(id).value;
        return parseFloat(value);
    };

    const displayResult = (result) => {
        alert(`Résultat : ${result}`);
    };
    document.getElementById("addition").addEventListener("click", () => {
        const num1 = getNumber("op-one");
        const num2 = getNumber("op-two");
        const result = num1 + num2;
        displayResult(result);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        const num1 = getNumber("op-one");
        const num2 = getNumber("op-two");
        const result = num1 - num2;
        displayResult(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        const num1 = getNumber("op-one");
        const num2 = getNumber("op-two");
        const result = num1 * num2;
        displayResult(result);
    });

    document.getElementById("division").addEventListener("click", () => {
        const num1 = getNumber("op-one");
        const num2 = getNumber("op-two");
        if (num2 !== 0) {
            const result = num1 / num2;
            displayResult(result);
        }
        else {
            displayResult("Erreur");
        }
    });
})();
