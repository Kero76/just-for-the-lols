const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const reverse = new Reverse();

    render.renderTemplate('body-template', reverse.data, 'body-content');
};

/**
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Lettres', 'Renverseur'], 
        ['../../../index.html', '', 'reverse.html'],
        ['before-icon-hub', 'before-icon-letters', '']
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
     * Get the content of the text and reverse it on alert.
     */
    $('#reverse-text').on('click', function() {
        const text = $('#text').val();

        if (text != "") {
            const result = new Word().reverse(text);
            const $textarea = $('#alert-result > textarea'); 
            $textarea.text('');
            $textarea.text(result);
        }
    }); // #reverse-text.on 
}); // document.ready

