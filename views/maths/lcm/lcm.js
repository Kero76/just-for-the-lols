const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const lcm = new Lcm();

    render.renderTemplate('body-template', lcm.data, 'body-content');
};

/**
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'PPCM'], 
        ['../../../index.html', '', 'lcm.html'],
        ['before-icon-hub', 'before-icon-mathematics', '']
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
     * Get the content of all fields, then execute the Pythagorean theorem.
     */
    $("#ppcm-execution").on("click", function() {
        const integer1 = parseInt($("#integer1").val());
        const integer2 = parseInt($("#integer2").val());

        if (integer1 !== NaN && integer2 !== NaN) {
            const result  = new Mathematics().lcmAlgorithm(
                integer1,
                integer2
            );
            
            utils.showResult(
                'alert-result', 
                result, 
                [`Le PPCM(${integer1}, ${integer2}) est ${result}.`, 'Veuillez entrer des entiers uniquement'], 
                ['success', 'danger']
            );
        }
    }); // #theorem_execution.on
}); // document.ready

