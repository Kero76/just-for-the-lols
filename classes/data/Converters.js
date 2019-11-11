class Converters {
    constructor() {
        const _fields = [
            {
                "type": "input",
                "id": "value-at-convert",
                "label": "Valeur à convertir",
                "placeholder": "Valeur a convertir",
                "ariaDescribedBy": "help-value-at-convert",
                "helpText": "Valeur à convertir.",
            },
            {
                "type": "select",
                "id": "unit-at-convert",
                "label": "Unité",
                "options": this.getLitersOptions(),
            },
            {
                "type": "input",
                "id": "value-converted",
                "label": "Valeur convertie",
                "placeholder": "Valeur convertie",
                "ariaDescribedBy": "help-value-converted",
                "helpText": "Valeur convertie.",
                "readonly": true
            },
            {
                "type": "select",
                "id": "unit-converted",
                "label": "Unité",
                "options": this.getLitersOptions(),
            }
        ];

        this.data = {
            "title": "Convertisseurs",
            "description": "Convertisseurs permettant la convertion des litres, des kilogrammes ainsi que des volumes.",
            "fields": _fields,
            "button": {
                "id": "convert",
                "label": "Convertir"
            }
        }
    }

    /**
     * Get all liters unit options
     * 
     * @returns
     *  An array who contain all liters unit options.
     */
    getLitersOptions() {
        return [
            {
                "name": "kilolitre",
                "symbol": "kl",
                "value": 1000000
            },
            {
                "name": "Hectolitre",
                "symbol": "hl",
                "value": 100000
            },
            {
                "name": "Décalitre",
                "symbol": "dal",
                "value": 10000
            },
            {
                "name": "litre",
                "symbol": "L",
                "value": 1000
            },
            {
                "name": "décilitre",
                "symbol": "dl",
                "value": 100
            },
            {
                "name": "centilitre",
                "symbol": "cl",
                "value": 10
            },
            {
                "name": "millilitre",
                "symbol": "ml",
                "value": 1
            }
        ];
    }

    /**
     * Get all distances unit options.
     * 
     * @returns 
     *  An array who contains all distances unit for convertion.
     */
    getDistanceOptions() {
        return [
            {
                "name": "kilomètre",
                "symbol": "km",
                "value": 1000000
            },
            {
                "name": "hectomètre",
                "symbol": "hm",
                "value": 100000
            },
            {
                "name": "décamètre",
                "symbol": "dam",
                "value": 10000
            },
            {
                "name": "mètre",
                "symbol": "m",
                "value": 1000
            },
            {
                "name": "décimètre",
                "symbol": "dm",
                "value": 100
            },
            {
                "name": "centimètre",
                "symbol": "cm",
                "value": 10
            },
            {
                "name": "millimètre",
                "symbol": "mm",
                "value": 1
            }
        ];
    }

    /**
     * Get all weigth unit options.
     * 
     * @returns
     *  An array with all weight unit options.
     */
    getWeightOptions() {
        return [
            {
                "name": "kilogramme",
                "symbol": "kg",
                "value": 1000000
            },
            {
                "name": "hectogramme",
                "symbol": "hg",
                "value": 100000
            },
            {
                "name": "décagramme",
                "symbol": "dag",
                "value": 10000
            },
            {
                "name": "gramme",
                "symbol": "g",
                "value": 1000
            },
            {
                "name": "décigramme",
                "symbol": "dg",
                "value": 100
            },
            {
                "name": "centigramme",
                "symbol": "cg",
                "value": 10
            },
            {
                "name": "milligramme",
                "symbol": "mg",
                "value": 1
            }
        ];
    }
}