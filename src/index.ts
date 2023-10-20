// Déclaration de fonction
function addition(nb1: number, nb2: number): number {

    return nb1 + nb2;
}

const subtraction = (nb1: number, nb2: number): number => {

    return nb1 - nb2;
};

function multiplication(nb1: number, ...nbs: number[]): number {

    let result = nb1;

    for (const nb of nbs) {
        result *= nb;
    }

    return result;
}

function divisionEntier(nb1: number, nb2: number): number {
    if (nb2 === 0) {
        throw Error('Divison par zéro!  (╯°□°）╯︵ ┻━┻');
    }

    return Math.floor(nb1 / nb2);
}

function filterString(tab: string[], filterCallback: (elem: string) => boolean): string[] {

    const result: string[] = [];

    for (const value of tab) {

        if (filterCallback(value)) {
            result.push(value);
        }
    }

    return result;
}

function filterGenerique<TElem>(tab: TElem[], filterCallback: (elem: TElem) => boolean): TElem[] {

    const result: TElem[] = [];

    for (const value of tab) {

        if (filterCallback(value)) {
            result.push(value);
        }
    }

    return result;
}

const names = ['Riri', 'Fifi', 'Zaza', 'Della', 'Loulou', 'Donald', 'Balthazar'];

const res1 = filterGenerique<string>(names, (name: string) => name.includes('o'));

const res2 = filterGenerique(names, function (name: string) {
    return name.length <= 5;
});

const res3 = filterGenerique([13, 42, 10, 5, 36, 21], (nb) => nb % 2 === 0);


// Interaction avec le DOM
const inputNb1 = document.getElementById('nb1') as HTMLInputElement;
const inputNb2 = document.getElementById('nb2') as HTMLInputElement;
const inputRes = document.getElementById('res') as HTMLInputElement;
const inputOp = document.getElementById('op') as HTMLSelectElement;
const calcForm = document.getElementById('calc-form') as HTMLFormElement;

calcForm.addEventListener('submit', (ev: SubmitEvent) => {
    ev.preventDefault();

    const nb1: number = parseFloat(inputNb1.value);
    const nb2: number = inputNb2.valueAsNumber;
    const op = inputOp.value as 'add' | 'sub' | 'multi' | 'div' | '';

    let result: number | string;

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
            catch (error: any) {
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

