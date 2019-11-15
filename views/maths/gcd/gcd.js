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
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'PGCD'], 
        ['../../../index.html', '', 'gcd.html'],
        ['before-icon-hub', 'before-icon-mathematics', '']
    );

    const externalTemplatesPath = [
        './../../../templates/includes/header.jsr',
        './../../../templates/includes/breadcrumb.jsr',
        './../../../templates/includes/footer.jsr',
    ];

    const externalTemplatesData = [
        header.data, 
        breadcrumb.data,
        footer.data
    ];

    const externalTemplatesTargetIds = [
        'header-content',
        'breadcrumb-content',
        'footer-content'
    ]

    // Render the external templates.
    render.renderExternalTemplates(
        externalTemplatesPath, 
        externalTemplatesData, 
        externalTemplatesTargetIds
    );
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderExternalTemplates();

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

