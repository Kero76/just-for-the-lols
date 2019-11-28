/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Palindrome extends BaseTemplate {
    /**
     * Constructor of the Palindrome class.
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
                "id": "palindrome",
                "label": "Palindrome",
                "placeholder": "Est un palindrome ?",
            },
            {
                "type": "radio",
                "radios": [
                    {
                        "name": "case-sensitive",
                        "label": "Sensible aux majuscules et minuscules", 
                        "value": "case-sensitive",
                        "checked": '',
                        "labelClasses": "radio-inline",
                        "inputClasses": "radio-btn-mar-right"
                    },
                    {
                        "name": "case-sensitive",
                        "label": "Insensible aux majuscules et minuscules", 
                        "value": "case-insensitive",
                        "checked": 'checked',
                        "labelClasses": "radio-inline mar-left-1x",
                        "inputClasses": "radio-btn-mar-right"
                    }
                ]
            },
            {
                "type": "button",
                "id": "palindrome-execution",
                "label": "Vérification",
                "buttonType": "button"
            }
        ];

        this.data = {
            "title": "Détecteur de Palindrome",
            "description": "Un palindrome est un mot ou une phrase que l'on peut lire de droite à gauche ou de gauche à droite indisctinctement.<br />" + 
                           "Par exemple, le mot 'kayak' se lit 'kayak' de gauche à droite ou de droite à gauche.",
            "fields": _fields,
        };
    }
}