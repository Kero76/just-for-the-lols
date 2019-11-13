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
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub'],
        ['index.html'],
        ['before-icon-hub']
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
 * Execute the method to hydrate and render all templates.
 */
$(document).ready(function() {
    _hydrateAndRenderHomeTemplate();
    _hydrateAndRenderHeaderTemplate();
    _hydrateAndRenderBreadcrumbTemplate();
    _hydrateAndRenderFooterTemplate();
}); // document.ready