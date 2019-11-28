const utils = new Utils();

/**
 * Internal function use to hydrate and render the home template.
 */
function _hydrateAndRenderHomeTemplate() {
    const home = new Home();
    const template = new Template(
        home.templateName, 
        home.parentBlock,
        home.data, 
    );

    const render = new RenderLocalTemplate();
    render.render(template);
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header(
        './templates/includes/header.jsr'
    );
    const footer = new Footer(
        './templates/includes/footer.jsr'
    );
    const breadcrumb = new BreadCrumb(
        ['Hub'],
        ['index.html'],
        ['before-icon-hub'],
        './templates/includes/breadcrumb.jsr',
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
 * Execute the method to hydrate and render all templates.
 */
$(document).ready(function() {
    _hydrateAndRenderHomeTemplate();
    _hydrateAndRenderExternalTemplates();
}); // document.ready
