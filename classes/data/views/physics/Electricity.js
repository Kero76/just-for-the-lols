/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Electricity extends BaseTemplate {
    /**
     * Constructor of the Electricity class.
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
                "id": "voltage-value",
                "label": "Tension (V)",
                "placeholder": "Tension électrique",
            },
            {
                "type": "input",
                "id": "intensity-value",
                "label": "Intensité (A)",
                "placeholder": "Intensité électrique",
            },
            {
                "type": "input",
                "id": "power-value",
                "label": "Puissance (W)",
                "placeholder": "Puissance électrique",
            },
            {
                "type": "input",
                "id": "resistance-value",
                "label": "Résistance (&#x2126;)",
                "placeholder": "Résistance électrique",
            }
        ];

        const _buttons = [
            {
                "type": "button",
                "id": "compute-result",
                "label": "Exécution",
                "buttonType": "button",
                "classes": "btn btn-primary"
            },
            {
                "type": "button",
                "id": "clear-result",
                "label": "Effacer",
                "buttonType": "button",
                "classes": "btn btn-danger mar-left-2x"
            }
        ];
        
        this.data = {
            "title": "Formules Électriques",
            "description": "Permet le calcul de la tension, de l'intensité, de la résistance ainsi que de la puissance d'un réseau électrique.<br >" +
                           "Pour cela, il suffit de remplir 2 des 4 champs et les 2 autres seront automatiquement calculés.",
            "fields": _fields,
            "buttons": _buttons
        };
    }
}