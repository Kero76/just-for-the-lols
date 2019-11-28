const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const lcm = new Lcm();
    const template = new Template(
        lcm.templateName, 
        lcm.parentBlock,
        lcm.data, 
    );

    const render = new RenderLocalTemplate();
    render.render(template);
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header(
        './../../../templates/includes/header.jsr'
    );
    const footer = new Footer(
        './../../../templates/includes/footer.jsr'
    );
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'PPCM'], 
        ['../../../index.html', '', 'lcm.html'],
        ['before-icon-hub', 'before-icon-mathematics', ''],
        './../../../templates/includes/breadcrumb.jsr',
    );

    const headerTemplate = new Template(
        header.templateName,
        header.parentBlock,
        header.data
    );

    const footerTemplate = new Template(
        footer.templateName,
        footer.parentBlock,
        footer.data
    );

    const breadcrumbTemplate = new Template(
        breadcrumb.templateName,
        breadcrumb.parentBlock,
        breadcrumb.data
    );

    const render = new RenderExternalTemplate();
    render.render(headerTemplate);
    render.render(footerTemplate);
    render.render(breadcrumbTemplate);
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

