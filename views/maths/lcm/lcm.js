const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const lcm = new Lcm();

    render.renderTemplate('body-template', lcm.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'PPCM'], 
        ['../../../index.html', '', 'lcm.html'],
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
     * Get the content of all fields, then execute the Pythagorean theorem.
     */
    $("#ppcm-execution").on("click", function() {
        const integer1 = parseInt($("#integer1").val());
        const integer2 = parseInt($("#integer2").val());

        if (integer1 !== NaN && integer2 !== NaN) {
            const result  = new Mathematics().lcmAlgorithm(
                integer1,
                integer2
            );
            
            utils.showResult(
                'alert-result', 
                result, 
                [`Le PPCM(${integer1}, ${integer2}) est ${result}.`, 'Veuillez entrer des entiers uniquement'], 
                ['success', 'danger']
            );
        }
    }); // #theorem_execution.on
}); // document.ready

