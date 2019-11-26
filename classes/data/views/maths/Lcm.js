/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Lcm extends BaseTemplate {
    /**
     * Constructor of the Lcm class.
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
                "id": "integer1",
                "label": "Entier 1",
                "placeholder": "Entier 1",
                "ariaDescribedBy": "help-integer1",
                "helpText": "Premier entier choisi.",
            },
            {
                "type": "input",
                "id": "integer2",
                "label": "Entier 2",
                "placeholder": "Entier 2",
                "ariaDescribedBy": "help-integer2",
                "helpText": "Second entier choisi.",
            },
            {
                "type": "button",
                "id": "ppcm-execution",
                "label": "Calcul du PPCM",
                "buttonType": "button"
            }
        ]

        this.data = {
            "title": "PPCM (Plus Petit Commun Multiple",
            "description": "Le PPCM ou Plus Petit Commun Multiple représente l'entier relatif le plus petit résultant de la multiplication de 2 nombres entiers.<br />" + 
                           "Par exemple, les multiples de 10 et 15 sont : 30, 60, 90, 120 et 15, hors parmis ces nombres, le plus petit est 30, qui est alors le PPCM de 10 et 15.",
            "fields": _fields,
        };
    }
}