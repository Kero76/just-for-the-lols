class Pythagorean {

    constructor() {
        const _fields = [
            {
                "type": "input",
                "id": "hypothenuse",
                "label": "AB (Hypothènuse)",
                "placeholder": "Distance AB",
                "ariaDescribedBy": "help-hypothenuse",
                "helpText": "Distance entre A et B.",
            },
            {
                "type": "input",
                "id": "cathetus1",
                "label": "AC (cathète)",
                "placeholder": "Distance AC",
                "ariaDescribedBy": "help-cathetus-1",
                "helpText": "Distance entre A et C.",
            },
            {
                "type": "input",
                "id": "cathetus2",
                "label": "BC (cathète)",
                "placeholder": "Distance BC",
                "ariaDescribedBy": "help-cathetus-2",
                "helpText": "Distance entre B et C.",
            },
            {
                "type": "button",
                "id": "theorem-execution",
                "label": "Exécution du théorème",
                "buttonType": "button"
            }
        ];

        this.data = {
            "title": "Théorème de Pythagore",
            "description": "Le théorème de pythagore affirme qu'uu triangle est dit rectangle (c'est à dire qu'il possède un angle droit), " +
                           "si le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. <br />" + 
                           "Autrement dit, la formule suivante doit être vrai en prenant <em>[AB]</em> comme hypothènuse et <em>[AC]</em>, <em>[BC]</em> comme les cathètes du triangle : AB² = AC² + BC².<br />" + 
                           "La réciproque quand à elle consiste a dire que si l'hypothènuse potentiel <em>AB</em> n'est pas égale aux deux cathètes aux carrés, alors le triangle n'est pas rectangle.",
            "fields": _fields,
        };
    }
}