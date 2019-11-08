const gcd = {
    /**
     * Euclidean algorithm to compute the gcd.
     * 
     * @param {number} opA 
     *  First operande of the operation.
     * @param {number} opB 
     *  Seconde operande of the operation.
     * @returns 
     *  The ggreatest common divisor between the operand A et operand B. 
     */
    euclideanAlgorithm(a, b) {
        var opA = a;
        var opB = b;
        var tmp = opA;

        while (opB > 0){
            tmp = opA % opB;
            opA = opB;
            opB = tmp;
        }

        return(opA);
    },
};

/**
 * Get the content of the operands, compute the gcd and show the result under the form.
 */
$('#compute-gcd').on('click', function() {
    const operandA = $('#operandA').val();
    const operandB = $('#operandB').val();

    if (operandA != "" && operandB != "") {
        const result = gcd.euclideanAlgorithm(operandA, operandB);
        Utils.showResult(
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
    Utils.createBreadcrumb('breadcrumb', ['Hub', 'Mathématiques', 'PGCD']);
}); // document.ready