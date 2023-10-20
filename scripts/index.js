"use strict";
// Déclaration de fonction
function addition(nb1, nb2) {
    return nb1 + nb2;
}
const subtraction = (nb1, nb2) => {
    return nb1 - nb2;
};
function multiplication(nb1, ...nbs) {
    let result = nb1;
    for (const nb of nbs) {
        result *= nb;
    }
    return result;
}
function divisionEntier(nb1, nb2) {
    if (nb2 === 0) {
        throw Error('Divison par zéro!  (╯°□°）╯︵ ┻━┻');
    }
    return Math.floor(nb1 / nb2);
}
function filterString(tab, filterCallback) {
    const result = [];
    for (const value of tab) {
        if (filterCallback(value)) {
            result.push(value);
        }
    }
    return result;
}
function filterGenerique(tab, filterCallback) {
    const result = [];
    for (const value of tab) {
        if (filterCallback(value)) {
            result.push(value);
        }
    }
    return result;
}
const names = ['Riri', 'Fifi', 'Zaza', 'Della', 'Loulou', 'Donald', 'Balthazar'];
const res1 = filterGenerique(names, (name) => name.includes('o'));
const res2 = filterGenerique(names, function (name) {
    return name.length <= 5;
});
const res3 = filterGenerique([13, 42, 10, 5, 36, 21], (nb) => nb % 2 === 0);
// Interaction avec le DOM
const inputNb1 = document.getElementById('nb1');
const inputNb2 = document.getElementById('nb2');
const inputRes = document.getElementById('res');
const inputOp = document.getElementById('op');
const calcForm = document.getElementById('calc-form');
calcForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = inputNb2.valueAsNumber;
    const op = inputOp.value;
    let result;
    switch (op) {
        case 'add':
            result = addition(nb1, nb2);
            break;
        case 'sub':
            result = subtraction(nb1, nb2);
            break;
        case 'multi':
            result = multiplication(nb1, nb2);
            break;
        case 'div':
            try {
                result = divisionEntier(nb1, nb2);
            }
            catch (error) {
                if (error instanceof Error) {
                    result = error.message;
                }
                else {
                    result = 'Ca a plante :o';
                }
            }
            break;
        default:
            result = 'L\'opération n\'est pas supporté!';
            break;
    }
    inputRes.value = result.toString();
});
