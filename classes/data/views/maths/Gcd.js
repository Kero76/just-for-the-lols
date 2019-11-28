/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Gcd extends BaseTemplate {
    /**
     * Constructor of the Gcd class.
     * 
     * @constructor
     * 
     * @see BaseTemplate
     * 
     * @since 1.0
     */
    constructor() {
        super();
        
        const _fields = [
            {
                "type": "input",
                "id": "operandA",
                "label": "Opérande A",
                "placeholder": "Opérande A",
                "ariaDescribedBy": "help-operandA",
                "helpText": "Premier opérande.",
            },
            {
                "type": "input",
                "id": "operandB",
                "label": "Opérande B",
                "placeholder": "Opérande B",
                "ariaDescribedBy": "help-operandB",
                "helpText": "Seconde opérande.",
            },
            {
                "type": "button",
                "id": "compute-gcd",
                "label": "Calcul du PGCD",
                "buttonType": "button"
            }
        ];

        this.data = {
            "title": "PGCD (Plus Grand Commun Diviseur)",
            "description": "Le PGCD consiste a trouver le plus grand commun diviseur entre deux nombres données.<br />" +
                           "Par exemple, le PGCD(10, 8) est 2, car 2 est le plus grand diviseur commun existant entre 10 et 8.",
            "fields": _fields,
        };
    }
}