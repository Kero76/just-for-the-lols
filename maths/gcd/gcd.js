// const utils = new Utils();

// /**
//  * Function call after the page loading.
//  * 
//  * @see Utils.createBreadcrumb
//  */
// $(document).ready(function() {
//     utils.createBreadcrumb(
//         'breadcrumb', 
//         ['Hub', 'Mathématiques', 'PGCD'],
//         ['../../index.html', '', 'gcd.html'],
//     );
// }); // document.ready

const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderGcdTemplate() {
    const gcd = new Gcd();

    render.renderTemplate('body-template', gcd.data, 'body-content');
};

/**
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Lettres', 'Renverseur'], 
        ['../../index.html', '', 'reverse.html']
    );
    
    render.renderTemplate('breadcrumb-template', breadcrumb.data, 'breadcrumb-content');
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderGcdTemplate();
    _hydrateAndRenderBreadcrumbTemplate();

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
}); // document.ready

