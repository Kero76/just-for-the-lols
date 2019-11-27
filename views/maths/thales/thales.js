const utils = new Utils();
const mathematics = new Mathematics();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const thales = new Thales();
    const template = new Template(
        thales.templateName, 
        thales.parentBlock,
        thales.data, 
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
        ['Hub', 'Mathématiques', 'Thalès'], 
        ['../../../index.html', '', 'thales.html'],
        ['before-icon-hub', 'before-icon-mathematics', ''],
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
     * Get the content of all fields, then execute the Pythagorean theorem.
     */
    $("#theorem-execution").on("click", function() {
        const ad = parseFloat($('#ad').val());
        const ae = parseFloat($('#ae').val());
        const de = parseFloat($('#de').val());
        const ab = parseFloat($('#ab').val());
        const ac = parseFloat($('#ac').val());
        const bc = parseFloat($('#bc').val());

        const inputs = [
            !isNaN(ad), !isNaN(ae), !isNaN(de),
            !isNaN(ab), !isNaN(ac), !isNaN(bc)
        ];

        const filterFn = b => b;
        if (inputs.filter(filterFn).length === 4) {
            const res = mathematics.interceptTheorem(ad, ab, ae, ac, de, bc);

            // Fill empty input and change background color of it to indicate the result.
        } else if (inputs.filter(filterFn).length === 6) {
            // Execute converse of the theorem
        } else {
            utils.showResult(
                'alert-result', 
                false, 
                ['', `Veuillez renseigner 4 des 6 champs présents pour exécuter le théorème de Thalès et les 6 champs pour exécuter la réciproque.`], 
                ['', 'danger']
            );
        }
    }); // #theorem_execution.on

    // Clean fields on button click.
    $('#clean-fields').on('click', function() {
        $('#ad').val('');
        $('#ae').val('');
        $('#de').val('');
        $('#ab').val('');
        $('#ac').val('');
        $('#bc').val('');
    }); // #clean-fields.on
}); // document.ready


