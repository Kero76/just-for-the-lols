/**
 * Get the content of the operands, compute the gcd and show the result under the form.
 */
$('#reverse-text').on('click', function() {
    const text = $('#text').val();

    if (text != "") {
        const result = new Word().reverse(text);
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
    Utils.createBreadcrumb(
        'breadcrumb', 
        ['Hub', 'Lettres', 'Renverseur'], 
        ['../../index.html', '', 'reverse.html'],
    );
}); // document.ready