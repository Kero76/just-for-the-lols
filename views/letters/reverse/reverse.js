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
        ['../../../index.html', '', 'reverse.html']
    );
    
    render.renderTemplate('breadcrumb-template', breadcrumb.data, 'breadcrumb-content');
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderBreadcrumbTemplate();

    /**
     * Get the content of the text and reverse it on alert.
     */
    $('#reverse-text').on('click', function() {
        const text = $('#text').val();

        if (text != "") {
            const result = new Word().reverse(text);
            utils.showResult(
                'alert-result', 
                (result != ""), 
                [result], 
                ['success']
            );
        }
    }); // #reverse-text.on 
}); // document.ready

