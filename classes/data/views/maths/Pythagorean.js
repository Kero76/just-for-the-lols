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
            "description": "AB² = AC² + BC².",
            "fields": _fields,
        };
    }
}