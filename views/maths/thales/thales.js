const utils = new Utils();
const mathematics = new Mathematics();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const thales = new Thales();
    const template = new Template(
        thales.templateName, 
        thales.parentBlock,
        thales.data, 
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
        ['Hub', 'Mathématiques', 'Thalès'], 
        ['../../../index.html', '', 'thales.html'],
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
    $("#theorem-execution").on("click", function() {
        
    }); // #theorem_execution.on
}); // document.ready


