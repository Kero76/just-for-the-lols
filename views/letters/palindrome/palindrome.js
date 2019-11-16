const utils = new Utils();
const render = new Render();
const word = new Word();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const palindrome = new Palindrome();

    render.renderTemplate('body-template', palindrome.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Lettres', 'Palindrome'], 
        ['../../../index.html', '', 'palindrome.html'],
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
    $('#palindrome-execution').on('click', function() {
        const palindrome = $('#palindrome').val();
        const $radioChecked = $('input:radio:checked');
        const isCaseSensitive = ($radioChecked.val() === 'case-insensitive')
            ? false
            : true;

        if (palindrome != "") {
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

