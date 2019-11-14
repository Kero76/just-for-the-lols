const utils = new Utils();
const render = new Render();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const pythagorean = new Pythagorean();

    render.renderTemplate('body-template', pythagorean.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'Pythagore'], 
        ['../../../index.html', '', 'gcd.html'],
        ['before-icon-hub', 'before-icon-mathematics', '']
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
     * Get the content of all fields, then execute the Pythagorean theorem.
     */
    $("#theorem-execution").on("click", function() {
        const hypothenuse = $("#hypothenuse").val();
        const cathetus1 = $("#cathetus1").val();
        const cathetus2 = $("#cathetus2").val();

        if (hypothenuse != "" && cathetus1 != "" && cathetus2 != "") {
            const result  = new Mathematics().pythagoreanTheorem(
                hypothenuse,
                cathetus1,
                cathetus2
            );
            
            utils.showResult(
                'alert-result', 
                result, 
                [`Le triangle est rectangle en C.`, `Le triangle n'est pas rectangle en C.`], 
                ['success', 'danger']
            );
        }
    }); // #theorem_execution.on
}); // document.ready


