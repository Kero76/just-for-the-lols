/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Thales extends BaseTemplate {
    /**
     * Constructor of the Thales class.
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
                "id": "ad",
                "label": "AD",
                "placeholder": "Distance AD",
            },
            {
                "type": "input",
                "id": "ae",
                "label": "AE",
                "placeholder": "Distance AE",
            },
            {
                "type": "input",
                "id": "de",
                "label": "DE",
                "placeholder": "Distance DE",
            },
            {
                "type": "input",
                "id": "ab",
                "label": "AB",
                "placeholder": "Distance AB",
            },
            {
                "type": "input",
                "id": "ac",
                "label": "AC",
                "placeholder": "Distance AC",
            },
            {
                "type": "input",
                "id": "bc",
                "label": "BC",
                "placeholder": "Distance BC",
            },
            {
                "type": "button",
                "id": "theorem-execution",
                "label": "Exécution du théorème",
                "buttonType": "button",
                "classes": "btn btn-primary mar-top-3x btn-heigth-40x"
            },
            {
                "type": "button",
                "id": "clean-fields",
                "label": "Vider les champs",
                "buttonType": "reset",
                "classes": "btn btn-danger mar-top-3x btn-heigth-40x"
            }
        ];

        this.data = {
            "title": "Théorème de Thalès",
            "description": "Soit un triangle ABC, et deux points D et E des droites (AB) et (AC) de sorte que la droite (DE) soit parallèle à la droite (BC)." +
                           "On a alors : AD/AB = AE/AC = DE/BC",
            "fields": _fields,
        };
    }
}