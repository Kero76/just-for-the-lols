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
        return text.split("").reverse().join("");
    }

    /**
     * Check if the text is a palindrome.
     * 
     * @param {string} text 
     *  The text to check if he's a palindrome.
     * @param {boolean} isCaseSensitive
     *  Specified is the palindrome is concern by the case sensitivity or not.
     * @returns 
     *  A boolean to indicate if the text is a palindrome or not.
     */ 
    palindrome(text, isCaseSensitive = false) {
        if (!isCaseSensitive) {
            text = text.toLocaleLowerCase();
        }

        return text === this.reverse(text);
    }
}