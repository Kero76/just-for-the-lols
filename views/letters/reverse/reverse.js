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
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Lettres', 'Renverseur'], 
        ['../../../index.html', '', 'reverse.html'],
        ['before-icon-hub', 'before-icon-letters', '']
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

