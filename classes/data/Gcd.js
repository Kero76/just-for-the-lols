class Gcd {

    constructor() {
        const _fields = [
            {
                "type": "input",
                "id": "operandA",
                "label": "Opérande A",
                "placeholder": "Opérande A",
                "ariaDescribedBy": "help-operandA",
                "helpText": "Premier opérande.",
                "row": 0,
            },
            {
                "type": "input",
                "id": "operandB",
                "label": "Opérande B",
                "placeholder": "Opérande B",
                "ariaDescribedBy": "help-operandB",
                "helpText": "Seconde opérande.",
                "row": 0,
            }
        ];

        this.data = {
            "title": "PGCD (Plus Grand Commun Diviseur)",
            "description": "Le PGCD consiste a trouver le plus grand commun diviseur entre deux nombres données.<br />" +
                           "Par exemple, le PGCD(10, 8) est 2, car 2 est le plus grand diviseur commun existant entre 10 et 8.",
            "fields": _fields,
            "button": {
                "id": "compute-gcd",
                "label": "Calcul du PGCD"
            }
        };
    }
}