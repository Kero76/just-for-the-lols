/**
 * Class Home who contains all data use in home template.
 */
class Home {

    /**
     * Constructor use to initialize the data use in template.
     */
    constructor() {
        // Letters subjects 
        const _letterSubjects = [
            {
                "name": "Renverseur de texte",
                "link": "views/letters/reverse/reverse.html"
            }
        ];
        // Mathematical subjects
        const _mathematicalSubjects = [
            {
                "name": "Théorème de Pythagore",
                "link": "views/maths/pythagorean/pythagorean.html"
            },
            {
                "name": "PGCD (Plus Grand Commun Diviseur)",
                "link": "views/maths/gcd/gcd.html"
            }
        ];
        // Physical subjects 
        const _physicalSubjects = [
            {
                "name": "Convertisseurs",
                "link": "views/physics/converters/converters.html"
            }
        ];
    
        // Categories
        const _categories = [
            {
                "name": "Lettres",
                "id": "letters",
                "subjects": _letterSubjects,
                "size": _letterSubjects.length
            }, 
            {
                "name": "Mathématiques",
                "id": "mathematical",
                "subjects": _mathematicalSubjects,
                "size": _mathematicalSubjects.length
            },
            {
                "name": "Physiques",
                "id": "physical",
                "subjects": _physicalSubjects,
                "size": _physicalSubjects.length
            }
        ];
    
        // Data used in template.
        this.data = {
            "categories": _categories,
            'size': _categories.length,
        };
    }
}