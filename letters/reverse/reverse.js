const reverse = {
    
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
    },
};

/**
 * Get the content of the operands, compute the gcd and show the result under the form.
 */
$('#reverse-text').on('click', function() {
    const text = $('#text').val();

    if (text != "") {
        const result = reverse.reverse(text);
        Utils.showResult(
            'reverse-result', 
            (result != ""), 
            [result], 
            ['success']
        );
    }
}); // #reverse-text.on 

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    Utils.createBreadcrumb('breadcrumb', ['Hub', 'Lettres', 'Renverseur']);
}); // document.ready