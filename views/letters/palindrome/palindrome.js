const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const palindrome = new Palindrome();
    const template = new Template(
        palindrome.templateName, 
        palindrome.parentBlock,
        palindrome.data, 
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
        ['Hub', 'Lettres', 'Palindrome'], 
        ['../../../index.html', '', 'palindrome.html'],
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
    $('#palindrome-execution').on('click', function() {
        const palindrome = $('#palindrome').val();
        const $radioChecked = $('input:radio:checked');
        const isCaseSensitive = ($radioChecked.val() === 'case-insensitive')
            ? false
            : true;

        if (palindrome != "") {
            const word = new Word();
            const result = word.palindrome(palindrome, isCaseSensitive);
            const reverse = word.reverse(palindrome);
            
            utils.showResult(
                'alert-result', 
                result, 
                [`Le mot ${palindrome} est bien un palindrome.`, `Le mot ${palindrome} et son inverse ${reverse} ne sont pas des palindrome.`], 
                ['success', 'danger']
            );
        }
    }); // #reverse-text.on 
}); // document.ready

