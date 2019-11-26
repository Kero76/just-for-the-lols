const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const reverse = new Reverse();
    const template = new Template(
        reverse.templateName, 
        reverse.parentBlock,
        reverse.data, 
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
        ['Hub', 'Lettres', 'Renverseur'], 
        ['../../../index.html', '', 'reverse.html'],
        ['before-icon-hub', 'before-icon-letters', ''],
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

