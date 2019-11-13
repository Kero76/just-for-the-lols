class Reverse {
    constructor() {
        // Contains all fields used in template.
        const _fields = [
            {
                "type": "textarea",
                "id": "text",
                "label": "Texte à renverser",
                "rows": 5,
                "placeholder": "",
                "ariaDescribedBy": "help-reverse-text",
                "helpText": "Permet de lire le contenu du texte de la droite vers la gauche.",
            }
        ];

        this.data = {
            "title": "Renverseur de texte",
            "description": "Le renverseur de texte consiste en un algorithme inversant l'ensemble des positions des lettres.<br />" + 
                          "La phrase 'Bonjour à tous' devient donc 'sout à ruojnoB'.",
            "fields": _fields,
            "button": {
                "id": "reverse-text",
                "label": "Renverser le texte"
            }
        };
    }
}