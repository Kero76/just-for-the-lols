const utils = new Utils();

/**
 * Get the content of the operands, compute the gcd and show the result under the form.
 */
$('#compute-gcd').on('click', function() {
    const operandA = $('#operandA').val();
    const operandB = $('#operandB').val();

    if (operandA != "" && operandB != "") {
        const result = new Mathematics().euclideanAlgorithm(operandA, operandB);
        utils.showResult(
            'gcd-result', 
            (result != 1), 
            [`Le PGCD(${operandA}, ${operandB}) est ${result}`, `Le PGCD(${operandA}, ${operandB}) est ${result}`], 
            ['success', 'warning']
        );
    }
}); // #compute-gcd.on 

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    utils.createBreadcrumb(
        'breadcrumb', 
        ['Hub', 'Mathématiques', 'PGCD'],
        ['../../index.html', '', 'gcd.html'],
    );
}); // document.ready