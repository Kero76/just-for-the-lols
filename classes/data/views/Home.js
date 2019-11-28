/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Home extends BaseTemplate {
    /**
     * Constructor of the Home class.
     * 
     * @constructor
     * 
     * @see BaseTemplate
     * 
     * @since 1.0
     */
    constructor() {
        super();
        
        // Letters subjects 
        const _letterSubjects = [
            {
                "name": "Renverseur de texte",
                "link": "views/letters/reverse/reverse.html"
            },
            {
                "name": "Palindrome",
                "link": "views/letters/palindrome/palindrome.html"
            }
        ];
        // Mathematical subjects
        const _mathematicalSubjects = [
            {
                "name": "Théorème de Pythagore",
                "link": "views/maths/pythagorean/pythagorean.html"
            },
            {
                "name": "Théorème de Thalès",
                "link": "views/maths/thales/thales.html"
            },
            {
                "name": "PGCD (Plus Grand Commun Diviseur)",
                "link": "views/maths/gcd/gcd.html"
            },
            {
                "name": "PPCM (Plus Petit Commun Multiple)",
                "link": "views/maths/lcm/lcm.html"
            }
        ];
        // Physical subjects 
        const _physicalSubjects = [
            {
                "name": "Convertisseurs",
                "link": "views/physics/converters/converters.html"
            },
            {
                "name": "Calcul de formules électriques",
                "link": "views/physics/electricity/electricity.html"
            }
        ];
    
        // Categories
        const _categories = [
            {
                "name": "Lettres",
                "id": "letters",
                "subjects": _letterSubjects,
                "size": _letterSubjects.length,
                "icon": "book"
            }, 
            {
                "name": "Mathématiques",
                "id": "mathematical",
                "subjects": _mathematicalSubjects,
                "size": _mathematicalSubjects.length,
                "icon": "calculator"
            },
            {
                "name": "Physiques",
                "id": "physical",
                "subjects": _physicalSubjects,
                "size": _physicalSubjects.length,
                "icon": "flask"
            }
        ];
    
        // Data used in template.
        this.data = {
            "categories": _categories,
            'size': _categories.length,
        };
    }
}