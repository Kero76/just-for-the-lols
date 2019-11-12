class Converters {
    constructor() {
        const _literFields = [
            {
                "type": "input",
                "id": "liter-value-at-convert",
                "label": "Volume à convertir",
                "placeholder": "Volume à convertir",
                "ariaDescribedBy": "help-liter-value-at-convert",
                "helpText": "Volume à convertir.",
            },
            {
                "type": "select",
                "id": "liter-unit-at-convert",
                "label": "Unité",
                "options": this.getLitersOptions(),
            },
            {
                "type": "input",
                "id": "liter-value-converted",
                "label": "Volume convertie",
                "placeholder": "Volume convertie",
                "ariaDescribedBy": "help-liter-value-converted",
                "helpText": "Volume convertie.",
                "readonly": true
            },
            {
                "type": "select",
                "id": "liter-unit-converted",
                "label": "Unité",
                "options": this.getLitersOptions(),
            },
            {
                "type": "button",
                "id": "liter-convert",
                "label": "Convertir",
                "buttonType": "button"
            }
        ];

        const _distanceFields = [
            {
                "type": "input",
                "id": "distance-value-at-convert",
                "label": "Distance à convertir",
                "placeholder": "Distance à convertir",
                "ariaDescribedBy": "help-distance-value-at-convert",
                "helpText": "Distance à convertir.",
            },
            {
                "type": "select",
                "id": "distance-unit-at-convert",
                "label": "Unité",
                "options": this.getDistanceOptions(),
            },
            {
                "type": "input",
                "id": "distance-value-converted",
                "label": "Distance convertie",
                "placeholder": "Distance convertie",
                "ariaDescribedBy": "help-distance-value-converted",
                "helpText": "Distance convertie.",
                "readonly": true
            },
            {
                "type": "select",
                "id": "distance-unit-converted",
                "label": "Unité",
                "options": this.getDistanceOptions(),
            },
            {
                "type": "button",
                "id": "distance-convert",
                "label": "Convertir",
                "buttonType": "button"
            }
        ];
        
        const _weightFields = [
            {
                "type": "input",
                "id": "weight-value-at-convert",
                "label": "Masse à convertir",
                "placeholder": "Masse à convertir",
                "ariaDescribedBy": "help-weight-value-at-convert",
                "helpText": "Masse à convertir.",
            },
            {
                "type": "select",
                "id": "weight-unit-at-convert",
                "label": "Unité",
                "options": this.getWeightOptions(),
            },
            {
                "type": "input",
                "id": "weight-value-converted",
                "label": "Masse convertie",
                "placeholder": "Masse convertie",
                "ariaDescribedBy": "help-weight-value-converted",
                "helpText": "Masse convertie.",
                "readonly": true
            },
            {
                "type": "select",
                "id": "weight-unit-converted",
                "label": "Unité",
                "options": this.getWeightOptions(),
            },
            {
                "type": "button",
                "id": "weight-convert",
                "label": "Convertir",
                "buttonType": "button"
            }
        ];

        const _fields = [
            {
                "convertFields": _literFields
            },
            {
                "convertFields": _distanceFields
            },
            {
                "convertFields": _weightFields
            }
        ];

        this.data = {
            "title": "Convertisseurs",
            "description": "Convertisseurs permettant la convertion des litres, des kilogrammes ainsi que des volumes.",
            "fields": _fields,
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