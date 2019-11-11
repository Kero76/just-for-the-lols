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
                "id": "value-convert",
                "label": "Valeur convertie",
                "placeholder": "Valeur convertie",
                "ariaDescribedBy": "help-value-convert",
                "helpText": "Valeur convertie.",
            },
            {
                "type": "select",
                "id": "unit-convert",
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
                "symbol": "kl"
            },
            {
                "name": "Hectolitre",
                "symbol": "hl"
            },
            {
                "name": "Décalitre",
                "symbol": "dal"
            },
            {
                "name": "litre",
                "symbol": "L"
            },
            {
                "name": "décilitre",
                "symbol": "dl"
            },
            {
                "name": "centilitre",
                "symbol": "cl"
            },
            {
                "name": "millilitre",
                "symbol": "ml"
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
                "symbol": "km"
            },
            {
                "name": "hectomètre",
                "symbol": "hm"
            },
            {
                "name": "décamètre",
                "symbol": "dam"
            },
            {
                "name": "mètre",
                "symbol": "m"
            },
            {
                "name": "décimètre",
                "symbol": "dm"
            },
            {
                "name": "centimètre",
                "symbol": "cm"
            },
            {
                "name": "millimètre",
                "symbol": "mm"
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
                "symbol": "kg"
            },
            {
                "name": "hectogramme",
                "symbol": "hg"
            },
            {
                "name": "décagramme",
                "symbol": "dag"
            },
            {
                "name": "gramme",
                "symbol": "g"
            },
            {
                "name": "décigramme",
                "symbol": "dg"
            },
            {
                "name": "centigramme",
                "symbol": "cg"
            },
            {
                "name": "milligramme",
                "symbol": "mg"
            }
        ];
    }
}