const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const gcd = new Gcd();

    render.renderTemplate('body-template', gcd.data, 'body-content');
};

/**
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'PGCD'], 
        ['../../../index.html', '', 'gcd.html'],
        ['before-icon-hub', 'before-icon-mathematics', '']
    );
    
    render.renderTemplate('breadcrumb-template', breadcrumb.data, 'breadcrumb-content');
}

/**
 * Internal function use to hydrate and render the header.
 */
function _hydrateAndRenderHeaderTemplate() {
    const header = new Header();

    render.renderTemplate('header-template', header.data, 'header-content');
}

/**
 * Internal function use to hydrate and render the footer.
 */
function _hydrateAndRenderFooterTemplate() {
    const footer = new Footer();
    
    render.renderTemplate('footer-template', footer.data, 'footer-content');
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderHeaderTemplate();
    _hydrateAndRenderBreadcrumbTemplate();
    _hydrateAndRenderFooterTemplate();

    /**
     * Get the content of the operands, compute the gcd and show the result under the form.
     */
    $('#compute-gcd').on('click', function() {
        const operandA = $('#operandA').val();
        const operandB = $('#operandB').val();
    
        if (operandA != "" && operandB != "") {
            const result = new Mathematics().euclideanAlgorithm(operandA, operandB);
            utils.showResult(
                'alert-result', 
                (result != 1), 
                [`Le PGCD(${operandA}, ${operandB}) est ${result}`, `Le PGCD(${operandA}, ${operandB}) est ${result}`], 
                ['success', 'warning']
            );
        }
    }); // #compute-gcd.on 
}); // document.ready

