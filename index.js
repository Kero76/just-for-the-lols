const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the home template.
 */
function _hydrateAndRenderHomeTemplate() {
    const home = new Home();

    render.renderTemplate('body-template', home.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub'],
        ['index.html'],
        ['before-icon-hub']
    );

    const externalTemplatesPath = [
        './templates/includes/header.jsr',
        './templates/includes/breadcrumb.jsr',
        './templates/includes/footer.jsr',
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
 * Execute the method to hydrate and render all templates.
 */
$(document).ready(function() {
    _hydrateAndRenderHomeTemplate();
    _hydrateAndRenderExternalTemplates();
}); // document.ready
