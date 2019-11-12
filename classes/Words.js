/**
 * Word class who contains all function, methods and algorithms relative to words.
 */
class Word {
    /**
     * Empty constructor.
     */
    constructor() {

    }

    /**
     * Inverse the order of all letters of the text send in parameter.
     * 
     * @param {string} text
     *  The initial text to reverse order of all characters.
     * @returns {string}
     *  The text with all characters inversed. 
     */
    reverse(text) {
        let reverseText = "";
        let index = text.length - 1;

        while (index !== -1) {
            reverseText += text[index];
            index--;
        }

        return reverseText;
    }
}